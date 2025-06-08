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
import {useForm} from 'react-hook-form'
import { useState } from "react"
import { login } from "../features/AuthSlice"
import { useDispatch } from "react-redux"
import { getCurrentUser, login as appwriteLogin } from "../appwrite/authService"
interface LoginData{
  email:string,
  password:string
}
const Login = () => {
  const dispatch = useDispatch()
  const {register,handleSubmit,formState:{errors}} = useForm<LoginData>()
  const [errorMsg,setErrorMsg] = useState("")
  const onLogin = async (data:LoginData)=>{
    try{
      setErrorMsg("")
      await appwriteLogin(data.email,data.password)
      const user  =await  getCurrentUser()
      dispatch(
        login(user)
      )
      navigate('/')
    }catch(error){
      console.log(error)
      setErrorMsg("error performing the task")
    }
  }
    const navigate = useNavigate()
  const MotionButton = motion(Button)
  return (
    <div className="flex items-center justify-center h-full w-full">
      <form onSubmit={handleSubmit(onLogin)} >
        <Card className = "  h-[400px] w-[370px] flex items-center justify-center flex-col">
  <CardHeader className="flex items-center justify-center  ">
    <CardTitle><h1 className="text-2xl ">Login</h1></CardTitle>
  </CardHeader>
  <CardContent className="gap-7 flex flex-col">
    <Input  {...register("email",{required:"Email is required"})} placeholder="Email" className=" w-70 "></Input>
    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
    <Input {...register("password",{required:"Password is required"})} placeholder="Password" type="password" className=""></Input>
    {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
  </CardContent>
  <CardFooter className="flex flex-col gap-3">
  <MotionButton type="submit" whileTap={{scale:0.8}}>Login</MotionButton>
  <div className="flex gap-1">
  <p className="text-sm" >Don't have an Account?</p> <p  onClick = {()=>{navigate('/auth/signup')}}className="text-sm underline cursor-pointer">Sign up</p>
  <p className="text-sm text-red-500">{errorMsg}</p>
  </div>
  </CardFooter>
</Card>     
</form> 
    </div>
  )
}

export default Login