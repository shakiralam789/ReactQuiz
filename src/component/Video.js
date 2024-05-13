import classes from "../style/video.module.css";
import { Link } from "react-router-dom";

export default function Video({ title, id, noq }) {
  return (
    <>
      {
      noq && noq > 0 ? (
        <Link to={`/quiz/${id}`}>
        <div className={classes.video}>
          <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
          <p>{title}</p>
          <div className={classes.qmeta}>
            <p>{noq} Questions</p>
            <p>Score : {noq * 5}</p>
          </div>
        </div>
      </Link>
      ) : (
        <div>
        <div className={classes.video}>
          <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
          <p>{title}</p>
          <div className={classes.qmeta}>
            <p>{noq} Questions</p>
            <p>Score : {noq * 5}</p>
          </div>
        </div>
      </div>
      )
    }
    </>
   
  );
}
