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
  email: string,
  password: string,
  name: string,
): boolean => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isNameValid = !!name && !!name.trim() && validateFullName(name);
  return isNameValid && isEmailValid && isPasswordValid;
};

export const isLoginDataValid = (email: string, password: string): boolean => {
  return validateEmail(email) && validatePassword(password);
};
