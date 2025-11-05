export const emailRegVal = (email, password, fullName, confirmPass) => {
  

  const isEmailValid = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidName = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/.test(fullName);
  const isConfirmPass = password === confirmPass;

  

  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  if (!isValidName) return "Name is not Valid";
  if (!isConfirmPass) return "Password do not match";
  return null;
};
