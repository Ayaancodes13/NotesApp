import { databases } from "./config";
import { ID } from "appwrite";
import { APPWRITE_DATABASE_ID,APPWRITE_COLLECTION_ID } from "../config/config";

type Note = {
  $id: string;
  title: string;
  content: string;
  positionX: number;
  positionY: number;
};

export const createNote = async (noteData: Omit<Note,"$id">)=>{
    return await databases.createDocument(APPWRITE_DATABASE_ID,APPWRITE_COLLECTION_ID,ID.unique(),noteData)
}

export const getNotes = async ()=>{
    const res = await databases.listDocuments(APPWRITE_DATABASE_ID,APPWRITE_COLLECTION_ID)
    return res.documents
}

export const updateNote = async (id:string,noteData:Partial<Note>)=>{
    return await databases.updateDocument(APPWRITE_DATABASE_ID,APPWRITE_COLLECTION_ID,id,noteData)
}

export const deleteNote = async (id:string)=>{
    return await databases.deleteDocument(APPWRITE_DATABASE_ID,APPWRITE_COLLECTION_ID,id)
}
