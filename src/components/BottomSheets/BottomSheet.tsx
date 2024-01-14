import React from 'react';
import {View, Pressable, StyleSheet, KeyboardAvoidingView} from 'react-native';
import Modal from 'react-native-modal';
// Components
import {TextButton} from '../Buttons';
// Icons
import CloseIcon from '../../assets/icons/CloseIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
// Utils
import {getFlexDirection, hp} from '../../utils/styleUtil';
import {isIOS} from '../../utils/platformUtil';

interface BottomSheetLayoutProps {
  children: JSX.Element;
  height?: number;
  handleSave: () => void;
  isVisible: boolean;
  toggleBottomSheet: () => void;
}

const BottomSheetLayout = ({
  children,
  height = hp(50),
  handleSave,
  isVisible,
  toggleBottomSheet,
}: BottomSheetLayoutProps) => {
  const renderActionButtons = () => {
    return (
      <View style={styles.actionButtons}>
        <Pressable onPress={toggleBottomSheet}>
          <CloseIcon />
        </Pressable>
        <TextButton
          text={i18n.t('commonlyUsed.actionButton.save')}
          fontSize={FontSizes.small}
          textColor={colors.PRIMARY}
          onPress={handleSave}
        />
      </View>
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.bottomModal}
      swipeDirection={['down']}
      onSwipeComplete={toggleBottomSheet}
      onBackdropPress={toggleBottomSheet}>
      <KeyboardAvoidingView behavior={isIOS() ? 'padding' : 'height'}>
        <View style={[styles.modalContent, {height}]}>
          {renderActionButtons()}
          {children}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default BottomSheetLayout;

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: spaces._0px,
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    padding: spaces._24px,
    borderTopLeftRadius: radiuses._24px,
    borderTopRightRadius: radiuses._24px,
  },
  actionButtons: {
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});
