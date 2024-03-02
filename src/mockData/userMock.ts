import {Gender, MeasureUnit} from '../constants/enums';
import {User} from '../models/core/user';

export const mockUser: User = {
  fullName: 'Johnny el Cato',
  email: 'Jonjonin@email.com',
  gender: Gender.OTHER,
  measureUnit: MeasureUnit.KG,
};
