import 'bootstrap/dist/css/bootstrap.min.css';

function NewNoteModal() {
  return (
    <section>
      <button type="button" className="btn btn-secondary w-50" data-bs-toggle="modal" data-bs-target="#NewNote">
        Create new To-do Note
      </button>

      <div className="modal fade" id="NewNote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-3 py-2">
            <label for="title" className="text-start">Title</label>
            <input className="form-control" type="text" id="title" placeholder="Title" aria-label="default input example"></input>
            <label for="description" className="text-start mt-3">Description</label>
            <input className="form-control" type="text" id="description" placeholder="Description" aria-label="default input example"></input>
            <label for="date" className="text-start mt-3">Date</label>
            <input className="form-control" type="date" id="date" placeholder="Description" aria-label="default input example"></input>
            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewNoteModal;