import classes from "../style/input.module.css";

export default function Input({ iconName, ...rest }) {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className={"material-icons-outlined"}> {iconName} </span>
    </div>
  );
}
