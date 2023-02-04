import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const  ThemePravider = ({children})=>{
    const [theme, setTheme] = useState("light")

    const themeLight = ()=>{
      setTheme("light")
    }
    const themedark = ()=>{
      setTheme("dark")
    }

  const state = {
    theme,
    themeLight,
    themedark,
  }


    return(
        <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    )
}