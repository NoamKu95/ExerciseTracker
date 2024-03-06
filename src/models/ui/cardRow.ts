import {RootStackParamList} from '../../constants/screens';

export interface CardRowModel {
  text: string;
  path?: keyof RootStackParamList;
  onPress?: () => void;
  infoText?: string;
  infoBgColor?: string;
}
