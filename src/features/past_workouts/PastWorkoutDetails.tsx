import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SectionList, LogBox} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
// Components
import {BoldText, RegularText} from '../../components/Base/Texts';
import TitledCard from '../../components/Cards/TitledCard';
import OpenableRow from '../../components/OpenableRow';
import ScreenLayout from '../../components/Base/ScreenLayout';
// Icons
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
import {ProfileStackParamList} from '../../constants/screens';
import {specificHistoryWorkout} from '../../mockData/historyWorkoutDetailsMock';
// Models
import {HistoryWorkout} from '../../models/core/workout';
import {Exercise, Set} from '../../models/core/exercise';
// Redux
// Utils
import {getFlexDirection} from '../../utils/styleUtil';
import {formatDateToText} from '../../utils/timeUtil';

const PastWorkoutDetailsScreen = () => {
  // TODO: Remove when find solution
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const route =
    useRoute<RouteProp<ProfileStackParamList, 'Past_Workout_Details'>>();
  const {workoutID} = route.params ?? {
    workoutID: '',
  };

  const [pastWorkout, setPastWorkout] = useState<HistoryWorkout>(
    specificHistoryWorkout,
  );

  // STATE VARIABLES

  // LOCAL VARIABLES

  useEffect(() => {
    // fetch data by workoutID and setPastWorkout accordingly
    // console.log(workoutID);
  }, [workoutID]);

  // ** RENDER FUNCTIONS **
  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <BoldText children={pastWorkout.name} size={FontSizes.large} />
        <RegularText
          children={`, ${formatDateToText(pastWorkout.date)}, ${i18n.t(
            'screens.pastWorkoutDetails.exercise',
          )} ${i18n.t(`common.dayTimes.${pastWorkout.time}`)}`}
          size={FontSizes.regular}
          color={colors.SECONDARY_TEXT}
        />
      </View>
    );
  };

  const renderCategoryTitle = (categoryName: string) => {
    return (
      <View style={styles.sectionHeader} key={categoryName}>
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
                renderSetsRepsContent(
                  exercise.id,
                  set,
                  index,
                  exercise.sets!.length - 1,
                ),
              )}
          </>
        </TitledCard>
      </View>
    );
  };

  const renderSetsRepsContent = (
    exerciseID: string,
    set: Set,
    index: number,
    lastIndex: number,
  ) => {
    return (
      <OpenableRow
        text={`${i18n.t('screens.pastWorkoutDetails.set')} #${index + 1}`}
        key={`${exerciseID}-${index}`}
        isLast={index === lastIndex}>
        <View style={styles.rowInnerContentContainer}>
          <View style={styles.innerRow}>
            <BoldText
              children={i18n.t('screens.pastWorkoutDetails.weight')}
              size={FontSizes.regular}
            />
            <RegularText
              children={`${set.weight} ${i18n.t('common.kg')}`}
              size={FontSizes.regular}
            />
          </View>
          <View style={styles.innerRow}>
            <BoldText
              children={i18n.t('screens.pastWorkoutDetails.reps')}
              size={FontSizes.regular}
            />
            <RegularText children={`${set.reps}`} size={FontSizes.regular} />
          </View>
        </View>
      </OpenableRow>
    );
  };

  return (
    <ScreenLayout
      screenTitle={i18n.t('screens.pastWorkoutDetails.title')}
      isBackButton={true}>
      <SectionList
        ListHeaderComponent={renderTitle()}
        sections={pastWorkout.exercises}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {categoryName}}) =>
          renderCategoryTitle(categoryName)
        }
        renderItem={renderExercisesCard}
      />
    </ScreenLayout>
  );
};

export default PastWorkoutDetailsScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: getFlexDirection(),
    alignItems: 'baseline',
    paddingBottom: spaces._36px,
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
  },
});
