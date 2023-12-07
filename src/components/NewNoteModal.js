import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function NewNoteModal({ allNotes, setAllNotes, noteData, setNoteData }) {  

  useEffect(() => {
    console.log(noteData, setNoteData);
  }, [noteData]);

  function addNote(e) {
    e.preventDefault();

    const noteItem = {
      id: noteData.id,
      date: noteData.date,
      title: noteData.title,
      desc: noteData.description,
    }

    setAllNotes([...allNotes].concat(noteItem).reverse())
    setNoteData({
      id: noteData.id += 1,
      date: "",
      title: "",
      desc: ""
    })
    e.target.reset();
  }


  return (
    <section>
      <button type="button" className="btn btn-secondary w-50" data-bs-toggle="modal" data-bs-target="#NewNote">
        Create new To-do Note
      </button>

      <form className="modal fade" id="NewNote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onSubmit={addNote}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content px-3 py-2">
            <label for="title" className="text-start">Title</label>
            <input className="form-control" type="text" id="title" placeholder="Title" aria-label="default input example" required onChange={(e) => setNoteData({...noteData, title: e.target.value})}></input>
            <label for="description" className="text-start mt-3">Description</label>
            <input className="form-control" type="text" id="description" placeholder="Description" aria-label="default input example" required onChange={(e) => setNoteData({...noteData, description: e.target.value})}></input>
            <label for="date" className="text-start mt-3">Date</label>
            <input className="form-control" type="date" id="date" placeholder="" aria-label="default input example" required onChange={(e) => setNoteData({...noteData, date: e.target.value})}></input>
            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              { noteData.title && noteData.description && noteData.date ? <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Create</button> : null }
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default NewNoteModal;