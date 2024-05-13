import Button from "../component/Button";
import classes from "../style/progressBar.module.css";

export default function ProgressBar({
  handleNext,
  handlePrev,
  progress,
  submitResult,
}) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={handlePrev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress} % Cimplete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {progress === 100 ? (
        <Button onClick={submitResult} className="next">
          <span>Result</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      ) : (
        <Button onClick={handleNext} className="next">
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      )}
    </div>
  );
}
