import * as yup from "yup";
export const userSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phoneNumber: yup.string().required(),
  dob: yup.date().required(),
  country: yup.string().required(),
});
