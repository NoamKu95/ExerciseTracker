import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {colors} from '../../constants/ui/colors';

interface WorkoutIconProps {
  size?: number;
  isFocused?: boolean;
}

const WorkoutIcon = ({size = 1, isFocused = false}: WorkoutIconProps) => {
  return (
    <Svg width={size * 29} height={size * 29} viewBox="0 0 29 29" fill="none">
      <Path
        fill={isFocused ? colors.PRIMARY : colors.GRAY}
        fillRule="evenodd"
        d="m14.158 6.287-.019.019-3.21 3.21.005.004 8.545 8.546.005.005 3.21-3.21.019-.02c.152-.15.3-.299.434-.415.147-.128.332-.269.572-.366a2 2 0 0 1 1.5 0c.24.097.425.238.572.366.135.117.282.264.434.416l.02.02.024.024c.484.484.883.883 1.187 1.232.315.363.578.727.751 1.155a4 4 0 0 1 0 3c-.173.428-.436.792-.751 1.154-.304.35-.703.749-1.187 1.233l-.025.024-1.073 1.073.005.005 1.424 1.425a1 1 0 0 1-1.414 1.414l-1.424-1.424-.005-.005-1.073 1.073-.025.025c-.484.483-.883.883-1.232 1.187-.363.315-.726.578-1.155.75a4 4 0 0 1-3 0c-.428-.172-.791-.435-1.154-.75-.35-.304-.749-.704-1.232-1.187l-.025-.025-.02-.02c-.151-.151-.299-.299-.416-.433a2.028 2.028 0 0 1-.365-.573 2 2 0 0 1 0-1.5c.097-.24.237-.425.365-.572.117-.134.265-.282.417-.434l.019-.019 3.21-3.21-.006-.004-8.545-8.546-.004-.004-3.21 3.209-.019.02c-.151.15-.3.299-.434.415a2.028 2.028 0 0 1-.572.366 2 2 0 0 1-1.5 0 2.027 2.027 0 0 1-.572-.365c-.134-.117-.282-.265-.434-.417l-.02-.02-.024-.024c-.484-.484-.883-.883-1.187-1.232-.315-.363-.578-.727-.751-1.155a4 4 0 0 1 0-3c.173-.428.436-.792.751-1.154.304-.35.704-.75 1.187-1.233l.025-.025 1.073-1.073-.005-.005L2.4 3.813A1 1 0 1 1 3.814 2.4l1.424 1.424.005.005 1.073-1.073.025-.025c.484-.483.883-.883 1.233-1.187.362-.315.726-.578 1.154-.75a4 4 0 0 1 3 0c.428.172.792.435 1.154.75.35.304.749.704 1.232 1.187l.025.025.02.02c.151.15.299.299.416.433.128.147.268.333.365.572a2 2 0 0 1 0 1.5c-.097.24-.237.426-.365.573-.117.134-.265.282-.416.433ZM13.074 4.53l-.008-.01a8.162 8.162 0 0 0-.34-.35c-.516-.515-.866-.865-1.156-1.118-.284-.246-.455-.35-.592-.406a2 2 0 0 0-1.5 0c-.137.056-.308.16-.592.406-.29.253-.64.603-1.155 1.117L4.17 7.73c-.516.515-.865.866-1.118 1.156-.246.284-.35.455-.406.592a2 2 0 0 0 0 1.5c.055.137.16.308.406.592.253.29.602.641 1.117 1.156.178.178.276.275.351.34l.01.009.01-.009a8.18 8.18 0 0 0 .351-.34L8.81 8.808l3.916-3.917a8.15 8.15 0 0 0 .34-.35l.01-.01Zm13.279 14.993c-.055.137-.16.308-.406.592-.253.29-.602.64-1.117 1.155l-3.56 3.56c-.515.515-.865.865-1.156 1.118-.284.246-.455.35-.592.406a2 2 0 0 1-1.5 0c-.136-.056-.308-.16-.591-.406-.291-.253-.641-.603-1.156-1.117a8.214 8.214 0 0 1-.34-.352l-.01-.01.01-.01c.065-.075.162-.172.34-.35l7.833-7.834c.178-.178.276-.275.351-.34l.01-.009.01.009c.075.065.173.162.351.34.515.515.864.865 1.117 1.156.247.284.35.455.406.592a2 2 0 0 1 0 1.5Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default WorkoutIcon;
