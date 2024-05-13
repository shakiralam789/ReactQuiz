import Answer from "../component/Answer";
import classes from "../style/question.module.css";

export default function Question({ answer }) {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer && answer.title && <>{answer.title}</>}
      </div>
      <Answer input={false} options={answer.options} />
    </div>
  );
}
