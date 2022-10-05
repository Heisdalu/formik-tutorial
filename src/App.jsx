import React from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = (values) => {
  const errors = {};

  if (values.email.trim() === "" || !values.email.includes("@")) {
    errors.email = "Input a valid email";
  }

  if (values.username.trim() === "") {
    errors.username = "Enter username";
  }

  if (values.age === "" || typeof values.age !== "number") {
    errors.age = "Abeg, Input your age";
  }

  if (values.password === "" || values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Rewrite your initial password";
  }

  return errors;
};

const submit = (val) => {
  console.log(val);
};

const App = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        age: "",
        password: "",
        confirmPassword: "",
      }}
      validate={validate}
      onSubmit={submit}
    >
      <Form>
        <div className="box">
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <p><ErrorMessage name="email" /></p>
        </div>

        <div className="box">
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" />
          <p><ErrorMessage name="username" /></p>
        </div>

        <div className="box">
          <label htmlFor="age">Age</label>
          <Field type="number" name="age" />
          <p><ErrorMessage name="age" /></p>
        </div>

        <div className="box">
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <p><ErrorMessage name="password" /></p>
        </div>

        <div className="box">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field type="password" name="confirmPassword" />
          <p><ErrorMessage name="confirmPassword" /></p>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default App;
