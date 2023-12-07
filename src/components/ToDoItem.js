import './ToDoItem.css'
import { FaTrash } from "react-icons/fa";
import { Modal, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function ToDoItem({ note, deleteNote, noteData, setNoteData, setAllNotes }) {

  console.log(note, "OUtside");
  function updateNote(e) {
    console.log(note, "Oy!");
    e.preventDefault();

    setAllNotes(prevState => prevState.map(obj => obj.id === note.id ? { ...obj, date: noteData.date, title: noteData.title, description: noteData.description } : obj));

    setNoteData({
      date: "",
      title: "",
      description: ""
    })
    e.target.reset();
  }

  return (
    <li className="col border-top justify-content-between text-start list-unstyled list-group-item w-50 d-flex">
      <div className="w-100">
        <h5>
          {note.title}
        </h5>
        <p className="my-0">
          {note.description}
        </p>
        <div className="mt-2">
          {note.date}
        </div>
      </div>
      <div className="d-flex align-items-center">
        <FaTrash size={30} onClick={deleteNote} />
      </div>
    </li>
  )
}

export default ToDoItem;
{/* <form className="modal fade" id="EditNote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onSubmit={updateNote}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content px-3 py-2">
          <label for="title" className="text-start">Title</label>
          <input className="form-control" type="text" id="title" placeholder={note.title} aria-label="default input example" onChange={(e) => setNoteData({ ...noteData, title: e.target.value })} value={noteData.title}></input>
          <label for="description" className="text-start mt-3">Description</label>
          <input className="form-control" type="text" id="description" placeholder={note.description} aria-label="default input example" onChange={(e) => setNoteData({ ...noteData, description: e.target.value })} value={noteData.description}></input>
          <label for="date" className="text-start mt-3">Date</label>
          <input className="form-control" type="date" id="date" placeholder={note.date} aria-label="default input example" onChange={(e) => setNoteData({ ...noteData, date: e.target.value })} value={noteData.date}></input>
          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {noteData.title && noteData.description && noteData.date ? <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Update</button> : null}
          </div>
        </div>
      </div>
    </form> */}