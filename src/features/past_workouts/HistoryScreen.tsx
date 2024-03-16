import React, {useEffect, useState} from 'react';
import {FlatList, LogBox, Pressable, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// Components
import ScreenLayout from '../../components/Base/ScreenLayout';
import {BoldText, RegularText} from '../../components/Base/Texts';
import TitledCard from '../../components/Cards/TitledCard';
import FilterExcHistoryBottomSheet from '../../components/BottomSheets/FilterExcHistoryBottomSheet';
import EmptyStateComponent from '../../components/Base/EmptyStateComponent';
// Icons
import FilterIcon from '../../assets/icons/FilterIcon';
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon';
// UI
import {colors} from '../../constants/ui/colors';
import {spaces} from '../../constants/ui/spaces';
import {FontSizes} from '../../constants/ui/fonts';
// Constants
import i18n from '../../translations/i18n';
import {ProfileStackParamList} from '../../constants/screens';
// Models
import {HistoryWorkout} from '../../models/core/workout';
import {FilteringObject} from '../../models/filtering';
import {AppErrorTypes} from '../../models/error';
// Redux
import {useAppDispatch, useAppSelector} from '../../store/store';
import {fetchWorkoutHistory} from '../home_page/state/workoutActions';
import {setError} from '../errorHandling/state/errorHandlingSlice';
// Utils
import {getFlexDirection} from '../../utils/styleUtil';

const HistoryScreen = () => {
  // TODO: Remove when find solution
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<
      StackNavigationProp<ProfileStackParamList, 'Workout_History'>
    >();

  // STATE VARIABLES
  const {pastWorkouts, page, isLoading, didFinishFetchingAllHistory} =
    useAppSelector(state => state.workout);

  // LOCAL VARIABLES
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  // const [isFetching, setIsFetching] = useState(false); // TODO: use in paging mechanism

  useEffect(() => {
    dispatch(fetchWorkoutHistory({page: page + 1, limit: 1})).catch(() =>
      dispatch(
        setError({
          type: AppErrorTypes.NETWORK_ERROR,
          message: '',
        }),
      ),
    );
  }, [dispatch, page]);

  // ** RENDER FUNCTIONS **
  const renderFilterButton = () => {
    return (
      <Pressable
        style={styles.filterContainer}
        onPress={() => setIsFilterSheetOpen(true)}>
        <RegularText
          children={i18n.t('screens.workoutsHistory.filter')}
          size={FontSizes.regular}
        />
        <FilterIcon />
      </Pressable>
    );
  };

  const renderPeriodCard = (title: string, data: HistoryWorkout[]) => {
    return (
      <View style={styles.cardContainer} key={title}>
        <TitledCard title={title}>
          {data.map((workout, index) => {
            return (
              <Pressable
                key={workout.id + index}
                style={[
                  styles.rowContainer,
                  index === 0 && styles.firstRow,
                  index === data.length - 1 && styles.lastRow,
                ]}
                onPress={() => handleWorkoutTapped(workout.id)}>
                {renderWorkoutRow(workout)}
              </Pressable>
            );
          })}
        </TitledCard>
      </View>
    );
  };

  const renderWorkoutRow = (workout: HistoryWorkout) => {
    return (
      <>
        <View style={styles.textsContainer}>
          <View style={styles.rowDateContainer}>
            <RegularText
              children={`${workout.date}, `}
              size={FontSizes.regular}
            />
            <RegularText
              children={`${i18n.t(`common.dayTimes.${workout.time}`)}`}
              size={FontSizes.regular}
              color={colors.GRAY}
            />
          </View>
          <BoldText children={workout.name} size={FontSizes.medium} />
        </View>
        <ChevronLeftIcon />
      </>
    );
  };

  // ** HANDLE FUNCTIONS **
  const handleFiltersSelected = (filters: FilteringObject) => {
    console.log(filters);
    // dispatch to BE .then()
    setIsFilterSheetOpen(false);
  };

  const handleWorkoutTapped = (workoutID: string) => {
    navigation.navigate('Past_Workout_Details', {
      workoutID,
    });
  };

  // const fetchMoreHistoryData = () => {
  //   if (!isLoading && !isFetching && !didFinishFetchingAllHistory) {
  //     setIsFetching(true);
  //     dispatch(
  //       fetchWorkoutHistory({
  //         page,
  //         limit: 20,
  //       }),
  //     ).finally(() => setIsFetching(false));
  //   }
  // };

  return (
    <ScreenLayout
      screenTitle={i18n.t('screens.workoutsHistory.title')}
      isBackButton={true}>
      <>
        {renderFilterButton()}
        <FlatList
          data={pastWorkouts}
          renderItem={({item}) =>
            renderPeriodCard(item.categoryName, item.data)
          }
          keyExtractor={item => item.categoryName}
          onEndReachedThreshold={0.1}
          // onEndReached={fetchMoreHistoryData}
          ListEmptyComponent={
            <EmptyStateComponent
              text={i18n.t('screens.workoutsHistory.emptyStateText')}
            />
          }
        />
        <FilterExcHistoryBottomSheet
          isOpen={isFilterSheetOpen}
          onSavePressed={handleFiltersSelected}
          onCloseSheet={() => setIsFilterSheetOpen(false)}
        />
      </>
    </ScreenLayout>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  filterContainer: {
    justifyContent: 'flex-end',
    flexDirection: getFlexDirection(),
    gap: spaces._4px,
    alignItems: 'center',
  },
  cardContainer: {
    paddingBottom: spaces._36px,
  },
  rowContainer: {
    flexDirection: getFlexDirection(),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.TRANSPARENT,
    borderBottomColor: colors.SUPER_LIGHT_GRAY,
  },
  firstRow: {
    paddingTop: spaces._8px,
    paddingBottom: spaces._16px,
  },
  lastRow: {
    paddingTop: spaces._16px,
    paddingBottom: spaces._8px,
    borderWidth: 0,
  },
  textsContainer: {
    gap: spaces._8px,
  },
  rowDateContainer: {
    flexDirection: getFlexDirection(),
  },
});
