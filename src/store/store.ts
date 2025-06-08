import { configureStore } from "@reduxjs/toolkit";
import notesreducer from '../features/NotesSlice'

const store = configureStore({
    reducer:{
        notes:notesreducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store