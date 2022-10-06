import React from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "./components/Input";

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

const submit = (val, ac) => {
  console.log(val, ac);

  setTimeout(() => {
    ac.setSubmitting('false');
    ac.resetForm()
  }, 5000)

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
      {({ isSubmitting }) => (
        <Form>
          <Input label="Email" name="email" type="email" />
          <Input label="Username" name="username" type="text" />
          <Input label="Age" name="age" type="number" />
          <Input label="Password" name="password" type="password" />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default App;
