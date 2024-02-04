import React from 'react';
import {StyleSheet, View} from 'react-native';
// Components
import {BoldText} from './Base/Texts';
// UI
import {FontSizes} from '../constants/ui/fonts';
import {colors} from '../constants/ui/colors';
import {radiuses} from '../constants/ui/radiuses';

interface CircleCounterProps {
  text: string;
}

const CircledCounter = ({text}: CircleCounterProps) => {
  return (
    <View style={styles.numIndicator}>
      <BoldText
        children={text}
        size={FontSizes.small}
        color={colors.SECONDARY}
      />
    </View>
  );
};

export default CircledCounter;

const styles = StyleSheet.create({
  numIndicator: {
    width: 20,
    height: 20,
    backgroundColor: colors.WHITE,
    borderRadius: radiuses._50px,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
