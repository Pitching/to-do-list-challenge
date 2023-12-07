import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNoteModal from './components/NewNoteModal';
import ToDoItem from './components/ToDoItem';
import { useEffect, useState } from 'react';

function App() {

  const [allNotes, setAllNotes] = useState(localStorage.getItem('notes') ?  JSON.parse(localStorage.getItem('notes')) : []);
  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
    date: "",
    category: ""
  })

  function deleteNote (id) {
    const notesToKeep = allNotes.filter(note => note.id !== id);
    setAllNotes(notesToKeep);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }, [allNotes]);
  
  return (
    <div className="d-flex justify-content-center">
      <div className="container text-center  mt-5">
        <NewNoteModal setAllNotes={setAllNotes} allNotes={allNotes} noteData={noteData} setNoteData={setNoteData}/>
        <ul className="list-group mt-5 align-items-center">
          {
            allNotes.map(note => (
              <ToDoItem 
              key={note.id} 
              deleteNote={() => {deleteNote(note.id)}} 
              note={note}
              setAllNotes={setAllNotes}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
