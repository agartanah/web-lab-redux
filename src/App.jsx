import FormTask from './components/FormTask'
import "../src/styles/main.css"
import ListTask from './components/TasksList'
import { useEffect } from 'react'
import { readLocalStorage } from './data/localStorage';
import DeleteModal from './components/DeleteModal';
import EditModal from './components/EditModal';
import ShareModal from './components/ShareModal';
import Backdrop from './components/Backdrop';
import { setListTasks } from './redux/tasksSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageElements = readLocalStorage();

    if (localStorageElements) {
      dispatch(setListTasks(localStorageElements));
    }
  }, []);

  return (
    <>
      <div className='fake-body'>
        <DeleteModal />
        <EditModal />
        <ShareModal />
        <Backdrop />

        <FormTask />

        <ListTask />
      </div>
    </>
  )
}

export default App
