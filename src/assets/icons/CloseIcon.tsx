import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

const CloseIcon = () => {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <Path
        fill={colors.PRIMARY}
        d="M18.06 2.987a1.33 1.33 0 0 0-1.88-1.88L9.667 7.62 3.153 1.107a1.33 1.33 0 1 0-1.88 1.88L7.788 9.5l-6.513 6.513a1.33 1.33 0 1 0 1.88 1.88l6.513-6.513 6.513 6.513a1.33 1.33 0 1 0 1.88-1.88L11.547 9.5l6.513-6.513Z"
      />
    </Svg>
  );
};

export default CloseIcon;
