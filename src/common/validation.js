import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  Nickname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  Email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  Password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
  Repassword: Yup.string().when("Password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("Password")],
      "Both password need to be the same"
    )
  })
});

export const loginSchema = Yup.object().shape({
  nickName: Yup.string().required("Required"),
  password: Yup.string().required("Required")
});

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  repassword: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
  repasswordConfirm: Yup.string().when("repassword", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("repassword")],
      "Both password need to be the same"
    )
  })
});
