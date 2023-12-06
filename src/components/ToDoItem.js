import './ToDoItem.css'
import { FaTrash } from "react-icons/fa";

function ToDoItem() {

  return (
    <li className="col justify-content-between text-start list-unstyled list-group-item w-50 d-flex" data-bs-toggle="modal" data-bs-target="#EditNote">
        <div>
          <h5>
            Title
          </h5>
          <p className="my-0">
            Description
          </p>
        </div>
        <div className="d-flex align-items-center">
          <FaTrash size={30} />
        </div>

        <div class="modal fade" id="EditNote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Edit modal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
    </li>
  )
}

export default ToDoItem;