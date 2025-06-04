import { useContext } from "react"
import {themeContext} from '../Contexts/ThemeContext'
export const useTheme = ()=>{
    const context = useContext(themeContext)
    if (!context) throw new Error("useTheme must be used within ThemeProvider")
    return context
}