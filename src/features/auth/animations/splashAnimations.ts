import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useAnimationStyles = () => {
  const logoOpacity = useSharedValue(0);
  const logoTranslateY = useSharedValue(70);
  const imageOpacity = useSharedValue(0);
  const imageTranslateY = useSharedValue(70);
  const buttonsOpacity = useSharedValue(0);
  const animationDuration = 500;

  const animatedLogoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{translateY: logoTranslateY.value}],
  }));

  const animatedImageStyle = useAnimatedStyle(() => ({
    opacity: imageOpacity.value,
    transform: [{translateY: imageTranslateY.value}],
  }));

  const animatedButtonsStyle = useAnimatedStyle(() => ({
    opacity: buttonsOpacity.value,
  }));

  const initAnimation = () => {
    setTimeout(() => {
      logoOpacity.value = withTiming(1, {duration: animationDuration});
      logoTranslateY.value = withTiming(0, {duration: animationDuration});
    }, 500);

    setTimeout(() => {
      imageOpacity.value = withTiming(1, {duration: animationDuration});
      imageTranslateY.value = withTiming(0, {duration: animationDuration});
    }, 1500);

    setTimeout(() => {
      buttonsOpacity.value = withTiming(1, {duration: animationDuration});
    }, 2000);
  };

  return {
    animatedLogoStyle,
    animatedImageStyle,
    animatedButtonsStyle,
    initAnimation,
  };
};
