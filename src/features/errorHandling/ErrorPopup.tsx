import React from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
// Components
import {BoldText, MediumText} from '../../components/Base/Texts';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
import {clearError} from './state/errorHandlingSlice';

const ErrorPopUp = () => {
  const dispatch = useAppDispatch();
  const errorState = useAppSelector(state => state.errorHandling);

  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <ReactNativeModal
      isVisible={errorState.isError}
      onBackdropPress={handleClose}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <BoldText
            size={FontSizes.large}
            color={colors.ERROR}
            textAlign="center">
            {i18n.t('errors.anErrorOccurred')}
          </BoldText>
          <MediumText
            size={FontSizes.medium}
            color={colors.ERROR}
            textAlign="center">
            {errorState.errorMessage}
          </MediumText>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default ErrorPopUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: spaces._20px,
    gap: spaces._20px,
    justifyContent: 'center',
    alignContent: 'center',
  },
  modal: {
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radiuses._16px,
  },
});
