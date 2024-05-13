import classes from "../style/button.module.css";

export default function Button({ children, className, ...rest }) {
  return (
    <button className={`${classes.button} ${className}`} {...rest}>{children}</button>
  );
}
