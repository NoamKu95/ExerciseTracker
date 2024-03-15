import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

interface HearIconProps {
  color?: string;
}

const OutlineHeartIcon = ({color = colors.PRIMARY}: HearIconProps) => {
  return (
    <Svg width={20} height={19} fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 4.694C8 0 1 .5 1 6.5s9 11 9 11 9-5 9-11-7-6.5-9-1.806Z"
      />
    </Svg>
  );
};

export default OutlineHeartIcon;
