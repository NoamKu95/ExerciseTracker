import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

interface ProfileIconProps {
  size?: number;
  isFocused?: boolean;
}

const ProfileIcon = ({size = 1, isFocused = false}: ProfileIconProps) => {
  return (
    <Svg width={size * 28} height={size * 29} viewBox="0 0 20 20" fill="none">
      <Path
        fill={isFocused ? colors.PRIMARY : colors.LIGHT_GRAY}
        fillRule="evenodd"
        d="M14.351 3.37a5.412 5.412 0 1 0 0 10.824 5.412 5.412 0 0 0 0-10.824Zm-1.267 2.352a3.312 3.312 0 1 1 2.535 6.12 3.312 3.312 0 0 1-2.535-6.12ZM13.776 15.524l.05-.001h1.05l.057.001c1.58.064 3.116.485 4.462 1.222 1.347.738 2.46 1.77 3.23 2.996a7.516 7.516 0 0 1 1.176 4.012v.964c0 .542-.496.982-1.108.982H6.009c-.612 0-1.108-.44-1.108-.982v-.964c0-1.404.404-2.785 1.176-4.012.77-1.226 1.883-2.258 3.23-2.996a10.162 10.162 0 0 1 4.47-1.222Zm.076 1.964h.998a7.735 7.735 0 0 1 3.38.93 6.68 6.68 0 0 1 2.46 2.28c.584.93.892 1.974.895 3.037H7.118a5.725 5.725 0 0 1 .895-3.036 6.677 6.677 0 0 1 2.46-2.282 7.736 7.736 0 0 1 3.379-.93ZM7.118 23.75v-.015.015Zm14.467 0v-.015.015Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ProfileIcon;
