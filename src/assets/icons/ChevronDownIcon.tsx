import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

const ChevronDownIcon = () => {
  return (
    <Svg width="16" height="10" viewBox="0 0 16 10" fill="none">
      <Path
        d="M2 2L8 8L14 2"
        stroke={colors.PRIMARY}
        stroke-width="2.23765"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ChevronDownIcon;
