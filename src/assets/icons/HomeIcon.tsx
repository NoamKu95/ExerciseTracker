import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

interface HomeIconProps {
  isFocused?: boolean;
}

const HomeIcon = ({isFocused = false}: HomeIconProps) => {
  return (
    <Svg width="28" height="29" viewBox="0 0 28 29" fill="none">
      <Path
        fill={isFocused ? colors.PRIMARY : colors.GRAY}
        fillRule="evenodd"
        d="M13.897 3.497a1.018 1.018 0 0 1 1.204 0l10.182 7.467c.261.192.416.496.416.82v12.219c0 .562-.456 1.018-1.018 1.018h-7.467a1.018 1.018 0 0 1-1.018-1.018v-5.09h-3.394v5.09c0 .562-.456 1.018-1.018 1.018H4.317a1.018 1.018 0 0 1-1.018-1.018V11.785c0-.325.154-.63.416-.821l10.182-7.467Zm-8.562 8.804v10.684h5.43v-5.091c0-.562.456-1.018 1.019-1.018h5.43c.562 0 1.018.456 1.018 1.018v5.09h5.43V12.302L14.5 5.58 5.335 12.3Z"
        clipRule="evenodd"
      />
      <Path
        fill={isFocused ? colors.PRIMARY : colors.GRAY}
        stroke={isFocused ? colors.PRIMARY : colors.GRAY}
        d="M5.166 12.167V23.25h5.833v-6.417h7v7h5.833V12.167L14.5 5.75l-9.333 6.417Z"
      />
    </Svg>
  );
};

export default HomeIcon;
