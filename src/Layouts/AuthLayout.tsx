import { Navigate, Outlet } from "react-router-dom"
import type {RootState} from "../store/store"
import { useSelector } from "react-redux"
const AuthLayout = () => {
  const authStatus = useSelector((state:RootState)=>state.auth.isLoggedIn)
  if(authStatus){
    return <Navigate to= '/' />
  }
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">

        <Outlet />
    </div>
  )
}

export default AuthLayout