import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  let unSubscribe = true;

  useEffect(() => {
    async function fetchQuestions() {
      // database related works
      const db = getDatabase();
      const questionsRef = ref(db, `quiz/${videoID}/questions`);
      const questionsQuery = query(questionsRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(questionsQuery);

        setLoading(false);

        if (snapshot.exists()) {
          setQuestions((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    if (unSubscribe) fetchQuestions();

    return () => {
      unSubscribe = false;
    };
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
