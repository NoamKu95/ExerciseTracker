import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
// Components
import {BoldText} from './Texts';
// UI
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
import {emptyState} from '../../constants/ui/images';

interface EmptyStateProps {
  text: string;
}

const EmptyStateComponent = ({text}: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <BoldText children={text} size={FontSizes.large} />
      <Image source={emptyState} />
    </View>
  );
};

export default EmptyStateComponent;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: spaces._36px,
  },
});
