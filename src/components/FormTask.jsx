import "../styles/main.css"
import { 
    setTaskToLocalStorage
} from "../data/localStorage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListTasks } from '../redux/tasksSlice';
import selector from "../redux/selectors/selector";

export default function FormTask() {
    const dispatch = useDispatch();
    const listTasks = useSelector((state) => selector(state));

    const [ titleValue, setTitleValue ] = useState('');
    const [ descriptionValue, setDescriptionValue ] = useState('');
    const [ isError, setIsError ] = useState(false);

    const addClick = () => {
        const title = titleValue;
        let description = descriptionValue;

        if (title == '') {
            setIsError(true);

            return;
        } else {
            setIsError(false);
        }

        if (description == '') {
            description = 'Нет описания';
        }

        const newIndex = listTasks.length + 1;

        setTaskToLocalStorage(newIndex, title, description);

        dispatch(setListTasks([
            {
                id: newIndex,
                title: title,
                description: description
            },
            ...listTasks
        ]));

        setTitleValue('');
        setDescriptionValue('');
        setIsError(false);
    }

    return (
        <div className="form-task-container">
            <div className="input-container">
                <input type="text" placeholder="Title..." value={ titleValue }
                    className={ isError ? "input-task error-value" : "input-task" }
                    onChange={ (event) => {
                        setTitleValue(event.target.value);
                    } }
                />
                <input type="text" className="input-task" placeholder="About..." value={ descriptionValue }
                    onChange={ (event) => {
                        setDescriptionValue(event.target.value);
                    } }
                />
            </div>
            <div className="add-task-button-container">
                <button type="submit" className="add-button" onClick={ addClick }/>
            </div>
        </div>
    );
}