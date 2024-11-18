import React, { useRef, useEffect } from 'react';
import { 
    deleteTaskFromLocalStorage
} from "../data/localStorage";
import { setOpenTask, setCurrOperation, setListTasks } from "../redux/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import selector from '../redux/selectors/selector';

export default function DeleteModal() {
    const { openTask, currTask, currOperation } = useSelector((state) => selector(state));
    const dispatch = useDispatch();

    const delModal = useRef(null);
    const delModalContent = useRef(null);

    useEffect(() => {
        if (currOperation == 'del') {   
            delModal.current.showModal();
        }
    }, [currOperation])

    function onClickBackdrop(event) {
        if (event.target == delModal.current &&
            event.target != delModalContent.current) {
            delModal.current.close();
            
            dispatch(setCurrOperation(''));
        }
    }

    function onClickYes() {
        delModal.current.close();
        
        if (openTask == currTask.id) {
            dispatch(setOpenTask(''));
        }

        dispatch(setListTasks(deleteTaskFromLocalStorage(currTask.id)));
        
        dispatch(setCurrOperation(''));
    }

    function onClickNo() {
        delModal.current.close();

        dispatch(setCurrOperation(''));
    }

    return (
        <dialog class="modal-window" open="" ref={ delModal } onMouseDown={ onClickBackdrop }>
            <div class="modal-content-container" ref={ delModalContent }>
                <div class="modal-decoration">
                </div>
                <div class="modal-text-container">
                    <p class="modal-text">Delete this task?</p>
                </div>
                <div class="modal-buttons-container">
                    <button class="text-buttons" onClick={ onClickYes }>Да</button>
                    <button class="text-buttons re-bg" onClick={ onClickNo }>Нет</button>
                </div>
            </div>
        </dialog>
    );
}
