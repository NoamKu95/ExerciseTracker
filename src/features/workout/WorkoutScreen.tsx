import React, {useState} from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import {format} from 'date-fns';
// Components
import {BoldText, RegularText} from '../../components/Base/Texts';
import {PrimaryButton, SecondaryButton} from '../../components/Base/Buttons';
import AppTextInput from '../../components/Base/TextInput';
import OpenableRow from '../../components/OpenableRow';
import TitledCard from '../../components/Cards/TitledCard';
import ExercisesBottomSheet from '../../components/BottomSheets/ExercisesBottomSheet';
import EmptyStateComponent from '../../components/Base/EmptyStateComponent';
import ScreenLayout from '../../components/Base/ScreenLayout';
// Icons
import OutlineHeartIcon from '../../assets/icons/OutlineHeartIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import {defaultBodyArea, defaultExercise} from '../../data/defaultData';
import {renderCategoryTitle} from '../../utils/commonElements';
// Models
import {BodyArea} from '../../models/bodyArea';
import {Exercise, Set} from '../../models/core/exercise';
// Redux
import {useAppSelector} from '../../store/store';
// Utils
import {getFlexDirection, hp} from '../../utils/styleUtil';
import i18n from '../../translations/i18n';
import {validateNumbersOnly} from '../../utils/validators';

const ActiveWorkoutScreen = () => {
  // STATE VARIABLES
  const activeWorkout = useAppSelector(state => state.workout.activeWorkout);

  // LOCAL VARIABLES
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // ** RENDER FUNCTIONS **
  const renderEmptyState = () => {
    return (
      <>
        {renderHeader()}
        <PrimaryButton
          text="הוספת תרגיל לאימון"
          icon={<PlusIcon />}
          onPress={() => setIsSheetOpen(true)}
        />
        <EmptyStateComponent
          text={'הוסיפי אימון בלחיצה על הכפתור והתחילי לתעד'}
        />
      </>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.titleWrapper}>
          <BoldText children="תיעוד אימון חדש" size={FontSizes.large} />
          <OutlineHeartIcon />
        </View>
        <View style={styles.dateWrapper}>
          <BoldText
            children={`${format(new Date(), 'dd.MM.yy')}, `}
            size={FontSizes.regular}
            color={colors.SECONDARY_TEXT}
          />
          <RegularText
            children={'אימון בוקר'}
            size={FontSizes.regular}
            color={colors.SECONDARY_TEXT}
          />
        </View>
      </View>
    );
  };

  const renderExercises = () => {
    return (
      <SectionList
        ListHeaderComponent={
          <View style={{gap: spaces._36px, paddingBottom: spaces._36px}}>
            {renderHeader()}
            <PrimaryButton
              text="הוספת תרגיל לאימון"
              icon={<PlusIcon />}
              onPress={() => setIsSheetOpen(true)}
            />
          </View>
        }
        sections={activeWorkout.exercises}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {categoryName}}) =>
          renderCategoryTitle(categoryName)
        }
        renderItem={renderExercisesCard}
      />
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
                onChangeText={
                  (text: string) => {}
                  // handleRepsUpdate(exerciseID, index, +text)
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
  const handleStartNewWorkout = () => {
    //
  };

  const handleExerciseSelected = (bodyArea: BodyArea, exercise: Exercise) => {
    //
  };

  const handleAddSet = (exerciseID: string) => {
    //
  };

  return (
    <ScreenLayout>
      <>
        {activeWorkout ? renderExercises() : renderEmptyState()}
        <ExercisesBottomSheet
          isVisible={isSheetOpen}
          currentArea={defaultBodyArea}
          currentExercise={defaultExercise}
          onClosePressed={() => setIsSheetOpen(false)}
          onSavePressed={handleExerciseSelected}
        />
      </>
    </ScreenLayout>
  );
};

export default ActiveWorkoutScreen;

const styles = StyleSheet.create({
  headerContainer: {
    gap: spaces._8px,
  },
  titleWrapper: {
    paddingTop: hp(7),
    flexDirection: getFlexDirection(),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateWrapper: {
    flexDirection: getFlexDirection(),
    gap: spaces._4px,
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
