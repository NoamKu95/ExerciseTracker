import React from 'react';
// Components
import {BoldText, RegularText} from '../Texts';
import {PrimaryButton} from '../Buttons';
import CenterModal from './CenterModal';
// UI
import {colors} from '../../constants/ui/colors';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
// Icons
import FullHeartIcon from '../../assets/icons/FullHeartIcon';

interface SaveTrainingModalProps {
  isVisible: boolean;
  onActionButtonPress: () => void;
  onCloseButtonPress?: () => void;
}

const SaveWorkoutModal = ({
  isVisible,
  onActionButtonPress,
  onCloseButtonPress,
}: SaveTrainingModalProps) => {
  return (
    <CenterModal
      isVisible={isVisible}
      icon={<FullHeartIcon />}
      onActionButtonPress={() => {}}
      onCloseButtonPress={onCloseButtonPress}>
      <BoldText size={FontSizes.large}>{i18n.t('modals.saveWorkout')}</BoldText>
      <RegularText
        size={FontSizes.regular}
        color={colors.SECONDARY_TEXT}
        textAlign="center">
        {i18n.t('modals.letsSaveWorkout')}
      </RegularText>
      {/* TODO - add TextField */}
      <RegularText
        size={FontSizes.regular}
        color={colors.SECONDARY_TEXT}
        textAlign="center">
        {i18n.t('modals.findWorkoutAt')}
      </RegularText>
      <PrimaryButton text="שמירה" onPress={onActionButtonPress} />
    </CenterModal>
  );
};

export default SaveWorkoutModal;
