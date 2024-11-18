import { configureStore } from '@reduxjs/toolkit';
import modalsReducer from './modalsSlice';
import tasksReducer from './tasksSlice';

const store = configureStore({
    reducer: {
        modals: modalsReducer,
        tasks: tasksReducer
    },
});

export default store;