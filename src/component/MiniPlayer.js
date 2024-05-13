import img from "../assets/images/3.jpg";
import classes from "../style/miniPlayer.module.css";

export default function MiniPlayer(params) {
  return (
    <div className={[classes.miniPlayer, classes.floatingBtn].join(" ")}>
      <span className={["material-icons-outlined", classes.open].join(" ")}>
        play_circle_filled
      </span>
      <span className={["material-icons-outlined", classes.close].join(" ")}>
        close
      </span>
      <img src={img} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
