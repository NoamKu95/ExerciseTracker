import React, {useState} from 'react';
// Components
import BottomSheetLayout from './BottomSheetLayout';
import AppScrollPicker from '../Base/AppScrollPicker';
// Constants
import {Language, appLanguages} from '../../translations/i18n';
// Utils

interface GenderBottomSheetProps {
  isVisible: boolean;
  currentLang: Language;
  onClosePressed: () => void;
  onSavePressed: (language: Language) => void;
}

const LanguageBottomSheet = ({
  isVisible,
  currentLang,
  onClosePressed,
  onSavePressed,
}: GenderBottomSheetProps) => {
  const [selectedLang, setSelectedLang] = useState<Language>(currentLang);
  return (
    <BottomSheetLayout
      handleSave={() => onSavePressed(selectedLang)}
      isVisible={isVisible}
      onCloseSheetPressed={onClosePressed}>
      <>
        <AppScrollPicker
          data={appLanguages.map(lng => lng.name)}
          value={currentLang.name}
          setValue={setSelectedLang}
        />
      </>
    </BottomSheetLayout>
  );
};

export default LanguageBottomSheet;
