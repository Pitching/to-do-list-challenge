import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNoteModal from './components/NewNoteModal';
import ToDoItem from './components/ToDoItem';
import { useEffect, useState } from 'react';

function App() {

  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(allNotes));
  }, [allNotes]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="container text-center">
        <NewNoteModal setAllNotes={setAllNotes} allNotes={allNotes}/>
        <ul className="list-group mt-5 align-items-center">
          <ToDoItem />
        </ul>
      </div>
    </div>
  );
}

export default App;
