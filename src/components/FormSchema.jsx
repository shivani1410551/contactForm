import * as Yup from "yup";

export const FormSchema = Yup.object({
  firstName: Yup.string().min(3).max(20).required("This field is required."),
  lastName: Yup.string().min(3).max(20).required("This field is required."),
  email: Yup.string().email().required("Please enter a valid email address"),
  queryType: Yup.string().required("Please select a query type"),
  consentBtn: Yup.array()
    .min(1)
    .required("To submit this form please consent to being contacted"),
  message: Yup.string().max(300).required("This field is required"),
});
