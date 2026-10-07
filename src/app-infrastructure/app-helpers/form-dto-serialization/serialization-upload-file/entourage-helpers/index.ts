import { TITLES_OF_APP } from '../../../../app-const/titles-of-app';

type TSerializedFileMeta = {
  name: string;
  type: string;
  size: number;
  lastModified: number;
  dataUrl: string;
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => {
      return res(String(reader.result));
    };
    reader.onerror = () => {
      return rej(new Error(TITLES_OF_APP.uploadedFileReadError));
    };
    reader.readAsDataURL(file);
  });
};

const serializeFile = async (
  file: File | null
): Promise<TSerializedFileMeta | null> => {
  if (!file) return null;
  const dataUrl = await fileToBase64(file);
  return {
    name: file.name,
    type: file.type,
    size: file.size,
    lastModified: file.lastModified,
    dataUrl
  };
};

const base64ToFile = (
  dataUrl: string,
  name: string,
  type: string,
  lastModified = Date.now()
): File => {
  const parts = dataUrl.split(',');
  const base64 = parts[1] ?? '';
  const binary = atob(base64);
  const len = binary.length;
  const u8 = new Uint8Array(len);
  for (let i = 0; i < len; i++) u8[i] = binary.charCodeAt(i);
  const mime =
    (parts[0].match(/:(.*?);/) || [])[1] || type || 'application/octet-stream';
  return new File([u8], name, { type: mime, lastModified });
};

const createSingleFileList = (file: File): FileList => {
  const dt = new DataTransfer();
  dt.items.add(file);
  return dt.files;
};

const deserializeSingleFileToFileList = (
  serialized: TSerializedFileMeta | null
): FileList | null => {
  if (!serialized) return null;
  const file = base64ToFile(
    serialized.dataUrl,
    serialized.name,
    serialized.type,
    serialized.lastModified
  );
  return createSingleFileList(file);
};

export type { TSerializedFileMeta };

export {
  fileToBase64,
  serializeFile,
  base64ToFile,
  createSingleFileList,
  deserializeSingleFileToFileList
};
