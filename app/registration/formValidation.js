import { object, string } from "yup";
import zxcvbn from "zxcvbn";

export const formValidation = object({
  username: string().trim().required("Username is required").min(6),
  password: string().trim().required("Password is required").min(6),
});

export const changePasswordValidation = object({
  OldPassword: string().trim().required("Old Password is required").min(6),
  newPassword: string().trim().required("New Password is required").min(6),
  adminPassword: string().trim().required("Admin password is required").min(6),
});

export function strength(password, setPasswordError, setPasswordErrorColor) {
  let passwordStrength = zxcvbn(password);
  setPasswordError(
    passwordStrength.score === 0
      ? "your password is very week"
      : passwordStrength.score === 1
      ? "your password is week"
      : passwordStrength.score === 2
      ? "your password is moderate"
      : passwordStrength.score === 3
      ? "your password is strong"
      : "your password is very strong"
  );
  setPasswordErrorColor(
    passwordStrength.score === 0
      ? "text-red-600"
      : passwordStrength.score === 1
      ? "text-orange-400"
      : passwordStrength.score === 2
      ? "text-yellow-200"
      : passwordStrength.score === 3
      ? "text-lime-600"
      : "text-blue-700"
  );
}
