import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

interface ProgressIconProps {
  size?: number;
  isFocused?: boolean;
}

const ProgressIcon = ({size = 1, isFocused = false}: ProgressIconProps) => {
  return (
    <Svg width={size * 29} height={size * 29} viewBox="0 0 20 20" fill="none">
      <Path
        fill={isFocused ? colors.PRIMARY : colors.LIGHT_GRAY}
        d="M8.201 20.45a1.05 1.05 0 1 0 2.1 0v-4.9a1.05 1.05 0 1 0-2.1 0v4.9ZM14.851 21.5c-.58 0-1.05-.47-1.05-1.05v-9.1a1.05 1.05 0 1 1 2.1 0v9.1c0 .58-.47 1.05-1.05 1.05ZM19.401 20.45a1.05 1.05 0 0 0 2.1 0V8.55a1.05 1.05 0 1 0-2.1 0v11.9Z"
      />
      <Path
        fill={isFocused ? colors.PRIMARY : colors.LIGHT_GRAY}
        fillRule="evenodd"
        d="M3.301 6.1a2.8 2.8 0 0 1 2.8-2.8h16.8a2.8 2.8 0 0 1 2.8 2.8v16.8a2.8 2.8 0 0 1-2.8 2.8h-16.8a2.8 2.8 0 0 1-2.8-2.8V6.1Zm2.8-.7h16.8a.7.7 0 0 1 .7.7v16.8a.7.7 0 0 1-.7.7h-16.8a.7.7 0 0 1-.7-.7V6.1a.7.7 0 0 1 .7-.7Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ProgressIcon;
