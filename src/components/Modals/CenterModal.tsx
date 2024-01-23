import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Modal from 'react-native-modal';
// Components
import {PrimaryButton, TextButton} from '../Buttons';
// Icons
import CloseIcon from '../../assets/icons/CloseIcon';
// UI
import {spaces} from '../../constants/ui/spaces';
import {colors} from '../../constants/ui/colors';
import {radiuses} from '../../constants/ui/radiuses';
// Utils
import {getSelfAlign} from '../../utils/styleUtil';

interface CenterModalProps {
  isVisible: boolean;
  icon: JSX.Element;

  actionButtonText?: string;
  onActionButtonPress?: () => void;
  isActionButtonDisabled?: boolean;

  textButtonText?: string;
  onTextButtonPress?: () => void;

  isCloseButton?: boolean;
  onCloseButtonPress?: () => void;

  children?: JSX.Element[];
}

const CenterModal = ({
  isVisible,
  icon,
  actionButtonText,
  onActionButtonPress,
  isActionButtonDisabled = false,
  textButtonText,
  onTextButtonPress,
  isCloseButton = true,
  onCloseButtonPress,
  children,
}: CenterModalProps) => {
  const renderButtonsView = () => {
    if (actionButtonText || textButtonText) {
      return (
        <View style={styles.buttonsContainer}>
          {actionButtonText && (
            <PrimaryButton
              text={actionButtonText}
              onPress={onActionButtonPress}
              isDisabled={isActionButtonDisabled}
            />
          )}
          {textButtonText && (
            <TextButton
              text={textButtonText}
              textColor={colors.PRIMARY}
              onPress={onTextButtonPress}
            />
          )}
        </View>
      );
    }
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        {isCloseButton && (
          <Pressable style={styles.closeButton} onPress={onCloseButtonPress}>
            <CloseIcon />
          </Pressable>
        )}
        {icon}
        {children}
        {renderButtonsView()}
      </View>
    </Modal>
  );
};

export default CenterModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: radiuses._24px,
    padding: spaces._24px,
    gap: spaces._24px,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: getSelfAlign(),
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces._8px,
  },
});
