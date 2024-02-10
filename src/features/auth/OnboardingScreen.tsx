import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
// Components
import ScreenLayout from '../../components/Base/ScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import CarouselDot from '../../components/CarouselDot';
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
import {getFlexDirection, hp, wp} from '../../utils/styleUtil';

const OnboardingScreen = () => {
  const userName = useAppSelector(state => state.auth.user?.fullName);
  const [imgIndex, setImgIndex] = useState(0);

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
        loop={false}
        overscrollEnabled={false}
        defaultIndex={0}
        width={wp(90)}
        height={hp(50)}
        data={onboardingImages}
        onSnapToItem={index => setImgIndex(index)}
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

  const renderCarouselDots = () => {
    return (
      <View style={styles().dotsContainer}>
        {onboardingImages.map((_, index) => {
          return <CarouselDot isSelected={index === imgIndex} />;
        })}
      </View>
    );
  };

  return (
    <>
      <ScreenLayout
        onPress={() => {
          resetTo(Screens.TABS);
        }}
        isButtonDisabled={false}
        buttonText={i18n.t('screens.onboarding.actionBtn')}>
        <>
          {renderTexts()}
          {renderCarousel()}
          {renderCarouselDots()}
        </>
      </ScreenLayout>
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
      flexDirection: getFlexDirection(),
      alignSelf: 'center',
    },
  });
