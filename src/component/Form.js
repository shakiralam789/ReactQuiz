import classes from "../style/form.module.css";

export default function Form({ className, children, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} {...rest}>
      {children}
    </form>
  );
}
