import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  function handleSubmit(values) {
    console.log("Formik Registered User:", values);
    alert("Registration successful (Formik)");
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Formik Registration Form"),

    React.createElement(
      Formik,
      {
        initialValues: { username: "", email: "", password: "" },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
      },
      React.createElement(
        Form,
        null,

        // Username
        React.createElement(
          "div",
          null,
          React.createElement("label", null, "Username"),
          React.createElement("br"),
          React.createElement(Field, { name: "username", type: "text" }),
          React.createElement(ErrorMessage, {
            name: "username",
            component: "p",
            style: { color: "red" }
          })
        ),

        // Email
        React.createElement(
          "div",
          null,
          React.createElement("label", null, "Email"),
          React.createElement("br"),
          React.createElement(Field, { name: "email", type: "email" }),
          React.createElement(ErrorMessage, {
            name: "email",
            component: "p",
            style: { color: "red" }
          })
        ),

        // Password
        React.createElement(
          "div",
          null,
          React.createElement("label", null, "Password"),
          React.createElement("br"),
          React.createElement(Field, { name: "password", type: "password" }),
          React.createElement(ErrorMessage, {
            name: "password",
            component: "p",
            style: { color: "red" }
          })
        ),

        // Submit button
        React.createElement(
          "button",
          { type: "submit" },
          "Register"
        )
      )
    )
  );
}

export default FormikForm;
