import React from "react";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
const ContactUs = ({ onSuccess }) => {
  const formInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    consentBtn: [],
    message: "",
  };
  const { handleChange, handleSubmit, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: FormSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="bg-White rounded-md p-6 xs:m-8 sm:m-8  md:max-w-[500px] md:max-h-[90vh]">
      <h1 className="text-GreyDarker font-bold text-lg pb-3 ">Contact Us</h1>

      <form
        action=""
        className="flex gap-2 flex-col xs:gap-[2px] "
        onSubmit={handleSubmit}
      >
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
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-slate-500 rounded sm:w-full xs:w-full  hover:border-GreenMedium cursor-pointer
              active:bg-GreenLight focus:bg-GreenLight outline-none
              "
            />
            {errors.firstName && touched.firstName ? (
              <span className="text-Red text-[12px] my-0">
                {errors.firstName}
              </span>
            ) : null}
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
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              className="border border-slate-500 rounded xs:w-full sm:w-full
              hover:border-GreenMedium cursor-pointer  active:bg-GreenLight focus:bg-GreenLight outline-none
              "
            />
            {errors.lastName && touched.lastName ? (
              <span className="text-Red text-[12px] my-0">
                {errors.lastName}
              </span>
            ) : null}
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
          <input
            type="text"
            id="email"
            onBlur={handleBlur}
            onChange={handleChange}
            name="email"
            value={values.email}
            className="w-full border border-slate-500 rounded hover:border-GreenMedium cursor-pointer  active:bg-GreenLight focus:bg-GreenLight outline-none"
          />
          {errors.email && touched.email ? (
            <span className="text-Red text-[12px] my-0">{errors.email}</span>
          ) : null}
        </div>
        {/* radio */}
        <div className="formGroup">
          <p
            name="queryType"
            id="queryType"
            className=" text-[14px] py-1 text-gray-500"
          >
            Query Type *
          </p>{" "}
          <div className="radio-wrapper flex md:gap-5 xs:flex-col sm:flex-col md:flex-row ">
            {" "}
            <div className="border border-gray-500 rounded inline-block xs:mt-2 xs:w-full sm:mt-2 sm:w-full md:w-1/2 md:py-1 hover:border-GreenMedium cursor-pointer   active:bg-GreenLight focus:bg-GreenLight outline-none">
              {" "}
              <input
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
              <input
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
          {errors.queryType && touched.queryType ? (
            <span className="text-Red text-[12px] my-0">
              {errors.queryType}
            </span>
          ) : null}
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
          <input
            name="message"
            id="message"
            cols="30"
            rows="4"
            className="border border-slate-500 rounded w-full hover:border-GreenMedium cursor-pointer  active:bg-GreenLight focus:bg-GreenLight outline-none"
          ></input>
          {errors.message && touched.message ? (
            <span className="text-Red text-[12px] my-0">{errors.message}</span>
          ) : null}
        </div>
        {/* checkbox */}
        <div className="formGroup">
          <div className="checkboxWrapper  flex items-center">
            {" "}
            <input
              type="checkbox"
              id="consentBtn"
              name="consentBtn"
              className="mr-2 hover:border-GreenMedium cursor-pointer 
            active:bg-GreenLight focus:bg-GreenLight outline-none"
            />
            <label for="consentBtn" className="text-gray-500   text-[14px]  ">
              I consent to being contacted by the team *
            </label>
          </div>

          {errors.consentBtn && touched.consentBtn ? (
            <span className="text-Red text-[12px] my-0">
              {errors.consentBtn}
            </span>
          ) : null}
        </div>

        {/* submit btn */}
        <input
          type="submit"
          value="Submit"
          className="bg-GreenMedium text-White block w-full rounded py-[8px] text-[14px] mt-4 mb-2  hover:bg-GreyDarker outline-none cursor-pointer transition-colors"
          onClick={onSuccess}
        />
      </form>
    </div>
  );
};

export default ContactUs;
