import { Button } from "../components/ui/button"
import { motion } from "motion/react"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { login } from "../features/AuthSlice"
import { signup as appwriteSignup, getCurrentUser } from "../appwrite/authService"
import {useForm} from 'react-hook-form'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { useNavigate } from "react-router-dom"
interface signupData {
  name:string,
  email:string,
  password:string,
}
const Signup = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<signupData>()
  const dispatch = useDispatch()
  const [errorMsg,setErrorMsg] = useState("")
  const onSignup = async (data:signupData)=>{
    try{
      await appwriteSignup(data.email,data.password,data.name)
      setErrorMsg("")
      const user = await  getCurrentUser()
      dispatch(
        login(user)
      )
      navigate("/")
    }catch(error){
      console.log(error)
      setErrorMsg("Error performing the task")
    }
  }

    const MotionButton = motion(Button)
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center h-full w-full">
      <form onSubmit={handleSubmit(onSignup)}>
        <Card className = "  h-[400px] w-[370px] flex items-center justify-center flex-col">
  <CardHeader className="flex items-center justify-center  ">
    <CardTitle><h1 className="text-2xl ">Signup</h1></CardTitle>
  </CardHeader>
  <CardContent className="gap-7 flex flex-col">
    <Input {...register("name",{required:"Name is required"})} placeholder="Full Name" type="text"></Input>
    {errors.name && <p className="text-sm text-re">{errors.name.message}</p>}
    <Input {...register("email",{required:"Email is required"})} placeholder="Email" className=" w-70 "></Input>
    {errors.email && <p className="text-sm text-re">{errors.email.message}</p>}
    <Input {...register("password",{required:"Password is required"})} placeholder="Password" type="password" className=""></Input>
    {errors.password && <p className="text-sm text-re">{errors.password.message}</p>}
  </CardContent>
  <CardFooter className="flex flex-col gap-3">
  <MotionButton type="submit" whileTap={{scale: 1.1}}>Signup</MotionButton>
  <div className="flex gap-1">
  <p className="text-sm" >Already have an Account?</p> <p  onClick = {()=>{navigate('/auth/')}}className="text-sm underline cursor-pointer">Login</p>
  <p className="text-sm text-red-500">{errorMsg}</p>
  </div>
  </CardFooter>
</Card>     
</form> 
    </div>
  )
}

export default Signup