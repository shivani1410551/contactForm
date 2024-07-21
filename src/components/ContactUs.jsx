import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormSchema } from "./FormSchema";
const formInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  consentBtn: [],
  message: "",
};
// onsubmit
const onSubmit = (values, action) => {
  console.log(values);
  action.resetForm();
};
const ContactUs = ({ onSuccess }) => {
  return (
    <div className="bg-White rounded-md p-6 xs:m-8 sm:m-8  md:max-w-[500px] md:max-h-[90vh]">
      <header>
        {" "}
        <h1 className="text-GreyDarker font-bold text-lg pb-3 ">Contact Us</h1>
      </header>
      <main>
        {" "}
        <Formik
          initialValues={formInitialValues}
          validationSchema={FormSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex gap-2 flex-col xs:gap-[2px] ">
            {/* name */}
            <div className="nameGroup flex md:gap-5 xs:flex-col sm:flex-col md:flex-row">
              {/* fname */}
              <div className="formGroup ">
                <label
                  htmlFor="firstName"
                  className="text-gray-500 pb-[5px] inline-block text-[14px]"
                >
                  First Name *
                </label>{" "}
                <br />
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border border-slate-500 rounded sm:w-full xs:w-full  hover:border-GreenMedium cursor-pointer
              active:bg-GreenLight focus:bg-GreenLight outline-none
              "
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-Red xs:text-[8px] sm:text-[8px] md:text-[12px]"
                />
              </div>
              {/* lname */}
              <div className="formGroup">
                <label
                  htmlFor="lastName"
                  className="text-gray-500 pb-[5px] inline-block text-[14px]"
                >
                  Last Name *
                </label>{" "}
                <br />
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="border border-slate-500 rounded xs:w-full sm:w-full
              hover:border-GreenMedium cursor-pointer  active:bg-GreenLight focus:bg-GreenLight outline-none
              "
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="text-Red xs:text-[8px] sm:text-[8px] md:text-[12px]"
                />
              </div>
            </div>
            {/* email */}
            <div className="formGroup">
              <label
                htmlFor="email"
                className="text-gray-500 pb-[5px] inline-block text-[14px]"
              >
                Email Address*
              </label>{" "}
              <br />
              <Field
                type="text"
                id="email"
                name="email"
                className="w-full border border-slate-500 rounded hover:border-GreenMedium cursor-pointer  active:bg-GreenLight focus:bg-GreenLight outline-none"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="text-Red xs:text-[8px] sm:text-[8px] md:text-[12px]"
              />
            </div>
            {/* radio */}
            <div className="formGroup">
              <p id="queryType" className=" text-[14px] py-1 text-gray-500">
                Query Type *
              </p>{" "}
              <div className="radio-wrapper flex md:gap-5 xs:flex-col sm:flex-col md:flex-row ">
                {" "}
                <div className="border border-gray-500 rounded inline-block xs:mt-2 xs:w-full sm:mt-2 sm:w-full md:w-1/2 md:py-1 hover:border-GreenMedium cursor-pointer   active:bg-GreenLight focus:bg-GreenLight outline-none">
                  {" "}
                  <Field
                    type="radio"
                    id="generalEnquiry"
                    value="generalEnquiry"
                    name="queryType"
                    className="border border-slate-500 rounded mx-2 inline-block active:accent-GreenMedium focus:border-GreenMedium hover:accent-GreenMedium"
                  />
                  <label
                    htmlFor="generalEnquiry"
                    className="text-gray-500 text-[14px] pr-6"
                  >
                    General Enquiry
                  </label>
                </div>
                <div
                  className="border border-gray-500 rounded inline-block  xs:mt-2 xs:w-full sm:mt-2 sm:w-full md:w-1/2 md:py-1
            hover:border-GreenMedium cursor-pointer  active:bg-GreenLight focus:bg-GreenLight outline-none
            "
                >
                  {" "}
                  <Field
                    type="radio"
                    id="supportRequest"
                    value="supportRequest"
                    name="queryType"
                    className="border border-slate-500 rounded  inline-block mx-2 active:accent-GreenMedium focus:border-GreenMedium hover:accent-GreenMedium"
                  />
                  <label
                    htmlFor="supportRequest"
                    className="text-gray-500 text-[14px]  "
                  >
                    Support Request
                  </label>
                </div>
              </div>
              <ErrorMessage
                name="queryType"
                component="span"
                className="text-Red xs:text-[8px] sm:text-[8px] md:text-[12px]"
              />
            </div>
            {/* textarea */}
            <div className="formGroup">
              <label
                htmlFor="message"
                className="text-gray-500 pb-[5px] inline-block text-[14px]"
              >
                {" "}
                Message *
              </label>{" "}
              <br />
              <Field
                name="message"
                as="textarea"
                id="message"
                className="border border-slate-500 rounded w-full hover:border-GreenMedium cursor-pointer  active:bg-GreenLight focus:bg-GreenLight outline-none"
              ></Field>
              <ErrorMessage
                name="message"
                component="span"
                className="text-Red xs:text-[8px] sm:text-[8px] md:text-[12px]"
              />
            </div>
            {/* checkbox */}
            <div className="formGroup">
              <div className="checkboxWrapper  flex items-center">
                {" "}
                <Field
                  type="checkbox"
                  id="consentBtn"
                  value="consentBtn"
                  name="consentBtn"
                  className="mr-2 hover:border-GreenMedium cursor-pointer 
            active:bg-GreenLight focus:bg-GreenLight outline-none"
                />
                <label
                  htmlFor="consentBtn"
                  className="text-gray-500   text-[14px]  "
                >
                  I consent to being contacted by the team *
                </label>
              </div>
            </div>
            <ErrorMessage
              name="consentBtn"
              component="span"
              className="text-Red xs:text-[8px] sm:text-[8px] md:text-[12px]"
            />
            {/* submit btn */}
            <footer>
              {" "}
              <Field
                type="submit"
                value="Submit"
                className="bg-GreenMedium text-White block w-full rounded py-[8px] text-[14px] mt-4 mb-2  hover:bg-GreyDarker outline-none cursor-pointer transition-colors"
                onClick={onSuccess}
              />
            </footer>
          </Form>
        </Formik>
      </main>
    </div>
  );
};

export default ContactUs;
