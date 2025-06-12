import {motion} from 'motion/react'

import { useRef, useState } from 'react'
import { Button } from '../components/ui/button'
import NoteForm from '../components/Note/NoteForm'
const Home = () => {
  const MotionButton = motion(Button)
    const constraints = useRef(null)
    const [isOpen,setIsOpen] = useState<boolean>(false)
  return (

    <div  className="h-[80vh] w-full">
        
        <div ref={constraints} className='min-h-[60vh]'></div>
        {
          !isOpen?(
          <MotionButton whileTap={{scale:0.9}} onClick={()=>{setIsOpen(true)}}>Create Note</MotionButton>):
          null
        }
        <NoteForm isOpen={isOpen} setIsOpen={setIsOpen}/>
        
    </div>
  )
}

export default Home