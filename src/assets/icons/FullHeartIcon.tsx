import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

const FullHeartIcon = () => {
  return (
    <Svg width="28" height="25" viewBox="0 0 28 25" fill="none">
      <Path
        fill={colors.PRIMARY}
        d="M14 5.774C10.889-1.579 0-.796 0 8.603 0 18 14 25.833 14 25.833s14-7.832 14-17.23C28-.796 17.111-1.58 14 5.774Z"
      />
    </Svg>
  );
};

export default FullHeartIcon;
