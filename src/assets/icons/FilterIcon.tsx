import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

const FilterIcon = () => {
  return (
    <Svg width={16} height={14} fill="none">
      <Path
        fill={colors.GRAY}
        fillRule="evenodd"
        d="M.779 3.107h.918a2.335 2.335 0 0 0 4.39 0h8.705a.778.778 0 1 0 0-1.557H6.088a2.336 2.336 0 0 0-4.39 0h-.92a.779.779 0 1 0 0 1.557ZM3.893 1.55a.779.779 0 1 1 0 1.557.779.779 0 0 1 0-1.557Zm9.342 3.114a2.335 2.335 0 0 0-2.196 1.557H.78a.779.779 0 1 0 0 1.558h10.26a2.335 2.335 0 1 0 2.196-3.115Zm0 3.115a.778.778 0 1 1 0-1.557.778.778 0 0 1 0 1.556Zm-4.033 3.114h5.59a.778.778 0 1 1 0 1.556h-5.59a2.335 2.335 0 0 1-4.39 0H.778a.778.778 0 1 1 0-1.556H4.81a2.336 2.336 0 0 1 4.391 0Zm-2.628 1.425a.778.778 0 1 0 .865-1.293.778.778 0 0 0-.865 1.293Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default FilterIcon;
