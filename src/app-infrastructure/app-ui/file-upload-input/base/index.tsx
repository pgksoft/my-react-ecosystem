/* eslint-disable @typescript-eslint/no-use-before-define */
// src/app-infrastructure/app-ui/file-upload-input/file-upload-input.tsx
import React, { useRef, useState, useCallback, useEffect } from 'react';
import {
  Box,
  Typography,
  Chip,
  Stack,
  Avatar,
  SxProps,
  Theme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import useAppSelector from '../../../../store/use-app-selector';
import { isToResetSelector } from '../../../../redux-toolkit/reset-to-initial-data/reset-to-initial-data-selectors';

type TFileListOrNull = FileList | null;

type TPreviewItem = {
  file: File;
  url: string; // object URL
  isImage: boolean;
};

export type TFileUploadInputBaseProps = {
  fieldName: string;
  customOnChange: (fieldName: string, value: TFileListOrNull) => void;
  value?: TFileListOrNull; // controlled value
  isValid?: boolean;
  errorMessage?: string;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  showPreview?: boolean;
  dragDrop?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
};

const FileUploadInputBase: React.FC<
  TFileUploadInputBaseProps & {
    renderTrigger: (openFileDialog: () => void) => React.ReactNode;
  }
> = ({
  fieldName,
  customOnChange,
  value,
  isValid = true,
  errorMessage = '',
  accept,
  multiple = false,
  maxFiles,
  showPreview = true,
  dragDrop = false,
  disabled = false,
  sx,
  renderTrigger
}) => {
  const isToReset = useAppSelector(isToResetSelector);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filesState, setFilesState] = useState<TFileListOrNull>(null);
  const [previews, setPreviews] = useState<TPreviewItem[]>([]);
  const [dragOver, setDragOver] = useState(false);

  const openFileDialog = useCallback(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);

  // apply files: set state, build previews, call external handler
  const applyFilesInner = useCallback(
    (files: TFileListOrNull): TFileListOrNull => {
      if (!files || files.length === 0) {
        // cleanup previous previews
        //revokeAll(previews); - look prevPreviewsRef & after
        setPreviews([]);
        setFilesState(null);
        return null;
      }

      // Creating an independent copy of FileList
      const copyFiles = createFakeFileList(Array.from(files));
      const newPreviews = buildPreviews(getResolvedFiles(files, maxFiles));

      //revokeAll(previews); - look prevPreviewsRef & after
      setFilesState(copyFiles);
      setPreviews(newPreviews);

      return copyFiles;
    },
    [maxFiles]
  );

  const applyFiles = useCallback(
    (files: TFileListOrNull) => {
      const result = applyFilesInner(files);
      customOnChange(fieldName, result);
    },
    [applyFilesInner, customOnChange, fieldName]
  );

  // input change
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    applyFiles(files);
    if (inputRef.current) inputRef.current.value = '';
  };

  // remove single file by index
  const onRemoveFile = (index?: number) => {
    if (!filesState) return;
    if (!multiple) {
      revokeAll(previews);
      setFilesState(null);
      setPreviews([]);
      prevValueKeyRef.current = null;
      customOnChange(fieldName, null);
      return;
    }
    const arr = Array.from(filesState);
    if (typeof index === 'number') arr.splice(index, 1);
    const fake = createFakeFileList(arr);
    const newPreviews = buildPreviews(fake);
    revokeAll(previews);
    setFilesState(fake);
    setPreviews(newPreviews);
    customOnChange(fieldName, fake);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (disabled) return;
    const dtFiles = e.dataTransfer.files;
    if (!dtFiles) return;
    applyFiles(dtFiles);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (disabled) return;
    setDragOver(true);
  };

  const onDragLeave = () => {
    return setDragOver(false);
  };

  // storing previous previews (to revoke them after an update)
  const prevPreviewsRef = useRef<TPreviewItem[] | null>(null);

  useEffect(() => {
    // prev — old previews that need to be recalled
    const prev = prevPreviewsRef.current;
    // Updating ref to the current previews.
    prevPreviewsRef.current = previews;

    // If there were old previews, we revoke them, but do so asynchronously,
    // to give the browser time to update the DOM (even though `useEffect` runs after the render)
    if (prev && prev.length > 0) {
      // It can be revoked immediately—we are already in the effect phase after rendering.,
      // but for an extra safeguard, you can defer it to the next tick:
      const id = window.setTimeout(() => {
        revokeAll(prev);
      }, 0);

      return () => {
        clearTimeout(id);
      };
    }

    // if there is no `prev`, we do nothing
    return undefined;
  }, [previews]);

  // react to external controlled value changes
  const prevValueKeyRef = useRef<string | null>(
    fileListIdentityKey(filesState)
  );

  useEffect(() => {
    const incomingKey = fileListIdentityKey(value ?? null);
    const prevKey = prevValueKeyRef.current;

    if (incomingKey === prevKey) return;

    prevValueKeyRef.current = incomingKey;

    // applyFilesInner only updates internal state and previews (no customOnChange)
    applyFilesInner(value ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // reset handling
  useEffect(() => {
    if (isToReset) {
      revokeAll(previews);
      setPreviews([]);
      setFilesState(null);
      prevValueKeyRef.current = null;
    }
  }, [isToReset, previews]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      revokeAll(previews);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <input
        ref={inputRef}
        type='file'
        accept={accept}
        multiple={multiple}
        style={{ display: 'none' }}
        onChange={onInputChange}
        aria-hidden
      />

      <Box
        onDrop={dragDrop ? onDrop : undefined}
        onDragOver={dragDrop ? onDragOver : undefined}
        onDragLeave={dragDrop ? onDragLeave : undefined}
        role='region'
        aria-label='Region of upload files'
        tabIndex={0}
        sx={{
          border: dragDrop ? '1px dashed' : undefined,
          borderColor: dragOver ? 'primary.main' : 'transparent',
          p: dragDrop ? 2 : 0,
          borderRadius: 1,
          bgcolor: dragOver ? 'action.hover' : 'transparent'
        }}
      >
        {renderTrigger(openFileDialog)}

        {showPreview && previews.length > 0 && (
          <Stack
            direction='row'
            spacing={1}
            mt={1}
            flexWrap='wrap'
            alignItems='center'
          >
            {previews.map((p, i) => {
              return (
                <Chip
                  key={`${p.file.name}-${i}`}
                  onDelete={() => {
                    return onRemoveFile(i);
                  }}
                  deleteIcon={<CloseIcon />}
                  variant='outlined'
                  sx={{
                    height: 56,
                    '& .MuiChip-avatar': {
                      width: 48,
                      height: 48
                    }
                  }}
                  avatar={
                    p.isImage ? (
                      <Avatar
                        src={p.url}
                        alt={p.file.name}
                        sx={{
                          width: 64,
                          '& .MuiAvatar-img': {
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }
                        }}
                      />
                    ) : (
                      <Avatar>
                        <InsertDriveFileIcon fontSize='small' />
                      </Avatar>
                    )
                  }
                  label={`${p.file.name} (${Math.round(p.file.size / 1024)} KB)`}
                />
              );
            })}
          </Stack>
        )}

        {!isValid && (
          <Typography color='error' variant='caption' mt={1}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FileUploadInputBase;

// Helpers
const fileListIdentityKey = (files: TFileListOrNull): string | null => {
  if (!files || files.length === 0) return null;
  return Array.from(files)
    .map((item) => {
      return `${item.name}:${item.size}:${item.lastModified}`;
    })
    .join('|');
};

const getResolvedFiles = (files: FileList, maxFiles?: number): FileList => {
  if (maxFiles && files.length > maxFiles) {
    const arr = Array.from(files).slice(0, maxFiles);
    return createFakeFileList(arr);
  }
  return files;
};

const createFakeFileList = (arr: File[]): FileList => {
  return Object.defineProperty(new DataTransfer(), 'files', {
    get: () => {
      const dt = new DataTransfer();
      arr.forEach((f) => {
        return dt.items.add(f);
      });
      return dt.files;
    }
  }).files;
};

// create previews for FileList
const buildPreviews = (files: FileList | null) => {
  if (!files) return [];
  return Array.from(files).map((f) => {
    const isImage = f.type.startsWith('image/');
    return {
      file: f,
      url: isImage ? URL.createObjectURL(f) : '',
      isImage: isImage
    };
  });
};

// revoke all object URLs
const revokeAll = (items: TPreviewItem[]) => {
  items.forEach((it) => {
    if (it.url) URL.revokeObjectURL(it.url);
  });
};
