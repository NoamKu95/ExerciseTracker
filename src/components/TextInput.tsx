import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../constants/ui/colors';
import {FontSizes} from '../constants/ui/fonts';

import EyeIcon from '../assets/icons/EyeIcon';
import {MediumText} from './Texts';
import {getFlexDirection, hp} from '../utils/styleUtil';
import {spaces} from '../constants/ui/spaces';
import {radiuses} from '../constants/ui/radiuses';

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
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = useSharedValue(20);
  const [isTextVisible, setIsTextVisible] = useState(!isCensored);
  const [isErrorShown, setIsErrorShown] = useState(false);

  useEffect(() => {
    labelPosition.value = isFocused || value ? hp(1) : hp(3);
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
        <View style={styles.errorContainer}>
          <MediumText size={FontSizes.small} color={colors.ERROR}>
            {errorText}
          </MediumText>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.mainContainer,
          isErrorShown ? styles.errorBorder : undefined,
        ]}>
        <Reanimated.Text style={[styles.label, animatedStyles]}>
          {label}
        </Reanimated.Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={handleTextChange}
            autoCapitalize="none"
            secureTextEntry={!isTextVisible}
            maxLength={20}
          />
          {isCensored && renderEyeIcon()}
        </View>
      </View>
      {renderError()}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    gap: spaces._4px,
  },
  mainContainer: {
    borderRadius: radiuses._16px,
    backgroundColor: colors.WHITE,
    flexDirection: getFlexDirection(),
    paddingVertical: spaces._10px,
    paddingHorizontal: spaces._10px,
  },
  label: {
    position: 'absolute',
    start: 14,
    color: colors.SECONDARY_TEXT,
  },
  inputContainer: {
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    height: hp(6),
    borderColor: colors.TRANSPARENT,
    fontSize: FontSizes.medium,
    color: colors.MAIN_TEXT,
    width: '90%',
  },
  errorContainer: {
    alignSelf: 'flex-start',
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    gap: spaces._4px,
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: colors.ERROR,
  },
});
