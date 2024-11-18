import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openTask: '',
    currTask: null, // { id: '', title: '', description: '' }
    currOperation: '',
    listTasks: []
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setOpenTask(state, action) {
            state.openTask = action.payload;
        },
        setCurrTask(state, action) {
            state.currTask = action.payload;
        },
        setCurrOperation(state, action) {
            state.currOperation = action.payload;
        },
        setListTasks(state, action) {
            state.listTasks = action.payload;
        }
    }
});

export const {
    setOpenTask,
    setCurrTask,
    setCurrOperation,
    setListTasks
} = tasksSlice.actions;

export default tasksSlice.reducer;