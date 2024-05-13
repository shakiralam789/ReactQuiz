import React from "react";
import { useLocation } from "react-router-dom";
import useAnswerList from "../../hooks/useAnswerList";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { state } = useLocation();
  const { answer, loading, error } = useAnswerList(state.id);

  let scorePerAnswer = 5;

  function calculate() {
    let score = 0;

    answer.forEach((ans, i) => {
      let rightAnswer = [];
      let resultAnswer = [];

      ans.options.forEach((opt, j) => {
        if (opt.correct) {
          rightAnswer.push(j);
        }

        if (state.value[i].options[j].checked === true) {
          resultAnswer.push(j);
          opt.checked = true;
        }
      });

      let isAll = false;

      isAll = rightAnswer.every((el, i) => el === resultAnswer[i]);

      if (isAll) {
        score = score + scorePerAnswer;
      }
    });

    return score;
  }

  let totalScore = calculate();

  return (
    <>
      {loading && <div>Loading</div>}
      {error && <div>Something is wrong!</div>}

      {answer && answer.length > 0 && (
        <>
          <Summary score={totalScore} noq={answer.length * scorePerAnswer} />
          <Analysis answers={answer} />
        </>
      )}
    </>
  );
}
