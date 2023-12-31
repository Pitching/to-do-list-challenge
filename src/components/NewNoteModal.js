import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'

function NewNoteModal({ allNotes, setAllNotes, noteData, setNoteData }) {

  function addNote(e) {
    e.preventDefault();

    const noteItem = {
      id: uuidv4(),
      date: noteData.date,
      title: noteData.title,
      description: noteData.description,
      category: noteData.category,
      status: false
    }

    setAllNotes([...allNotes].concat(noteItem).reverse())
    setNoteData({
      date: "",
      title: "",
      description: "",
      category: "",
      status: false
    })
    e.target.reset();
  }


  return (
    <section>
      <button type="button" className="btn-lg btn-secondary w-50" data-bs-toggle="modal" data-bs-target="#NewNote">
        Create New Note
      </button>

      <form className="modal fade" id="NewNote" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onSubmit={addNote}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-3 py-2">
            <label htmlFor="title" className="text-start">Title</label>
            <input className="form-control" type="text" id="title" placeholder="Title" aria-label="default input example" required onChange={(e) => setNoteData({ ...noteData, title: e.target.value })} value={noteData.title}></input>
            <label htmlFor="description" className="text-start mt-3">Description</label>
            <input className="form-control" type="text" id="description" placeholder="Description" aria-label="default input example" required onChange={(e) => setNoteData({ ...noteData, description: e.target.value })} value={noteData.description}></input>
            <label htmlFor="date" className="text-start mt-3">Date</label>
            <input className="form-control" type="date" id="date" placeholder="" aria-label="default input example" required onChange={(e) => setNoteData({ ...noteData, date: e.target.value })} value={noteData.date}></input>
            <div className="btn-group mt-4">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" value={noteData.category}>
                {noteData.category ? noteData.category : `Please select an option`}
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={(e) => setNoteData({...noteData, category: e.target.innerText})}>Work</a></li>
                <li><a className="dropdown-item" href="#" onClick={(e) => setNoteData({...noteData, category: e.target.innerText})}>Personal</a></li>
                <li><a className="dropdown-item" href="#" onClick={(e) => setNoteData({...noteData, category: e.target.innerText})}>Home</a></li>
                <li><a className="dropdown-item" href="#" onClick={(e) => setNoteData({...noteData, category: e.target.innerText})}>Family</a></li>
                <li><a className="dropdown-item" href="#" onClick={(e) => setNoteData({...noteData, category: e.target.innerText})}>Social</a></li>
                <li><a className="dropdown-item" href="#" onClick={(e) => setNoteData({...noteData, category: e.target.innerText})}>Health</a></li>
                <li><a className="dropdown-item" href="#" onClick={(e) => setNoteData({...noteData, category: e.target.innerText})}>Hobby</a></li>
              </ul>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {noteData.title && noteData.description && noteData.date && noteData.category ? <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Create</button> : null}
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default NewNoteModal;