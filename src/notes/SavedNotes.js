import React from "react";
import Styles from "./saved.module.scss";

const SavedNotes = ({ savedNotes }) => {
  return (
    <div className={Styles.saved}>
      {savedNotes.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </div>
  );
};

export default SavedNotes;
