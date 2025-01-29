/**
 * Validates the password
 * @param {*} password Password to validate
 * @returns null if the password is valid, an error message otherwise
 */
export const hasPasswordErrors = (password) => {
  if (!password.trim()) return "Password cannot be empty.";
  if (!/^\S*$/.test(password)) return "Password must not contain whitespaces.";
  if (!/[A-Z]/.test(password))
    return "Password must have at least one uppercase letter.";
  if (!/[a-z]/.test(password))
    return "Password must have at least one lowercase letter.";
  if (!/[0-9]/.test(password))
    return "Password must contain at least one digit.";
  if (!/^.{8,32}$/.test(password))
    return "Password must be between 8 and 32 characters long.";

  return null;
};

/**
 * Validates the email format
 * @param {*} email Email to validate
 * @returns true if the email is valid, false otherwise
 */
export const isEmailValid = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};
