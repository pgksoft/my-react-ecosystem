import React, { FC } from 'react';
import { Avatar } from '@mui/material';

type TTypeIconSize = 'small' | 'medium' | 'large';

const iconSizes: Record<TTypeIconSize, Object> = {
  small: { height: 24, width: 24 },
  medium: { height: 48, width: 48 },
  large: { height: 72, width: 72 }
};

type TIconMenuAvatarWrapProps = {
  size: TTypeIconSize;
  src: string;
};

const IconMenuAvatarWrap: FC<TIconMenuAvatarWrapProps> = (props) => {
  const { size, src } = props;
  return (
    <Avatar
      variant='rounded'
      sx={{
        marginLeft: -1,
        ...iconSizes[size],
        alignSelf: 'center',
        boxSizing: 'border-box',
        border: '1px solid lightgray',
        padding: '1px'
      }}
      src={src}
    />
  );
};

export default IconMenuAvatarWrap;
