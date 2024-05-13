import classes from "../../style/signUp.module.css";
import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";
export default function SignUp() {
  return (
    <div className={classes.container}>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <SignUpForm />
      </div>
    </div>
  );
}
