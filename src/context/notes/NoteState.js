/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all note

  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNTI3Y2IxMjQxODJmMGFlZGE0ZGM5In0sImlhdCI6MTY5MDY0MjQ1Nn0.l_4QU3DQmT5w7Bni7iuZLsNAiItodD-4j_5DA3iXQqM",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a note

  const addNote = async (title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNTI3Y2IxMjQxODJmMGFlZGE0ZGM5In0sImlhdCI6MTY5MDY0MjQ1Nn0.l_4QU3DQmT5w7Bni7iuZLsNAiItodD-4j_5DA3iXQqM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNTI3Y2IxMjQxODJmMGFlZGE0ZGM5In0sImlhdCI6MTY5MDY0MjQ1Nn0.l_4QU3DQmT5w7Bni7iuZLsNAiItodD-4j_5DA3iXQqM",
      },
    });
    const json = await response.json();
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // Edit a note

  const editNote = async (id, title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjNTI3Y2IxMjQxODJmMGFlZGE0ZGM5In0sImlhdCI6MTY5MDY0MjQ1Nn0.l_4QU3DQmT5w7Bni7iuZLsNAiItodD-4j_5DA3iXQqM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
    setNotes(notes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
