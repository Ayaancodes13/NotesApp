import { Switch } from "../ui/switch"
import {useTheme} from '../../hooks/themehook'
import { Button } from "../ui/button"
import { useSelector, UseSelector } from "react-redux"
import Logo from "../../assets/noteslogonbg.png"
import {useNavigate} from 'react-router-dom'
import {motion} from 'motion/react'
import { Menu } from "lucide-react"
import { RootState } from "../../store/store"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet"
type navItem = {
    title:string,
    isActive:boolean,
    slug:string
}

const Header = () => {
    const authStatus = useSelector((state:RootState) => state.auth.isLoggedIn)
    const MotionButton = motion(Button)
    const navigate = useNavigate()
    const {theme,toggleTheme} = useTheme()
    const navItems:navItem[]=[
        {title:"Home",isActive:true,slug:"/"},
        {title:"About us",isActive:true, slug:"/about-us"},
        {title:"Github",isActive:true ,slug:'https://www.github.com'},
        {title:"Sign in", isActive:true,slug:"/auth"},
        {title:"Sign up", isActive:true,slug:"/auth/signup"},
        {title:"LogOut", isActive:true,slug:"/"}
    ]
  return (
<>
    <div className="hidden md:flex items-center justify-around h-[20%] w-[100%]">
        <div className="h-[70px] flex items-center justify-center">
            <img className="h-[90%]  " src={Logo} alt="Logo" />
        </div>
        <div className="flex items-center justify-center gap-4 ">
            {
                navItems.map(
                    (item)=>
                        
                        item.isActive?(<MotionButton whileTap={{scale:0.8}} variant="link" className="cursor-pointer" key={item.title} onClick={(()=>{
                            if(item.slug.startsWith("https")){window.open(item.slug,"_blank")}
                            else{navigate(item.slug)}
                        })}>{item.title}</MotionButton>):null
                        
                    )
                }
            
        </div>
        
        <div className="flex items-center justify-center ">
            <Switch checked ={theme === "dark"} onClick={toggleTheme} className="border-black"></Switch>
        </div>
    </div>
    {/*Mobile Navbar */}
    <div className="  flex  md:hidden justify-between items-center w-full  h-[20vh]">
        <div className="h-[70px] flex items-center justify-center  ">
            <img className="h-[90%]" src={Logo} alt="Logo" />
        </div>
        <div className="">
            <Sheet>
  <SheetTrigger className="mr-4" asChild>
    <Button variant="ghost"><Menu className="w-7 h-7" /></Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
    <div className="flex flex-col">

    <div className="flex flex-col items-start justify-center gap-4">
        {navItems.map(
            (item)=> item.isActive?(<MotionButton whileTap={{scale:0.8}} variant="link" key={item.title} onClick={()=>{
                if(item.slug.startsWith('https')){window.open(item.slug,"_blank")}
                else{
                    navigate(item.slug)
                }
            }} > {item.title} </MotionButton>):null
        )}
    </div>
    <div className="flex items-center mt-20 ml-2 justify-start">
         <Switch checked ={theme === "dark"} onClick={toggleTheme} className="border-black"></Switch>

    </div>
        </div>
  </SheetContent>
</Sheet>
        </div>
    </div>
                </>
  )
}

export default Header