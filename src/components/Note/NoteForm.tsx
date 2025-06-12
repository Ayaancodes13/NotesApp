import { motion } from "motion/react"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { useState } from "react"
import { addNote } from "../../features/NotesSlice"
import { createNote } from "../../appwrite/noteService"
import { useDispatch } from "react-redux"
import { AnimatePresence } from "motion/react"
interface Props{
    isOpen:boolean
    setIsOpen:(value:boolean)=>void
}

const NoteForm:React.FC<Props> = ({isOpen,setIsOpen}) => {
    const dispatch = useDispatch()
    const [inputMsg,setInputmsg] = useState("")
    const [textMsg,setTextMsg] = useState("")
    const MotionButton = motion(Button)
    
    const submitHandler= async (e:React.FormEvent)=>{
        e.preventDefault()
        if(!inputMsg.trim() || !textMsg.trim()){
            return
        }
        try{
            const createdNote = await createNote({
                title:inputMsg,
                content:textMsg,
                positionX:0,
                positionY:0,
                $createdAt:Date.now()
            })
            const noteForRedux = {
            $id: createdNote.$id,
            title: createdNote.title,
             content: createdNote.content,
             positionX: createdNote.positionX,
            positionY: createdNote.positionY,
            $createdAt:createdNote.$createdAtcr
};
            dispatch(addNote(noteForRedux))
            setInputmsg("")
            setTextMsg("")
            setIsOpen(false)
        }catch(error){
            console.log("error performin task",error)
        }
    }
  return (
    <AnimatePresence>
{ isOpen?(
<motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}}  className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex  flex-col items-center justify-center ">
        <form onSubmit={submitHandler}>
        <Input placeholder="Enter title here"  value={inputMsg}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setInputmsg(e.target.value)}}/>
        <Textarea placeholder="Enter the Content" value={textMsg}  onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{setTextMsg(e.target.value)}}/>
        <MotionButton type="submit" onClick={()=>{if(!inputMsg.trim() || !textMsg.trim()){window.alert("fill the details first"); return}}}  variant="outline" whileTap={{scale:0.9}}>Create Note</MotionButton>
        <Button onClick={()=>{setIsOpen(false)}}>X</Button>
        </form>
    </motion.div>):null
}
    </AnimatePresence>
  )
}

export default NoteForm