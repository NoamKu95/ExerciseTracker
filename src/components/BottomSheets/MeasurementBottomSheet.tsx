import React, {useState} from 'react';
// Components
import BottomSheetLayout from './BottomSheetLayout';
import AppScrollPicker from '../Base/AppScrollPicker';
// Constants
import {MeasureUnit} from '../../constants/enums';
// Utils
import {hp} from '../../utils/styleUtil';

interface GenderBottomSheetProps {
  isVisible: boolean;
  currentUnit: MeasureUnit;
  onClosePressed: () => void;
  onSavePressed: (unit: MeasureUnit) => void;
}

const MeasurementBottomSheet = ({
  isVisible,
  currentUnit,
  onClosePressed,
  onSavePressed,
}: GenderBottomSheetProps) => {
  const [selectedUnit, setSelectedUnit] = useState<MeasureUnit>(currentUnit);
  return (
    <BottomSheetLayout
      handleSave={() => onSavePressed(selectedUnit)}
      isVisible={isVisible}
      onCloseSheetPressed={onClosePressed}
      height={hp(30)}>
      <>
        <AppScrollPicker
          data={[MeasureUnit.KG, MeasureUnit.LB]}
          value={currentUnit}
          setValue={setSelectedUnit}
        />
      </>
    </BottomSheetLayout>
  );
};

export default MeasurementBottomSheet;