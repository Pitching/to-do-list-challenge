import './ToDoItem.css'
import { FaTrash } from "react-icons/fa";
import { useEffect } from 'react';

function ToDoItem({ note, deleteNote, updateItem }) {

  return (
    <li className="col border-top justify-content-between text-start list-unstyled list-group-item w-50 d-flex">
      <div className="w-100" data-bs-toggle="modal" data-bs-target="#EditNote">
        <h5>
          {note.title}
        </h5>
        <p className="my-0">
          {note.desc}
        </p>
        <div className="mt-2">
          {note.date}
        </div>
      </div>
      <div className="d-flex align-items-center" onClick={deleteNote}>
        <FaTrash size={30} />
      </div>

      <form className="modal fade" id="EditNote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-3 py-2">
            <label for="title" className="text-start">Title</label>
            <input className="form-control" type="text" id="title" palceholder={note.title} aria-label="default input example"></input>
            <label for="description" className="text-start mt-3">Description</label>
            <input className="form-control" type="text" id="description" placeholder={note.desc} aria-label="default input example"></input>
            <label for="date" className="text-start mt-3">Date</label>
            <input className="form-control" type="date" id="date" placeholder={note.date} aria-label="default input example"></input>
            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onSubmit={updateItem}>Update</button>
            </div>
          </div>
        </div>
      </form>

    </li>
  )
}

export default ToDoItem;