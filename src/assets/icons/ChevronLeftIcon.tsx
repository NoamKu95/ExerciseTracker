import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

const ChevronLeftIcon = () => {
  return (
    <Svg width={10} height={16} fill="none">
      <Path
        stroke={colors.PRIMARY}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.238}
        d="M8 2 2 8l6 6"
      />
    </Svg>
  );
};

export default ChevronLeftIcon;
