import './ToDoItem.css'
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from 'react';

function ToDoItem({ note, deleteNote, setAllNotes }) {
  const [editNoteData, setEditNoteData] = useState({
    title: note.title,
    description: note.description,
    date: note.date,
    category: note.category
  });
  const [editing, setEditing] = useState(false);
  const [completed, setCompleted] = useState(false);

  function enableEdit() {
    setEditing(true);
    setEditNoteData({
      title: note.title,
      description: note.description,
      date: note.date,
      category: note.category
    })
  }

  function updateNote(e) {
    e.preventDefault();

    setAllNotes(prevState => prevState.map(obj => obj.id === note.id ? { ...obj, date: editNoteData.date, title: editNoteData.title, description: editNoteData.description, category: editNoteData.category } : obj));

    setEditing(false);
    setEditNoteData({
      date: "",
      title: "",
      description: "",
      category: ""
    })
    e.target.reset();
  }

  return (

    <li className="hover-element col border-top justify-content-between text-start list-unstyled list-group-item w-50 d-flex mt-2">
      {!editing ?
        (<>
          {completed ?
            <div className="w-100" onClick={() => setCompleted(false)}>
              <h5 className="text-success">
                <del>{note.title}</del>
              </h5>
              <p className="my-0 text-success">
                <del>{note.description}</del>
              </p>
              <div className="mt-2 text-success">
                <del>{note.date}</del>
              </div>
              <div className="text-success">
                <del>{note.category}</del>
              </div>
            </div> :
            <div className="w-100" onClick={() => setCompleted(true)}>
              <h5>
                {note.title}
              </h5>
              <p className="my-0">
                {note.description}
              </p>
              <div className="mt-2">
                {note.date}
              </div>
              <div className>
                {note.category}
              </div>
            </div>
          }
          <div className="d-flex align-items-center">
            <FaEdit className="mr-2" size={35} onClick={() => enableEdit()} />
            <FaTrash size={30} onClick={deleteNote} />
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
            <div class="btn-group mt-4 w-100">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" value={editNoteData.category}>
                {editNoteData.category ? editNoteData.category : `Please select an option`}
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" onClick={(e) => setEditNoteData({ ...editNoteData, category: e.target.innerText })}>Work</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => setEditNoteData({ ...editNoteData, category: e.target.innerText })}>Personal</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => setEditNoteData({ ...editNoteData, category: e.target.innerText })}>Home</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => setEditNoteData({ ...editNoteData, category: e.target.innerText })}>Family</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => setEditNoteData({ ...editNoteData, category: e.target.innerText })}>Social</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => setEditNoteData({ ...editNoteData, category: e.target.innerText })}>Health</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => setEditNoteData({ ...editNoteData, category: e.target.innerText })}>Hobby</a></li>
              </ul>
            </div>
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