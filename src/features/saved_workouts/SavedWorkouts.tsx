/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, StyleSheet, LogBox, Pressable} from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';
// Components
import {RegularText} from '../../components/Base/Texts';
import TitledCard from '../../components/Cards/TitledCard';
import ScreenLayout from '../../components/Base/ScreenLayout';
import EmptyStateComponent from '../../components/Base/EmptyStateComponent';
// Icons
import EditIcon from '../../assets/icons/EditIcon';
import TrashIcon from '../../assets/icons/TrashIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
// Models
import {Workout} from '../../models/core/workout';
import {Exercise} from '../../models/core/exercise';
// Redux
import {useAppSelector} from '../../store/store';
// Utils
import {getFlexDirection, wp} from '../../utils/styleUtil';
import {formatDateToText} from '../../utils/timeUtil';

const SavedWorkoutsScreen = () => {
  // TODO: Remove when find solution
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  // ** RENDER FUNCTIONS **
  const savedWorkouts = useAppSelector(state => state.workout.savedWorkouts);

  const renderSavedWorkout = ({item}: {item: Workout}) => {
    return (
      <View style={{paddingEnd: 24}}>
        <TitledCard title={item.name} outerStyle={{paddingStart: spaces._24px}}>
          <View style={{gap: 10}}>
            <View style={{flexDirection: getFlexDirection(), gap: spaces._4px}}>
              <RegularText
                children={i18n.t('screens.savedWorkouts.savedAt')}
                size={FontSizes.regular}
                underline
              />
              <RegularText
                children={formatDateToText(item.date)}
                size={FontSizes.regular}
                color={colors.SECONDARY_TEXT}
              />
            </View>
            <RegularText
              children={i18n.t('screens.savedWorkouts.exercises')}
              size={FontSizes.regular}
              underline
            />
          </View>
          {formatExercisesInWorkout(item.exercises)}
        </TitledCard>
      </View>
    );
  };

  const renderHiddenButtons = (item: Workout, index: number) => {
    return (
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={() => handleDeletePressed(item.id)}
          style={styles.btnContainer}>
          <TrashIcon color={colors.DARK_GRAY} />
        </Pressable>
        <Pressable
          onPress={() => handleEditPressed(item.id)}
          style={styles.btnContainer}>
          <EditIcon color={colors.DARK_GRAY} />
        </Pressable>
      </View>
    );
  };

  const formatExercisesInWorkout = (exercises?: Exercise[]) => {
    return (
      exercises?.map((exercise, index) => (
        <View key={`${exercise.id}-${index}`} style={styles.exercisesTexts}>
          <RegularText
            children={`  ⦁ ${exercise.name}`}
            size={FontSizes.regular}
          />
          <RegularText
            children={`(${i18n.t('screens.savedWorkouts.sets')} ${
              exercise.sets?.length ?? 0
            })`}
            size={FontSizes.regular}
            color={colors.SECONDARY_TEXT}
          />
        </View>
      )) ?? null
    );
  };

  const handleDeletePressed = (id: string) => {};
  const handleEditPressed = (id: string) => {};

  return (
    <ScreenLayout
      screenTitle={i18n.t('screens.savedWorkouts.title')}
      isBackButton={true}
      paddingHorizontal={spaces._0px}>
      <SwipeableFlatList
        keyExtractor={(item: Workout) => item.id}
        data={savedWorkouts}
        renderItem={renderSavedWorkout}
        maxSwipeDistance={wp(30)}
        renderQuickActions={renderHiddenButtons}
        contentContainerStyle={styles.contentContainerStyle}
        shouldBounceOnMount={true}
        ListEmptyComponent={
          <EmptyStateComponent
            text={i18n.t('screens.savedWorkouts.emptyState')}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </ScreenLayout>
  );
};

export default SavedWorkoutsScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    gap: spaces._36px,
  },
  exercisesTexts: {
    flexDirection: getFlexDirection(),
    gap: spaces._4px,
    width: '100%',
    alignItems: 'center',
    paddingTop: spaces._4px,
  },
  buttonsContainer: {
    height: '100%',
    flexDirection: getFlexDirection(),
    alignSelf: 'flex-end',
    gap: spaces._16px,
    paddingHorizontal: spaces._24px,
    alignItems: 'center',
  },
  btnContainer: {
    borderWidth: 1,
    borderRadius: radiuses._50px,
    borderColor: colors.DARK_GRAY,
    padding: spaces._8px,
  },
});
