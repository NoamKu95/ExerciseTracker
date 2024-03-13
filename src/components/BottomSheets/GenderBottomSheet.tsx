import React, {useState} from 'react';
// Components
import BottomSheetLayout from './BottomSheetLayout';
import AppScrollPicker from '../Base/AppScrollPicker';
// Constants
import {genders} from '../../data/genders';
import i18n from '../../translations/i18n';
// Models
import {Gender} from '../../constants/enums';
// Utils
import {hp} from '../../utils/styleUtil';

interface GenderBottomSheetProps {
  isVisible: boolean;
  currentGender: Gender;
  onClosePressed: () => void;
  onSavePressed: (gender: Gender) => void;
}

const GenderBottomSheet = ({
  isVisible,
  currentGender,
  onClosePressed,
  onSavePressed,
}: GenderBottomSheetProps) => {
  const [selectedGender, setSelectedGender] = useState<Gender>(currentGender);
  return (
    <BottomSheetLayout
      handleSave={() => onSavePressed(selectedGender)}
      isVisible={isVisible}
      onCloseSheetPressed={onClosePressed}
      height={hp(30)}>
      <>
        <AppScrollPicker
          data={genders.map(g => i18n.t(`screens.profile.${g}`))}
          value={i18n.t(`screens.profile.${currentGender}`)}
          setValue={setSelectedGender}
        />
      </>
    </BottomSheetLayout>
  );
};

export default GenderBottomSheet;
