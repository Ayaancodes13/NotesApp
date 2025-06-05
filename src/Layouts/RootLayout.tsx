import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"
const RootLayout = () => {
  return (
    <div className="flex flex-wrap gap-0 min-h-screen min-w-screen">
        <Header />
        <Outlet />
    </div>
  )
}

export default RootLayout