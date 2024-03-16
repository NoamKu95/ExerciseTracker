import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
// Components
import ScrollScreenLayout from '../../components/Base/ScrollScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
// UI
import {spaces} from '../../constants/ui/spaces';
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
import {Screens} from '../../constants/screens';
import {onboardingImages} from '../../constants/ui/images';
import {resetTo} from '../../navigation/RootNavigation';
// Redux
import {useAppSelector} from '../../store/store';
// Utils
import {
  getFlexDirection,
  getOppositeFlexDirection,
  hp,
  wp,
} from '../../utils/styleUtil';

const OnboardingScreen = () => {
  const isRTL = useAppSelector(state => state.auth.isRTL);
  const userName = useAppSelector(state => state.auth.user?.fullName) ?? '';

  const renderTexts = () => {
    return (
      <View style={styles().textsContainer}>
        <BoldText
          children={i18n.t('screens.onboarding.title', {userName})}
          size={FontSizes.large}
        />
        <RegularText
          children={i18n.t('screens.onboarding.subtitle')}
          size={FontSizes.regular}
          color={colors.SECONDARY_TEXT}
        />
      </View>
    );
  };

  const renderCarousel = () => {
    return (
      <Carousel
        data={isRTL ? onboardingImages.reverse() : onboardingImages}
        withAnimation={{
          type: 'spring',
          config: {
            damping: 13,
          },
        }}
        defaultIndex={isRTL ? onboardingImages.length - 1 : 0}
        overscrollEnabled={false}
        width={wp(90)}
        height={hp(50)}
        renderItem={({index}) => (
          <Image
            source={onboardingImages[index]}
            style={styles().image}
            key={`${onboardingImages[index].toString()}`}
          />
        )}
      />
    );
  };

  // TODO: - finish when lottie lib bug solved
  // const renderAnimations = () => {
  //   return (
  //     <View style={styles.animationsContainer}>
  //       <LottieView source={swipeLeft} autoPlay loop={false} />
  //       <LottieView source={swipeRight} autoPlay loop={false} />
  //     </View>
  //   );
  // };

  return (
    <>
      <ScrollScreenLayout
        onPress={() => {
          resetTo(Screens.TABS);
        }}
        isButtonDisabled={false}
        buttonText={i18n.t('screens.onboarding.actionBtn')}>
        <>
          {renderTexts()}
          {renderCarousel()}
          {/* {renderAnimations()} */}
        </>
      </ScrollScreenLayout>
    </>
  );
};

export default OnboardingScreen;

const styles = () =>
  StyleSheet.create({
    bottomAreaView: {
      flex: 1,
      backgroundColor: colors.BLACK,
    },
    textsContainer: {
      gap: spaces._12px,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    dotsContainer: {
      flexDirection: getOppositeFlexDirection(),
      alignSelf: 'center',
    },
    animationsContainer: {
      flexDirection: getFlexDirection(),
    },
  });
