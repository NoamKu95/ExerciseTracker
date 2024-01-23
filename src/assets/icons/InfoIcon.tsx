import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

const InfoIcon = () => {
  return (
    <Svg width="23" height="24" viewBox="0 0 23 24" fill="none">
      <Path
        fill={colors.WHITE}
        d="M11.841 10.95c.58 0 1.05.47 1.05 1.05v5.055a1.05 1.05 0 1 1-2.1 0V12c0-.58.47-1.05 1.05-1.05ZM11.197 6.53a1.414 1.414 0 1 1 1.57 2.351 1.414 1.414 0 0 1-1.57-2.35Z"
      />
      <Path
        fill={colors.WHITE}
        fillRule="evenodd"
        d="M3.95 4.11a11.159 11.159 0 1 1 15.782 15.78A11.159 11.159 0 0 1 3.95 4.11Zm7.891-1.169a9.059 9.059 0 1 0 0 18.118 9.059 9.059 0 0 0 0-18.118Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default InfoIcon;
