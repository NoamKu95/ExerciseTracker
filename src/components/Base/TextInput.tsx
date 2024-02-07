import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
// Components
import {MediumText} from './Texts';
// Icons
import EyeIcon from '../../assets/icons/EyeIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {FontSizes} from '../../constants/ui/fonts';
// Redux
import {useAppSelector} from '../../store/store';
// Utils
import {getFontFamily} from '../../utils/fontFamily';
import {
  getFlexDirection,
  getOpposingFlexDirection,
  getSelfAlign,
  getTextAlign,
} from '../../utils/styleUtil';

interface AppTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  validateInput: (text: string) => boolean;
  errorText: string;
  isCensored?: boolean;
}

const AppTextInput = ({
  label,
  value,
  onChangeText,
  validateInput,
  isCensored = false,
  errorText,
}: AppTextInputProps) => {
  const isRTL = useAppSelector(state => state.auth.isRTL);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = useSharedValue(20);
  const [isTextVisible, setIsTextVisible] = useState(!isCensored);
  const [isErrorShown, setIsErrorShown] = useState(false);

  useEffect(() => {
    labelPosition.value = isFocused || value ? 4 : 20;
  }, [isFocused, labelPosition, value]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      top: withTiming(labelPosition.value),
      fontSize: withTiming(
        isFocused || value ? FontSizes.small : FontSizes.medium,
      ),
      color: withTiming(
        isFocused || value ? colors.GRAY : colors.SECONDARY_TEXT,
      ),
    };
  });

  const handleTextChange = useCallback(
    (text: string) => {
      onChangeText(text);

      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = setTimeout(() => {
        setIsErrorShown(text !== '' && !validateInput(text));
      }, 500);
    },
    [onChangeText, validateInput],
  );

  const renderEyeIcon = () => {
    return (
      <Pressable onPress={() => setIsTextVisible(!isTextVisible)}>
        <EyeIcon isTextVisible={isTextVisible} />
      </Pressable>
    );
  };

  const renderError = () => {
    if (isErrorShown) {
      return (
        <View style={styles().errorContainer}>
          <MediumText size={FontSizes.small} color={colors.ERROR}>
            {errorText}
          </MediumText>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles().container}>
      <View
        style={[
          styles().mainContainer,
          isErrorShown ? styles().errorBorder : undefined,
        ]}>
        <Reanimated.Text style={[styles(isRTL).label, animatedStyles]}>
          {label}
        </Reanimated.Text>
        <View style={styles().inputContainer}>
          <TextInput
            style={styles().input}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={handleTextChange}
            autoCapitalize="none"
            maxLength={20}
            textAlign={getTextAlign()}
            secureTextEntry={!isTextVisible}
          />
          {isCensored && renderEyeIcon()}
        </View>
      </View>
      {renderError()}
    </View>
  );
};

export default AppTextInput;

const styles = (isRTL?: boolean) =>
  StyleSheet.create({
    container: {
      marginVertical: spaces._10px,
    },
    mainContainer: {
      borderRadius: radiuses._16px,
      backgroundColor: colors.WHITE,
      paddingVertical: spaces._10px,
      paddingHorizontal: spaces._10px,
      height: 56,
    },
    label: {
      position: 'absolute',
      fontFamily: getFontFamily(isRTL ?? true, 'normal'),
      color: colors.SECONDARY_TEXT,
      alignSelf: getSelfAlign(),
      paddingHorizontal: spaces._12px,
    },
    inputContainer: {
      flexDirection: getFlexDirection(),
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    },
    input: {
      borderColor: colors.TRANSPARENT,
      fontSize: FontSizes.medium,
      color: colors.MAIN_TEXT,
      alignSelf: getSelfAlign(),
      width: '90%',
      height: 25,
    },
    errorContainer: {
      flexDirection: getOpposingFlexDirection(),
      alignItems: 'center',
      marginTop: spaces._4px,
    },
    errorBorder: {
      borderWidth: 1,
      borderColor: colors.ERROR,
    },
  });
