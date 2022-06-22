import { createContext, ReactNode, useState } from "react";

type ProviderProps = {
    children:ReactNode
}

type Theme = {
    isDark:boolean
    setIsDark:React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext({} as Theme)

export default function ThemeProvider({children}:ProviderProps){
    const [isDark,setIsDark] = useState<boolean>(true)


   return(
       <ThemeContext.Provider value={{isDark,setIsDark}}>
           {children}
       </ThemeContext.Provider>
   )
}