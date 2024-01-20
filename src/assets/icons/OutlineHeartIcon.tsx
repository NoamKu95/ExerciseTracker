import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

const OutlineHeartIcon = () => {
  return (
    <Svg width="10" height="17" viewBox="0 0 10 17" fill="none">
      <Path
        stroke={colors.PRIMARY}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 4.154C8-.54 1-.04 1 5.96s9 11 9 11 9-5 9-11-7-6.5-9-1.806Z"
      />
    </Svg>
  );
};

export default OutlineHeartIcon;
