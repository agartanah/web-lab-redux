import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openTask: '',
    currTask: null, // { id: '', title: '', description: '' }
    currOperation: '',
    listTasks: [],
    index: 0
};

const taskManagerSlice = createSlice({
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
        },
        setIndex(state, action) {
            state.index = action.payload;
        },
        addTask(state, action) {
            state.listTasks.push(action.payload);
        },
        removeTask(state, action) {
            state.listTasks = state.listTasks.filter(task => task.id !== action.payload);
        }
    }
});

export const {
    setOpenTask,
    setCurrTask,
    setCurrOperation,
    setListTasks,
    setIndex,
    addTask,
    removeTask
} = taskManagerSlice.actions;

export default taskManagerSlice.reducer;