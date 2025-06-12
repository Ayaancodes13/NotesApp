import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

type Note = {
    $id:string,
    title:string,
    content:string,
    $createdAt:number
    positionX:number,
    positionY:number,
}

type NoteState = {
    notes:Note[]
}
const initialState:NoteState = {
    notes:[]
}
const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers:{
        setNotes: (state,action:PayloadAction<Note[]>)=>{
            state.notes = action.payload
        },
        addNote:(state,action:PayloadAction<Note>)=>{
             state.notes.push(action.payload)
        },
        editNote:(state,action:PayloadAction<Note>)=>{
            const index = state.notes.findIndex((n)=>n.$id === action.payload.$id)
            if(index !== -1)
                state.notes[index] = action.payload
        },
        deleteNote:(state,action:PayloadAction<string>)=>{
            state.notes = state.notes.filter(
                (note)=>
                    note.$id !== action.payload
            )
        }
    }

})

export const {setNotes,addNote,editNote,deleteNote} = notesSlice.actions 
export default notesSlice.reducer