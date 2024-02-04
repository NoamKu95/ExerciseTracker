import React from 'react';
import {StyleSheet, View} from 'react-native';
// UI
import {colors} from '../constants/ui/colors';
import {spaces} from '../constants/ui/spaces';
import {radiuses} from '../constants/ui/radiuses';

interface Props {
  isSelected: boolean;
}

const CarouselDot = (props: Props) => {
  return (
    <View style={styles.dotContainer}>
      <View
        style={
          props.isSelected
            ? styles.dotContainerSelected
            : styles.dotContainerNotSelected
        }
      />
    </View>
  );
};

export default CarouselDot;

const styles = StyleSheet.create({
  dotContainer: {
    paddingHorizontal: spaces._4px,
  },
  dotContainerNotSelected: {
    backgroundColor: colors.GRAY,
    opacity: 0.5,
    width: 10,
    height: 10,
    borderRadius: radiuses._50px,
  },
  dotContainerSelected: {
    backgroundColor: colors.PRIMARY,
    width: 20,
    height: 10,
    borderRadius: radiuses._50px,
  },
});
