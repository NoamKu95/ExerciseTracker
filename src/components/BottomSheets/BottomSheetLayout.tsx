import React from 'react';
import {View, Pressable, StyleSheet, KeyboardAvoidingView} from 'react-native';
import Modal from 'react-native-modal';
// Components
import {TextButton} from '../Base/Buttons';
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
import {getFlexDirection} from '../../utils/styleUtil';
import {isIOS} from '../../utils/platformUtil';

interface BottomSheetLayoutProps {
  children: JSX.Element;
  handleSave: () => void;
  isVisible: boolean;
  onCloseSheetPressed: () => void;
  padding?: number;
}

const BottomSheetLayout = ({
  children,
  handleSave,
  isVisible,
  onCloseSheetPressed,
  padding = spaces._24px,
}: BottomSheetLayoutProps) => {
  const renderActionButtons = () => {
    return (
      <View style={styles.actionButtons}>
        <Pressable onPress={onCloseSheetPressed}>
          <CloseIcon />
        </Pressable>
        <TextButton
          text={i18n.t('common.actionButton.save')}
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
      onSwipeComplete={onCloseSheetPressed}
      onBackdropPress={onCloseSheetPressed}>
      <KeyboardAvoidingView behavior={isIOS() ? 'padding' : 'height'}>
        <View style={[styles.modalContent]}>
          {renderActionButtons()}
          <View style={{padding}}>{children}</View>
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
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: radiuses._24px,
    borderTopRightRadius: radiuses._24px,
  },
  actionButtons: {
    padding: spaces._24px,
    paddingBottom: spaces._0px,
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});
