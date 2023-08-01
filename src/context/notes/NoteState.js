import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64c65324598eb3ce7cf318e7f",
      user: "64c527cb124182f0aeda4dc9",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-07-30T12:10:12.763Z",
      __v: 0,
    },
    {
      _id: "64c9067e62fe4402e6c59c66a",
      user: "64c527cb124182f0aeda4dc9",
      title: "Exercise",
      description: "Please do proper exercise",
      tag: "personal",
      date: "2023-08-01T13:19:58.288Z",
      __v: 0,
    },
    {
      _id: "64c65324598ebce67cf318e7f",
      user: "64c527cb124182f0aeda4dc9",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-07-30T12:10:12.763Z",
      __v: 0,
    },
    {
      _id: "64c9067e62fe4082e6c59c66a",
      user: "64c527cb124182f0aeda4dc9",
      title: "Exercise",
      description: "Please do proper exercise",
      tag: "personal",
      date: "2023-08-01T13:19:58.288Z",
      __v: 0,
    },
    {
      _id: "64c65324598ebce7cf7318e7f",
      user: "64c527cb124182f0aeda4dc9",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-07-30T12:10:12.763Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note

  const addNote = (title, description, tag) => {
    const note = {
      _id: "64c9067e62fe402e6dc59c66a",
      user: "64c527cb124182f0aeda4dc9",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-01T13:19:58.288Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note

  const deleteNote = () => {};

  // Edit a note

  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
