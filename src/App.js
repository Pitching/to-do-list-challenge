import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNoteModal from './components/NewNoteModal';
import ToDoItem from './components/ToDoItem';
import { useEffect, useState } from 'react';

function App() {

  const [allNotes, setAllNotes] = useState([]);

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
        <NewNoteModal setAllNotes={setAllNotes} allNotes={allNotes}/>
        <ul className="list-group mt-5 align-items-center">
          {
            allNotes.map(note => (
              <ToDoItem note={note}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
