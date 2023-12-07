import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNoteModal from './components/NewNoteModal';
import ToDoItem from './components/ToDoItem';
import { useEffect, useState } from 'react';

function App() {

  const [allNotes, setAllNotes] = useState([]);
  const [noteData, setNoteData] = useState({
    id: 0,
    title: "",
    description: "",
    date: ""
  })

  function updateNote (id) {
    const noteToUpdate = allNotes.filter(note => note.id === id);
  }

  function deleteNote (id) {
    const notesToKeep = allNotes.filter(note => note.id !== id);
    setAllNotes(notesToKeep);
  }

  function retrieveNotes () {
    let storedNotes = JSON.parse(localStorage.getItem("notes"));

    if (storedNotes) {
      setAllNotes(storedNotes);
    }
  }

  useEffect(() => {
    retrieveNotes();
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }, [allNotes]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="container text-center">
        <NewNoteModal setAllNotes={setAllNotes} allNotes={allNotes} noteData={noteData} setNoteData={setNoteData}/>
        <ul className="list-group mt-5 align-items-center">
          {
            allNotes.map(note => (
              <ToDoItem key={note.id} deleteNote={() => {deleteNote(note.id)}} note={note}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
