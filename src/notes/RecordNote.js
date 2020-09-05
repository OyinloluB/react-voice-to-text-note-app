import React from "react";
import Styles from "./record.module.scss";

const RecordNote = ({ handleSaveNote, isListening, note }) => {
  return (
    <div>
      <div className={Styles.noteBar}>
        <h3>{isListening ? "Taking Note..." : "Your Notes"}</h3>
        <button onClick={handleSaveNote} disabled={!note}>
          Save Note
        </button>
      </div>
      <p>{note}</p>
    </div>
  );
};

export default RecordNote;
