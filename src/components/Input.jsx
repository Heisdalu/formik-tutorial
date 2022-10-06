import "../App.css";
import { useField, Field, ErrorMessage } from "formik";

const Input = (props) => {
  const [field] = useField(props);
  return (
    <div className="box">
      <label htmlFor={props.name}>{props.label}</label>
      <Field name={props.name} type={props.type} {...field} />
      <ErrorMessage name={props.name} component="p" />
    </div>
  );
};

export default Input;
