import img from "../assets/images/signup.svg";
import classes from "../style/illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={img} alt="Signup" />
    </div>
  );
}
