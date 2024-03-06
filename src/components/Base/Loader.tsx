import React from 'react';
import {ActivityIndicator} from 'react-native';

interface LoaderProps {
  bgColor?: string;
  customHeight?: number;
}

const Loader = ({bgColor, customHeight}: LoaderProps) => {
  return (
    <ActivityIndicator
      style={[{height: customHeight, backgroundColor: bgColor}]}
    />
  );
};

export default Loader;
