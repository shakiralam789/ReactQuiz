import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useQuestions from "../../hooks/useQuestionList";
import Answer from "../Answer";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "question":
      action.value.forEach((q) => {
        q.options.forEach((opt) => {
          opt.checked = false;
        });
      });
      return action.value;
    case "answer":
      let questions = _.cloneDeep(state);
      questions[action.qIndex].options[action.index].checked = action.checked;
      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { id } = useParams();
  const { questions, loading } = useQuestions(id);
  const [crrQ, setCrrQ] = useState(0);
  const [qna, disPatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  function handleNext() {
    if (crrQ < questions.length - 1) {
      setCrrQ((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (crrQ > 0) {
      setCrrQ((prev) => prev - 1);
    }
  }

  let progress = ((crrQ + 1) / questions.length) * 100;

  useEffect(() => {
    disPatch({
      type: "question",
      value: questions,
    });
  }, [questions]);

  function handleCheck(e, index) {
    disPatch({
      type: "answer",
      qIndex: crrQ,
      index: index,
      checked: e.target.checked,
    });
  }

  async function submitResult() {
    let { uid } = currentUser;
    let db = getDatabase();
    let resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: { id: id, value: qna },
    });
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && qna && qna[crrQ] && qna.length > 0 && (
        <div>
          <h1>{qna[crrQ].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer
            input={true}
            options={qna[crrQ].options}
            handleCheck={handleCheck}
          />
          <ProgressBar
            handleNext={handleNext}
            handlePrev={handlePrev}
            progress={progress}
            submitResult={submitResult}
          />
          <MiniPlayer />
        </div>
      )}
    </>
  );
}
