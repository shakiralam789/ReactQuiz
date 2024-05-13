import Question from "../component/Question";
import classes from "../style/analysis.module.css";

export default function Analysis({ answers }) {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>

      {answers &&
        answers.length > 0 &&
        answers.map((answer, i) => <Question key={i} answer={answer} />)}
    </div>
  );
}
