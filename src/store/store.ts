import { configureStore } from "@reduxjs/toolkit";
import notesreducer from '../features/NotesSlice'
import authreducer from '../features/AuthSlice'

const store = configureStore({
    reducer:{
        notes:notesreducer,
        auth:authreducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store