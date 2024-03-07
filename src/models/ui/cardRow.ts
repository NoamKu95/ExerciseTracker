import {
  ProfileStackParamList,
  RootStackParamList,
} from '../../constants/screens';

export interface CardRowModel {
  text: string;
  path?: keyof RootStackParamList | keyof ProfileStackParamList;
  onPress?: () => void;
  infoText?: string;
  infoBgColor?: string;
}
