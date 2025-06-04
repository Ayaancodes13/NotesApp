import {createContext,useState,useEffect} from 'react'
import type {ReactNode} from 'react'
type Theme = "light"|"dark"

type themeType = {
    theme:Theme,
    toggleTheme: ()=>  void
}

export const themeContext = createContext<themeType | undefined>(undefined)

export const ThemeProvider =  ({children}: {children:ReactNode})=>{
    const [theme,setTheme]= useState<Theme>(
        ()=>{
            const stored = localStorage.getItem("theme") as Theme
            return stored || "light"
        }
    )

    useEffect(
        ()=>{
            document.documentElement.classList.remove("light", "dark")
document.documentElement.classList.add(theme)
            localStorage.setItem("theme",theme)
        }
        ,[theme]
    )
    const toggleTheme=()=> setTheme((prev)=>(prev === "light"?"dark":"light"))
    return(
        <themeContext.Provider value = {{theme,toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}

