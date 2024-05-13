import {
    get,
    getDatabase,
    orderByKey,
    query,
    ref,
  } from "firebase/database";
  
  import { useEffect, useState } from "react";
  
  export default function useAnswerList(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answer, setAnswer] = useState([]);
  
    useEffect(() => {
      async function fetchAnswer() {
        // database related works
        const db = getDatabase();
        const answerRef = ref(db, `answers/${videoID}/questions`);
        const answerQuery = query(
            answerRef,
          orderByKey()
        );
  
        try {
          setError(false);
          setLoading(true);
          // request firebase database
          const snapshot = await get(answerQuery);
  
          setLoading(false);
  
          if (snapshot.exists()) {
            setAnswer([...Object.values(snapshot.val())]);
          }
        } catch (err) {
          console.log(err);
          setLoading(false);
          setError(true);
        }
      }
  
      fetchAnswer();
    }, [videoID]);
  
    return {
      loading,
      error,
      answer
    };
  }
  