import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

interface PlusIconProps {
  size?: number;
  color?: string;
}

const PlusIcon = ({size = 1, color = colors.WHITE}: PlusIconProps) => {
  return (
    <Svg width={size * 23} height={size * 24} viewBox="0 0 23 24" fill="none">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M10 1a1 1 0 1 0-2 0v7H1a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default PlusIcon;
