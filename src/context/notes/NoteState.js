import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64c65324598ebce7cf318e7f",
      user: "64c527cb124182f0aeda4dc9",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-07-30T12:10:12.763Z",
      __v: 0,
    },
    {
      _id: "64c9067e62fe402e6c59c66a",
      user: "64c527cb124182f0aeda4dc9",
      title: "Exercise",
      description: "Please do proper exercise",
      tag: "personal",
      date: "2023-08-01T13:19:58.288Z",
      __v: 0,
    },
    {
      _id: "64c65324598ebce7cf318e7f",
      user: "64c527cb124182f0aeda4dc9",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-07-30T12:10:12.763Z",
      __v: 0,
    },
    {
      _id: "64c9067e62fe402e6c59c66a",
      user: "64c527cb124182f0aeda4dc9",
      title: "Exercise",
      description: "Please do proper exercise",
      tag: "personal",
      date: "2023-08-01T13:19:58.288Z",
      __v: 0,
    },
    {
      _id: "64c65324598ebce7cf318e7f",
      user: "64c527cb124182f0aeda4dc9",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-07-30T12:10:12.763Z",
      __v: 0,
    },
    {
      _id: "64c9067e62fe402e6c59c66a",
      user: "64c527cb124182f0aeda4dc9",
      title: "Exercise",
      description: "Please do proper exercise",
      tag: "personal",
      date: "2023-08-01T13:19:58.288Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
