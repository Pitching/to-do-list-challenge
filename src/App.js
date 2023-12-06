import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/Modal';
import ToDoItem from './components/ToDoItem';

function App() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="container text-center">
        <Modal />
        <ul className="list-group mt-5">
          <ToDoItem />
        </ul>
      </div>
    </div>
  );
}

export default App;
