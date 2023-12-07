import './ToDoItem.css'
import { FaTrash } from "react-icons/fa";

function ToDoItem({ title, description, date, deleteItem, updateItem}) {

  return (
    <li className="col border-top justify-content-between text-start list-unstyled list-group-item w-50 d-flex">
      <div className="w-100" data-bs-toggle="modal" data-bs-target="#EditNote">
        <h5>
          Title
        </h5>
        <p className="my-0">
          Description
        </p>
      </div>
      <div className="d-flex align-items-center" onClick={deleteItem}>
        <FaTrash size={30} />
      </div>

      <div className="modal fade" id="EditNote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-3 py-2">
            <label for="title" className="text-start">Title</label>
            <input className="form-control" type="text" id="title" placeholder={title} aria-label="default input example"></input>
            <label for="description" className="text-start mt-3">Description</label>
            <input className="form-control" type="text" id="description" placeholder={description} aria-label="default input example"></input>
            <label for="date" className="text-start mt-3">Date</label>
            <input className="form-control" type="date" id="date" placeholder={date} aria-label="default input example"></input>
            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={updateItem}>Update</button>
            </div>
          </div>
        </div>
      </div>
      
    </li>
  )
}

export default ToDoItem;