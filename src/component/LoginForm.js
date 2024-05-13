import { useState } from "react";
import classes from "../style/login.module.css";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import { object, string } from "yup";

export default function LoginForm(params) {
  let [loading, setLoading] = useState();
  let [error, setError] = useState("");
  let navigate = useNavigate();
  let { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;

      async function loginHandle() {
        try {
          setLoading(true);
          await login(email, password);
          navigate("/");
        } catch (error) {
          setError("failed to login");
          setLoading(false);
        }
      }

      loginHandle();
    },

    validationSchema: object({
      email: string().required('Email is required'),
      password: string().required('Password is required'),
    }),
  });

  return (
    <Form className={classes.login} onSubmit={formik.handleSubmit}>
      <Input
        required
        id="email"
        value={formik.values.email}
        iconName="alternate_email"
        type="text"
        placeholder="Enter email"
        onChange={formik.handleChange}
      />

      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}

      <Input
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        iconName="lock"
        type="password"
        placeholder="Enter password"
      />
      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account? <Link to="/sign-up">Signup</Link> instead.
      </div>
    </Form>
  );
}
