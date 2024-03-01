import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

const CheckIcon = () => {
  return (
    <Svg width={18} height={13} fill="none">
      <Path
        stroke={colors.WHITE}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 7 4.95 4.95L16.557 1.343"
      />
    </Svg>
  );
};

export default CheckIcon;
