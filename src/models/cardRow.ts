import {RootStackParamList} from '../constants/screens';

export interface CardRowModel {
  text: string;
  path?: keyof RootStackParamList | keyof RootStackParamList;
  infoText?: string;
}
