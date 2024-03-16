import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
// Components
import {BoldText} from '../Base/Texts';
import Chip from '../Base/Chip';
import BottomSheetLayout from './BottomSheetLayout';
import AppScrollPicker from '../Base/AppScrollPicker';
// UI
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
import {bodyAreas} from '../../data/bodyAreas';
import {exercises} from '../../data/exercises';
// Models
import {BodyArea} from '../../models/bodyArea';
import {Exercise} from '../../models/core/exercise';
// Utils
import {findExerciseByName} from '../../utils/findItem';
import {getFlexDirection} from '../../utils/styleUtil';

interface ExercisesBottomSheetProps {
  isVisible: boolean;
  currentArea: BodyArea;
  currentExercise: Exercise;
  onClosePressed: () => void;
  onSavePressed: (bodyArea: BodyArea, exercise: Exercise) => void;
}

const ExercisesBottomSheet = ({
  isVisible,
  currentArea,
  currentExercise,
  onClosePressed,
  onSavePressed,
}: ExercisesBottomSheetProps) => {
  // GLOBAL VARIABLES
  //LOCAL VARIABLES
  const [selectedArea, setSelectedArea] = useState<BodyArea>(currentArea);
  const [selectedExercise, setSelectedExercise] =
    useState<Exercise>(currentExercise);

  useEffect(() => {
    setSelectedExercise(currentExercise);
    setSelectedArea(currentArea);
  }, [currentExercise, currentArea]);

  // ** RENDER FUNCTIONS **
  const renderBodyAreasChips = () => {
    return (
      <View style={styles.bodyAreasContainer}>
        {bodyAreas.map(area => (
          <Chip
            key={area.id}
            text={area.name}
            isSelected={area.id === selectedArea?.id}
            onPress={() => handleBodyAreaPress(area)}
          />
        ))}
      </View>
    );
  };

  // ** HANDLE FUNCTIONS **
  const handleBodyAreaPress = (selection: BodyArea) => {
    setSelectedArea(selection);
  };

  const handleExerciseSelection = (name: string) => {
    let exercise = findExerciseByName(name);
    if (exercise) {
      setSelectedExercise(exercise);
    }
  };

  return (
    <BottomSheetLayout
      handleSave={() => onSavePressed(selectedArea, selectedExercise)}
      isVisible={isVisible}
      onCloseSheetPressed={onClosePressed}>
      <>
        <BoldText
          children={i18n.t('bottomSheets.exercises.chooseBodyArea')}
          size={FontSizes.regular}
        />
        {renderBodyAreasChips()}
        <BoldText
          children={i18n.t('bottomSheets.exercises.chooseExercise')}
          size={FontSizes.regular}
        />
        <AppScrollPicker
          data={exercises.map(exc => exc.name)}
          value={selectedExercise.name}
          setValue={() => handleExerciseSelection}
        />
      </>
    </BottomSheetLayout>
  );
};

export default ExercisesBottomSheet;

const styles = StyleSheet.create({
  bodyAreasContainer: {
    flexDirection: getFlexDirection(),
    gap: spaces._12px,
    paddingVertical: spaces._20px,
  },
});
