import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import classes from "../style/signUp.module.css";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function SignUpForm(params) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [agree, setAgree] = useState("");
  let [loading, setLoading] = useState(false);

  let [error, setError] = useState("");

  let { signUp } = useAuth();
  let history = useNavigate();

  async function handleForm(e) {
    e.preventDefault();

    if (password !== confirmPassword) return setError("password doest match");

    try {
      setError("");
      setLoading(true);
      await signUp(email, password, name);
      history("/");
    } catch (error) {
      console.log(error);
      setError("something is wrong");
      setLoading(false);
    }
  }

  return (
    <Form className={`${classes.signup}`} onSubmit={handleForm}>
      <Input
        required
        iconName="person"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <Input
        required
        iconName="alternate_email"
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <Input
        required
        iconName="lock"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <Input
        required
        iconName="lock_clock"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm password"
      />
      <CheckBox
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        text="I agree to the Terms & Conditions"
      />
      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
