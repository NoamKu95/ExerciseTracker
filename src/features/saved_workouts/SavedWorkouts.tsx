/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, LogBox, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SwipeableFlatList from 'react-native-swipeable-list';
// Components
import {RegularText} from '../../components/Base/Texts';
import TitledCard from '../../components/Cards/TitledCard';
import ScreenLayout from '../../components/Base/ScreenLayout';
import Loader from '../../components/Base/Loader';
import EmptyStateComponent from '../../components/Base/EmptyStateComponent';
// Icons
import EditIcon from '../../assets/icons/EditIcon';
import OutlineHeartIcon from '../../assets/icons/OutlineHeartIcon';
import TrashIcon from '../../assets/icons/TrashIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {radiuses} from '../../constants/ui/radiuses';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import {ProfileStackParamList} from '../../constants/screens';
import i18n from '../../translations/i18n';
// Models
import {Workout} from '../../models/core/workout';
import {Exercise} from '../../models/core/exercise';
import SaveWorkoutModal from '../../components/Modals/SaveWorkoutModal';
import {AppErrorTypes} from '../../models/error';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchSavedWorkouts} from '../home_page/state/workoutActions';
import {setError} from '../errorHandling/state/errorHandlingSlice';
// Utils
import {getFlexDirection, wp} from '../../utils/styleUtil';
import {formatDateToText} from '../../utils/timeUtil';

const SavedWorkoutsScreen = () => {
  // TODO: Remove when find solution
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<
      StackNavigationProp<ProfileStackParamList, 'Saved_Workouts'>
    >();

  // GLOBAL VARIABLES
  const isLoading = useAppSelector(state => state.workout.isLoading);

  // LOCAL VARIABLES
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [tappedWorkoutID, setTappedWorkoutID] = useState('');

  useEffect(() => {
    dispatch(fetchSavedWorkouts()).catch(() =>
      dispatch(
        setError({
          type: AppErrorTypes.NETWORK_ERROR,
          message: '',
        }),
      ),
    );
  }, [dispatch]);

  // ** RENDER FUNCTIONS **
  const savedWorkouts = useAppSelector(state => state.workout.savedWorkouts);

  const renderSavedWorkout = ({item}: {item: Workout}) => {
    return (
      <View style={{paddingEnd: spaces._24px}}>
        <TitledCard title={item.name} outerStyle={{paddingStart: spaces._24px}}>
          <View style={{gap: spaces._10px}}>
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

  const renderHiddenButtons = (index: number, item: Workout) => {
    return (
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={() => handleDeletePressed(item.id)}
          style={styles.btnContainer}>
          <TrashIcon color={colors.DARK_GRAY} />
        </Pressable>
        <Pressable
          onPress={() => {
            setTappedWorkoutID(item.id);
            setIsSheetOpen(true);
          }}
          style={styles.btnContainer}>
          <OutlineHeartIcon color={colors.DARK_GRAY} />
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
          {exercise.sets && exercise.sets!.length > 0 && (
            <RegularText
              children={`(${exercise.sets!.length} ${i18n.t(
                'screens.savedWorkouts.sets',
              )})`}
              size={FontSizes.regular}
              color={colors.SECONDARY_TEXT}
            />
          )}
        </View>
      )) ?? null
    );
  };

  // ** HANDLE FUNCTIONS **
  const handleEditPressed = (workoutID: string) => {
    navigation.navigate('Edit_Saved_Workout', {workoutID});
  };

  const handleUnsavePressed = (workoutID: string) => {
    console.log(workoutID);
    // dispatch delete to BE with id
    setTappedWorkoutID('');
    setIsSheetOpen(false);
  };

  const handleDeletePressed = (workoutID: string) => {
    console.log(workoutID);
    // dispatch delete to BE with id
  };

  return (
    <ScreenLayout
      screenTitle={i18n.t('screens.savedWorkouts.title')}
      isBackButton={true}
      paddingHorizontal={spaces._0px}>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <SwipeableFlatList
            keyExtractor={(item: Workout) => item.id}
            data={savedWorkouts}
            renderItem={renderSavedWorkout}
            maxSwipeDistance={wp(50)}
            renderQuickActions={({index, item}) =>
              renderHiddenButtons(index, item)
            }
            contentContainerStyle={styles.contentContainerStyle}
            shouldBounceOnMount={true}
            ListEmptyComponent={
              <EmptyStateComponent
                text={i18n.t('screens.savedWorkouts.emptyState')}
              />
            }
            showsVerticalScrollIndicator={false}
          />
        )}
        <SaveWorkoutModal
          isVisible={isSheetOpen}
          onActionButtonPress={() => handleUnsavePressed(tappedWorkoutID)}
          onCloseButtonPress={() => {
            setTappedWorkoutID('');
            setIsSheetOpen(false);
          }}
          isSaveTheWorkout={false}
        />
      </>
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
