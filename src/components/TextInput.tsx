import React, {useEffect, useState} from 'react';
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
  secureTextEntry?: boolean;
  error?: string;
}

const AppTextInput = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
}: AppTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = useSharedValue(20);
  const [isTextVisible, setIsTextVisible] = useState(!secureTextEntry);

  useEffect(() => {
    labelPosition.value = isFocused || value ? hp(0.5) : hp(2.5);
  }, [isFocused, value]);

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

  return (
    <View style={styles.container}>
      <View
        style={[styles.inputContainer, error ? styles.errorBorder : undefined]}>
        <Reanimated.Text style={[styles.label, animatedStyles]}>
          {label}
        </Reanimated.Text>
        <TextInput
          style={styles.input}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          autoCapitalize="none"
          secureTextEntry={!isTextVisible}
          maxLength={30}
        />
        {secureTextEntry && (
          <Pressable
            style={styles.hidePasswordButton}
            onPress={() => setIsTextVisible(!isTextVisible)}>
            <EyeIcon isTextVisible={isTextVisible} />
          </Pressable>
        )}
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <MediumText size={FontSizes.small} color={colors.ERROR}>
            {error}
          </MediumText>
        </View>
      )}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    gap: spaces._4px,
  },
  inputContainer: {
    borderRadius: radiuses._16px,
    backgroundColor: colors.WHITE,
    flexDirection: getFlexDirection(),
    paddingTop: spaces._16px,
    paddingHorizontal: spaces._10px,
  },
  label: {
    position: 'absolute',
    start: 14,
    color: colors.SECONDARY_TEXT,
  },
  input: {
    height: hp(5.5),
    borderColor: colors.TRANSPARENT,
    fontSize: FontSizes.medium,
    color: colors.MAIN_TEXT,
    flex: 1,
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
  hidePasswordButton: {
    marginTop: spaces._4px,
  },
});
