export const validateEmail = (email: string): boolean => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email) !== false;
};

export const validateName = (name: string) => {
  return /^[\u05D0-\u05EAa-zA-Z\s]{1,20}$/.test(name);
};

export const validatePhoneNumber = (phoneNumber: string) => {
  return /^\d{7}$/.test(phoneNumber);
};

export const confirmPasswords = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};
