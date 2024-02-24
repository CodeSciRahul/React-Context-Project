import React from 'react'
import { createContext, useContext } from 'react'

export const themeMode = createContext(
    {
        theme: 'light',
        lighttheme: () =>{},
        darktheme: ()=>{},
    }
);
export const ThemeProvider = themeMode.Provider;
export default function usetheme(){
    return useContext(themeMode);
}

