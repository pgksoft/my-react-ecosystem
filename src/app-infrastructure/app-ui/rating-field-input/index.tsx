import React, { useRef, useState } from 'react';
import {
  Rating,
  RatingProps,
  FormControl,
  FormHelperText,
  type FormControlProps,
  type FormHelperTextProps,
  Stack,
  Typography,
  Tooltip,
  Zoom
} from '@mui/material';
import { Instance, type Placement } from '@popperjs/core';
import { getCheckRating } from '../../../domain/el-if-tech-delivery/shops/helpers/get-check-rating';

type TRatingInputYup = {
  inputKind: 'yup';
  fieldName: string;
  value: number | null;
  isValid: boolean;
  errorMessage?: string;
  customOnChange: (fieldName: string, value: number | null) => void;
};

type TRatingInputMUI = {
  inputKind: 'mui';
  customOnChange: (event: React.SyntheticEvent, value: number | null) => void;
};

type TFieldWrapperProps = {
  label?: React.ReactNode;
  formControl?: FormControlProps;
  formHelperText?: FormHelperTextProps;
};

type TRatingFieldInput = RatingProps &
  (TRatingInputYup | TRatingInputMUI) &
  TFieldWrapperProps;

const RatingFieldInput: React.FC<TRatingFieldInput> = (props) => {
  const { inputKind, customOnChange, ...rest } = props;

  const { fieldName, isValid, errorMessage, value, label, ...muiProps } =
    rest as RatingProps & TRatingInputYup & TFieldWrapperProps;

  const [hover, setHover] = useState<number | null>(null);

  // Implement a custom placement for ToolTip
  const positionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const popperRef = useRef<Instance | null>(null);
  const areaRef = useRef<HTMLDivElement | null>(null);
  const placement: Placement = 'bottom';
  const anchorEl = {
    getBoundingClientRect: () => {
      const areaRect = areaRef.current!.getBoundingClientRect();
      const cursor = positionRef.current;

      let x = cursor.x;
      let y = cursor.y;

      if (placement.startsWith('top')) {
        y = areaRect.top;
      } else if (placement.startsWith('bottom')) {
        y = areaRect.bottom;
      } else if (placement.startsWith('left')) {
        x = areaRect.left;
        // y = areaRect.top + areaRect.height / 2;
      } else if (placement.startsWith('right')) {
        x = areaRect.right;
        // y = areaRect.top + areaRect.height / 2;
      }

      const OFFSET = 0;
      return new DOMRect(x, y + OFFSET, 0, 0);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY };
    popperRef.current?.update?.();
  };

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number | null
  ) => {
    if (inputKind === 'yup') {
      customOnChange(fieldName, (newValue && newValue * 10) || null);
    } else {
      customOnChange(event, newValue);
    }
  };

  const checkRating = getCheckRating(value || 0);

  const isYup = inputKind === 'yup';
  const errorState = isYup ? !isValid : muiProps.formControl?.error;
  const helperText = isYup ? errorMessage : muiProps.formHelperText?.title;

  return (
    <FormControl
      error={errorState}
      component='fieldset'
      variant='standard'
      {...muiProps.formControl}
    >
      {label ? (
        <Typography
          variant='caption'
          color={(errorState && 'error') || 'primary'}
        >
          {`${label}: ${(!!value && (value / 10).toFixed(1)) || ''}`}
        </Typography>
      ) : null}
      <Stack direction='row' spacing={1}>
        <Tooltip
          title={(hover && `${hover}`) || ''}
          placement={placement}
          slots={{
            transition: Zoom
          }}
          slotProps={{
            popper: {
              popperRef,
              anchorEl
            },
            tooltip: {
              sx: {
                bgcolor: getCheckRating((!!hover && hover * 10) || 0).bgColor,
                fontWeight: 700
              }
            }
          }}
        >
          <Rating
            ref={areaRef}
            onMouseMove={handleMouseMove}
            name={isYup ? fieldName : muiProps.name}
            value={(value && value / 10) || null}
            precision={0.1}
            onChange={handleChange}
            onChangeActive={(e, newHover) => {
              setHover(newHover);
            }}
            {...muiProps}
          />
        </Tooltip>
        <Typography
          component='legend'
          color={checkRating.color}
          sx={{ fontWeight: '600' }}
          noWrap={true}
        >
          {checkRating.label}
        </Typography>
      </Stack>
      {helperText ? (
        <FormHelperText error={errorState} {...muiProps.formHelperText}>
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default RatingFieldInput;
