import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { useNavigate } from "react-router-dom"
import {motion} from 'motion/react'
const Login = () => {
  const navigate = useNavigate()
  const MotionButton = motion(Button)
  return (
    <div className="flex items-center justify-center h-full w-full">
        <Card className = "  h-[400px] w-[370px] flex items-center justify-center flex-col">
  <CardHeader className="flex items-center justify-center  ">
    <CardTitle><h1 className="text-2xl ">Login</h1></CardTitle>
  </CardHeader>
  <CardContent className="gap-7 flex flex-col">
    <Input placeholder="Email" className=" w-70 "></Input>
    <Input placeholder="Password" type="password" className=""></Input>
  </CardContent>
  <CardFooter className="flex flex-col gap-3">
  <MotionButton whileTap={{scale:0.8}}>Login</MotionButton>
  <div className="flex gap-1">
  <p className="text-sm" >Don't have an Account?</p> <p  onClick = {()=>{navigate('/auth/signup')}}className="text-sm underline cursor-pointer">Sign up</p>
  </div>
  </CardFooter>
</Card>      
    </div>
  )
}

export default Login