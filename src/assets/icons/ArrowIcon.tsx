import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

const BackArrow = () => {
  return (
    <Svg width="10" height="17" viewBox="0 0 10 17" fill="none">
      <Path
        d="M8 15L1 8.6L8 2"
        stroke={colors.PRIMARY}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackArrow;
