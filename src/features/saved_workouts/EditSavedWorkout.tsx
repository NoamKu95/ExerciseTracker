import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SectionList, LogBox} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
// Components
import {BoldText} from '../../components/Base/Texts';
import {
  PrimaryButton,
  SecondaryButton,
  TextButton,
} from '../../components/Base/Buttons';
import AppTextInput from '../../components/Base/TextInput';
import TitledCard from '../../components/Cards/TitledCard';
import OpenableRow from '../../components/OpenableRow';
import ScreenLayout from '../../components/Base/ScreenLayout';
// Icons
import PlusIcon from '../../assets/icons/PlusIcon';
// UI
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
import {ProfileStackParamList} from '../../constants/screens';
import {savedWorkoutDetailsMock} from '../../mockData/savedWorkoutDetailsMock';
// Models
import {SavedWorkout} from '../../models/core/workout';
import {Exercise, Set} from '../../models/core/exercise';
// Redux
// Utils
import {getFlexDirection} from '../../utils/styleUtil';
import {validateNumbersOnly} from '../../utils/validators';

const EditSavedWorkoutScreen = () => {
  // TODO: Remove when find solution
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const route =
    useRoute<RouteProp<ProfileStackParamList, 'Edit_Saved_Workout'>>();
  const {workoutID} = route.params ?? {
    workoutID: '',
  };

  const [savedWorkout, setSavedWorkout] = useState<SavedWorkout>(
    savedWorkoutDetailsMock,
  );

  useEffect(() => {
    // fetch data by workoutID and setSavedWorkout accordingly
    // console.log(workoutID);
  }, [workoutID]);

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.topTextsContainer}>
          <BoldText children={savedWorkout.name} size={FontSizes.large} />
          <TextButton
            text={i18n.t('common.actionButton.save')}
            onPress={handleSavePressed}
          />
        </View>
        <View style={styles.actionBtn}>
          <PrimaryButton
            text={i18n.t('screens.editSavedWorkout.addExercise')}
            onPress={() => {}}
            icon={<PlusIcon />}
          />
        </View>
      </View>
    );
  };

  const renderCategoryTitle = (categoryName: string) => {
    return (
      <View style={styles.sectionHeader}>
        <BoldText children={categoryName} size={FontSizes.large} />
      </View>
    );
  };

  const renderExercisesCard = ({item}) => {
    let exercise: Exercise = item;
    return (
      <View style={styles.cardWrapper} key={exercise.id}>
        <TitledCard title={exercise.name}>
          <>
            {exercise.sets &&
              exercise.sets.map((set, index) =>
                renderSetsRepsContent(exercise.id, set, index),
              )}
            <View style={styles.secondaryBtn}>
              <SecondaryButton
                text={i18n.t('screens.editSavedWorkout.addSet')}
                onPress={() => {}}
              />
            </View>
          </>
        </TitledCard>
      </View>
    );
  };

  const renderSetsRepsContent = (
    exerciseID: string,
    set: Set,
    index: number,
  ) => {
    return (
      <View>
        <OpenableRow
          text={`${i18n.t('screens.pastWorkoutDetails.set')} #${index + 1}`}
          key={`${exerciseID}-${index}`}>
          <View style={styles.rowInnerContentContainer}>
            <View style={styles.innerRow}>
              <BoldText
                children={i18n.t('screens.pastWorkoutDetails.reps')}
                size={FontSizes.regular}
              />
              <AppTextInput
                label={''}
                value={`${set.reps}`}
                onChangeText={(text: string) =>
                  handleRepsUpdate(exerciseID, index, +text)
                }
                validateInput={validateNumbersOnly}
                errorText={i18n.t('errors.validation.mustNumbersOnly')}
                keyboardType={'decimal-pad'}
                isShadow={true}
              />
            </View>
          </View>
        </OpenableRow>
      </View>
    );
  };

  // ** HANDLE FUNCTIONS **
  const handleRepsUpdate = (
    exerciseId: string,
    setIndex: number,
    newReps: number,
  ) => {
    const updatedWorkout: SavedWorkout = JSON.parse(
      JSON.stringify(savedWorkout),
    );

    const exerciseToUpdate = updatedWorkout.exercises?.find(exercise =>
      exercise.data.some(e => e.id === exerciseId),
    );

    if (exerciseToUpdate) {
      exerciseToUpdate.data = exerciseToUpdate.data.map(exercise => {
        if (exercise.id === exerciseId) {
          const updatedSets = exercise.sets?.map((set, index) => {
            if (index === setIndex) {
              return {...set, reps: newReps};
            }
            return set;
          });

          return {
            ...exercise,
            sets: updatedSets,
          };
        }
        return exercise;
      });

      // Update state with the modified workout
      setSavedWorkout(updatedWorkout);
    }
  };

  const handleSavePressed = () => {
    // dispatch to update saved workout
  };

  return (
    <ScreenLayout
      screenTitle={i18n.t('screens.editSavedWorkout.title')}
      isBackButton={true}>
      <SectionList
        ListHeaderComponent={renderHeader()}
        sections={savedWorkout.exercises}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {categoryName}}) =>
          renderCategoryTitle(categoryName)
        }
        renderItem={renderExercisesCard}
      />
    </ScreenLayout>
  );
};

export default EditSavedWorkoutScreen;

const styles = StyleSheet.create({
  headerContainer: {
    gap: spaces._36px,
    paddingBottom: spaces._36px,
  },
  topTextsContainer: {
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  actionBtn: {
    alignSelf: 'center',
  },
  sectionHeader: {
    paddingBottom: spaces._16px,
  },
  cardWrapper: {
    paddingBottom: spaces._36px,
  },
  rowInnerContentContainer: {
    gap: spaces._16px,
    paddingTop: spaces._16px,
  },
  innerRow: {
    flexDirection: getFlexDirection(),
    gap: spaces._10px,
    alignItems: 'center',
  },
  secondaryBtn: {
    alignSelf: 'flex-end',
  },
});
