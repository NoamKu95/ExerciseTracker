import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

interface EditIconProps {
  color?: string;
  size?: number;
}

const TrashIcon = ({color, size = 1}: EditIconProps) => {
  return (
    <Svg width={size * 19} height={size * 21} fill="none">
      <Path
        stroke={color ?? colors.WHITE}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.5 8.5v7m-4-7v7m-4-11v11.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218.377-.192.684-.498.875-.874.218-.428.218-.987.218-2.105V4.5m-12 0h2m-2 0h-2m4 0h8m-8 0c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.082-1.083C7.102 1.5 7.568 1.5 8.5 1.5h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765m0 0h2m0 0h2"
      />
    </Svg>
  );
};

export default TrashIcon;
