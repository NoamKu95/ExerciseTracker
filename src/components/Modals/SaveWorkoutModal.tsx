import React from 'react';
// Components
import {BoldText, RegularText} from '../Base/Texts';
import {PrimaryButton} from '../Base/Buttons';
import CenterModal from './CenterModal';
// Icons
import FullHeartIcon from '../../assets/icons/FullHeartIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';

interface SaveWorkoutModalProps {
  isVisible: boolean;
  onActionButtonPress: () => void;
  onCloseButtonPress: () => void;
  isSaveTheWorkout: boolean;
}

const SaveWorkoutModal = ({
  isVisible,
  onActionButtonPress,
  onCloseButtonPress,
  isSaveTheWorkout,
}: SaveWorkoutModalProps) => {
  const renderTopTexts = () => {
    return (
      <>
        <BoldText size={FontSizes.large}>
          {isSaveTheWorkout
            ? i18n.t('modals.saveWorkout')
            : i18n.t('modals.removeWorkout')}
        </BoldText>
        <RegularText
          size={FontSizes.regular}
          color={colors.SECONDARY_TEXT}
          textAlign="center">
          {isSaveTheWorkout
            ? i18n.t('modals.saveText1')
            : i18n.t('modals.removeText1')}
        </RegularText>
      </>
    );
  };

  const renderBottomText = () => {
    return (
      <RegularText
        size={FontSizes.regular}
        color={colors.SECONDARY_TEXT}
        textAlign="center">
        {isSaveTheWorkout
          ? i18n.t('modals.saveText2')
          : i18n.t('modals.removeText2')}
      </RegularText>
    );
  };

  return (
    <CenterModal
      isVisible={isVisible}
      icon={<FullHeartIcon />}
      onActionButtonPress={onActionButtonPress}
      onCloseButtonPress={onCloseButtonPress}>
      {renderTopTexts()}
      {/* TODO - isSaveTheWorkout ? TextField : null */}
      {renderBottomText()}
      <PrimaryButton
        text={
          isSaveTheWorkout
            ? i18n.t('modals.saveBtnText')
            : i18n.t('modals.removeBtnText')
        }
        onPress={onActionButtonPress}
      />
    </CenterModal>
  );
};

export default SaveWorkoutModal;
