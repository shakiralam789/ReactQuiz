import { Fragment } from "react";
import classes from "../style/answers.module.css";
import CheckBox from "./CheckBox";

export default function Answer({ options = [], handleCheck, input }) {
  return (
    <div className={classes.answers}>
      {options.length > 0 &&
        options.map((opt, i) => (
          <Fragment key={i}>
            {input ? (
              <CheckBox
                key={i}
                className={classes.answer}
                value={i}
                text={opt.title}
                onChange={(e) => handleCheck(e, i)}
                checked={opt.checked}
              />
            ) : (
              <CheckBox
                key={i}
                className={`${classes.answer} ${
                  opt.correct
                    ? classes.correct
                    : opt.checked
                    ? classes.wrong
                    : null
                }`}
                text={opt.title}
                defaultChecked={opt.checked}
                disabled
              />
            )}
          </Fragment>
        ))}
    </div>
  );
}
