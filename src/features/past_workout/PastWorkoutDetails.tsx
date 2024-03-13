import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  LogBox,
  SectionListRenderItem,
} from 'react-native';
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
import {historyWorkout} from '../../mockData/historyWorkoutDetailsMock';
// Models
import {Set, WorkoutSection} from '../../models/core/exercise';
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

  // STATE VARIABLES

  // LOCAL VARIABLES

  useEffect(() => {
    // fetch data by workoutID
    console.log(workoutID);
  }, [workoutID]);

  // ** RENDER FUNCTIONS **
  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <BoldText children={historyWorkout.name} size={FontSizes.large} />
        <RegularText
          children={`, ${formatDateToText(historyWorkout.date)}, ${i18n.t(
            'screens.pastWorkoutDetails.exercise',
          )} ${i18n.t(`common.dayTimes.${historyWorkout.time}`)}`}
          size={FontSizes.regular}
          color={colors.SECONDARY_TEXT}
        />
      </View>
    );
  };

  const renderExercises: SectionListRenderItem<
    WorkoutSection,
    {section: WorkoutSection}
  > = ({item}) => {
    return (
      <View style={styles.cardWrapper}>
        {item.sectionExercises.map((exercise, index) => (
          <TitledCard title={exercise.name}>
            <View key={index}>
              {exercise.sets.map((set, indexx) =>
                renderSetsRepsContent(set, indexx, exercise.sets.length - 1),
              )}
            </View>
          </TitledCard>
        ))}
      </View>
    );
  };

  const renderSetsRepsContent = (
    set: Set,
    index: number,
    lastIndex: number,
  ) => {
    return (
      <View style={styles.setContainer}>
        <OpenableRow
          text={`${i18n.t('screens.pastWorkoutDetails.set')} #${index + 1}`}
          key={index}
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
      </View>
    );
  };

  return (
    <ScreenLayout
      screenTitle={i18n.t('screens.pastWorkoutDetails.title')}
      isBackButton={true}>
      <SectionList
        ListHeaderComponent={renderTitle()}
        sections={historyWorkout.exercises}
        keyExtractor={(item, index) => item.title + index.toString()}
        renderItem={renderExercises}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.sectionHeader}>
            <BoldText children={title} size={FontSizes.large} />
          </View>
        )}
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
