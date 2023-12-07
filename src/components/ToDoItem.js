import './ToDoItem.css'
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from 'react';

function ToDoItem({ note, deleteNote, setAllNotes }) {
  const [editNoteData, setEditNoteData] = useState({
    title: note.title,
    description: note.description,
    date: note.date
  });
  const [editing, setEditing] = useState(false);

  function enableEdit() {
    setEditing(true);
    setEditNoteData({
      title: note.title,
      description: note.description,
      date: note.date
    })
  }

  function updateNote(e) {
    e.preventDefault();

    setAllNotes(prevState => prevState.map(obj => obj.id === note.id ? { ...obj, date: editNoteData.date, title: editNoteData.title, description: editNoteData.description } : obj));

    setEditing(false);
    setEditNoteData({
      date: "",
      title: "",
      description: ""
    })
    e.target.reset();
  }

  return (

    <li className="col border-top justify-content-between text-start list-unstyled list-group-item w-50 d-flex">
      {!editing ?
        (<>
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
            <FaEdit className="mr-2" size={35} onClick={ () => enableEdit()} />
            <FaTrash size={30} onClick={ () => deleteNote} />
          </div>
        </>)
        :
        (<form className="w-100" onSubmit={updateNote}>
          <div className="w-100">
            <label for="title" className="text-start">Title</label>
            <input className="form-control" type="text" id="title" defaultValue={note.title} aria-label="default input example" onChange={(e) => setEditNoteData({ ...editNoteData, title: e.target.value })}></input>
            <label for="description" className="text-start mt-3">Description</label>
            <input className="form-control" type="text" id="description" defaultValue={note.description} aria-label="default input example" onChange={(e) => setEditNoteData({ ...editNoteData, description: e.target.value })}></input>
            <label for="date" className="text-start mt-3">Date</label>
            <input className="form-control" type="date" id="date" defaultValue={note.date} aria-label="default input example" onChange={(e) => setEditNoteData({ ...editNoteData, date: e.target.value })}></input>

          </div>
          <div className="d-flex justify-content-between mt-4">
            {editNoteData.title && editNoteData.description && editNoteData.date ? <button type="submit" className="btn btn-primary">Update</button> : null}
          </div>
        </form>)
      }
    </li>
  )
}

export default ToDoItem;
{/* <form className="modal fade" id="EditNote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onSubmit={updateNote}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content px-3 py-2">
          <label for="title" className="text-start">Title</label>
          <input className="form-control" type="text" id="title" placeholder={note.title} aria-label="default input example" onChange={(e) => setEditNoteData({ ...noteData, title: e.target.value })} value={noteData.title}></input>
          <label for="description" className="text-start mt-3">Description</label>
          <input className="form-control" type="text" id="description" placeholder={note.description} aria-label="default input example" onChange={(e) => setEditNoteData({ ...noteData, description: e.target.value })} value={noteData.description}></input>
          <label for="date" className="text-start mt-3">Date</label>
          <input className="form-control" type="date" id="date" placeholder={note.date} aria-label="default input example" onChange={(e) => setEditNoteData({ ...noteData, date: e.target.value })} value={noteData.date}></input>
          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {noteData.title && noteData.description && noteData.date ? <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Update</button> : null}
          </div>
        </div>
      </div>
    </form> */}