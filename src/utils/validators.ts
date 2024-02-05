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
  name?: string,
) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isNameValid = name ? validateFullName(name) : true;
  return isNameValid && isEmailValid && isPasswordValid;
};
