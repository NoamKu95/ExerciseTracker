export const validateEmail = (email: string): boolean => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email) !== false;
};

export const validateFullName = (name: string) => {
  return /^[\u05D0-\u05EAa-zA-Z]+(\s[\u05D0-\u05EAa-zA-Z]+)+$/i.test(name);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 5;
};

export const isRegistrationDataValid = (
  name: string,
  email: string,
  password: string,
) => {
  const isNameValid = validateFullName(name);
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  return isNameValid && isEmailValid && isPasswordValid;
};
