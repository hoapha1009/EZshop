import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';

const rootReducers = {
    counter: counterReducer,
};
const store = configureStore({
    reducer: rootReducers,
});

export default store;
