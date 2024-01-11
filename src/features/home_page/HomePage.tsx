import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {spaces} from '../../constants/ui/spaces';
import {statusBarHeight} from '../../utils/platformUtil';
import {hp} from '../../utils/styleUtil';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <Text>Hello World</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    gap: spaces._16px,
  },
  container: {
    paddingTop: statusBarHeight,
    paddingHorizontal: spaces._10px,
    flex: 1,
    height: hp(100),
  },
});

export default HomeScreen;
