import React from "react";
import Styles from "./topbar.module.scss";

const TopBar = ({ isListening, setIsListening }) => {
  return (
    <div className={Styles.bar}>
      <div>
        <h4>Record your notes...</h4>
      </div>
      <div onClick={() => setIsListening((prevState) => !prevState)}>
        {isListening ? (
          <span>
            <i className="fas fa-microphone"></i>
            &nbsp;
            <p>Stop recording</p>
          </span>
        ) : (
          <span>
            <i className="fas fa-microphone-slash"></i>
            &nbsp;
            <p>Click to start recording</p>
          </span>
        )}
      </div>
    </div>
  );
};

export default TopBar;
