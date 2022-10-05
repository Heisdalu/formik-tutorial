import React from "react";
import "./App.css";
import { useFormik } from "formik";

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

const App = () => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    getFieldProps,
  } = useFormik({
    initialValues: {
      email: "",
      username: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (obj) => {
      console.log(obj);
    },
  });

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="username box">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          {...getFieldProps("email")}
          className={touched.email && errors.email && "error"}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>

      <div className="username box">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          className={touched.username && errors.username && "error"}
        />
        {touched.username && errors.username && <p>{errors.username}</p>}
      </div>

      <div className="username box">
        <label htmlFor="username">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Enter Age"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          className={touched.age && errors.age && "error"}
        />
        {touched.age && errors.age && <p>{errors.age}</p>}
      </div>

      <div className="username box">
        <label htmlFor="username">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className={touched.password && errors.password && "error"}
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>

      <div className="username box">
        <label htmlFor="username">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          {...getFieldProps("confirmPassword")}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <p>{errors.confirmPassword}</p>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
