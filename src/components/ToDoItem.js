import './ToDoItem.css'
import { FaTrash } from "react-icons/fa";

function ToDoItem() {
  return (
    <li className="col justify-content-between text-start list-unstyled list-group-item w-50 d-flex" onClick="">
      <div>
        <h5>
          Title
        </h5>
        <p className="my-0">
          Description
        </p>
      </div>
      <div className="d-flex align-items-center">
        <FaTrash size={30}/>
      </div>
    </li>
  )
}

export default ToDoItem;