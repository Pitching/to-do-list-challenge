import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNoteModal from './components/NewNoteModal';
import ToDoItem from './components/ToDoItem';

function App() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="container text-center">
        <NewNoteModal />
        <ul className="list-group mt-5 align-items-center">
          <ToDoItem />
          <ToDoItem />
        </ul>
      </div>
    </div>
  );
}

export default App;
