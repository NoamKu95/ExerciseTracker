import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
// Components
import {BoldText} from './Texts';
import {BackwardsButton} from './Buttons';
// UI
import {spaces} from '../constants/ui/spaces';
import {colors} from '../constants/ui/colors';
// Utils
import {FontSizes} from '../constants/ui/fonts';
import {getFlexDirection, hp} from '../utils/styleUtil';
import {statusBarHeight} from '../utils/platformUtil';

interface ScreenLayoutProps {
  title?: string;
  isBackButton?: boolean;
  children: JSX.Element | JSX.Element[];
}
const ScreenLayout = ({
  title,
  isBackButton = false,
  children,
}: ScreenLayoutProps) => {
  const renderScreenHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.titleTextContainer}>
          <BoldText children={title} size={FontSizes.large} />
        </View>
      </View>
    );
  };

  const renderHeaderWithBack = () => {
    return (
      <View style={styles.headerContainer}>
        <BackwardsButton />
        <View style={styles.titleTextContainer}>
          <BoldText children={title} size={FontSizes.medium} />
        </View>
      </View>
    );
  };

  const renderHeader = isBackButton ? renderHeaderWithBack : renderScreenHeader;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {title && renderHeader()}
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    height: hp(100),
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingTop: statusBarHeight,
    paddingHorizontal: spaces._24px,
  },
  headerContainer: {
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spaces._24px,
  },
  titleTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
