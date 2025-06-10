import {motion} from 'motion/react'
import { Textarea } from "../components/ui/textarea"
import { useRef } from 'react'
import { Input } from '../components/ui/input'
const Home = () => {
    const constraints = useRef(null)
  return (

    <div ref={constraints} className="h-[80vh] w-full">
        <motion.div  whileDrag={{scale:0.9}} drag dragConstraints={constraints} dragElastic={0} dragMomentum={false} className=' h-50 w-80 shadow-amber-200 shadow-md bg-amber-200 dark:bg-transparent '>
            <Input placeholder='Title ' className='outline-none rounded-none border-none'></Input>
            <Textarea className='outline-none rounded-none border-none'placeholder='Enter Text' />
        </motion.div>
        <motion.div drag dragConstraints={constraints} dragElastic={0} dragMomentum={false} className=' h-50 w-80 shadow-amber-200 shadow-md bg-amber-200 dark:bg-transparent '>
            <Input placeholder='Title ' className='outline-none rounded-none border-none'></Input>
            <Textarea className='outline-none rounded-none border-none'placeholder='Enter Text' />
        </motion.div>
        <motion.div drag dragConstraints={constraints} dragElastic={0} dragMomentum={false} className=' h-50 w-80 shadow-amber-200 shadow-md bg-amber-200 dark:bg-transparent '>
            <Input placeholder='Title ' className='outline-none rounded-none border-none'></Input>
            <Textarea className='outline-none rounded-none border-none'placeholder='Enter Text' />
        </motion.div>
        
    </div>
  )
}

export default Home