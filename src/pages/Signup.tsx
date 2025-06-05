import { Button } from "../components/ui/button"
import { motion } from "motion/react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { useNavigate } from "react-router-dom"
const Signup = () => {
    const MotionButton = motion(Button)
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center h-full w-full">
        <Card className = "  h-[400px] w-[370px] flex items-center justify-center flex-col">
  <CardHeader className="flex items-center justify-center  ">
    <CardTitle><h1 className="text-2xl ">Signup</h1></CardTitle>
  </CardHeader>
  <CardContent className="gap-7 flex flex-col">
    <Input placeholder="Full Name" type="text"></Input>
    <Input placeholder="Email" className=" w-70 "></Input>
    <Input placeholder="Password" type="password" className=""></Input>
  </CardContent>
  <CardFooter className="flex flex-col gap-3">
  <MotionButton whileTap={{scale: 1.1}}>Signup</MotionButton>
  <div className="flex gap-1">
  <p className="text-sm" >Already have an Account?</p> <p  onClick = {()=>{navigate('/auth/')}}className="text-sm underline cursor-pointer">Login</p>
  </div>
  </CardFooter>
</Card>      
    </div>
  )
}

export default Signup