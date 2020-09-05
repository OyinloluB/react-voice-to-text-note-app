import React, { useState, useEffect } from "react";
import SavedNotes from "./notes/SavedNotes";
import RecordNote from "./notes/RecordNote";
import TopBar from "./bar/TopBar";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function App() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  useEffect(() => {
    handleListen();
    const myNote = localStorage.getItem("notes");
    const notes = JSON.parse(myNote);
    if (notes) {
      setSavedNotes(notes);
    }
  }, [isListening]);

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
    localStorage.setItem("notes", JSON.stringify([...savedNotes, note]));
  };

  return (
    <>
      <TopBar isListening={isListening} setIsListening={setIsListening} />
      <div>
        <RecordNote
          handleSaveNote={handleSaveNote}
          isListening={isListening}
          note={note}
        />
        <SavedNotes savedNotes={savedNotes} />
      </div>
    </>
  );
}

export default App;
