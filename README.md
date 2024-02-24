# React-Context-Project
it is the project by which i learn ContextApi. 

import React from 'react': This line imports the React library, which is necessary for writing React components.

import { createContext, useContext } from 'react': This line imports two specific functions, createContext and useContext, from the React library. These functions are used to create and use context in React.

export const themeMode = createContext(...): Here, a context called themeMode is created using the createContext function. Context provides a way to pass data through the component tree without having to pass props down manually at every level. Inside the createContext function, an initial value is provided, which includes a theme property set to 'light', and two functions: lighttheme and darktheme.

export const ThemeProvider = themeMode.Provider: This line exports a component called ThemeProvider, which is actually the Provider component of the themeMode context. The Provider component is used to pass the current value of the context to any child components that need it.

export default function usetheme() {...}: This is a custom hook called usetheme. Custom hooks are functions that let you use state and other React features without writing a class. In this case, the usetheme hook uses the useContext hook to access the value of the themeMode context.

return useContext(themeMode);: Inside the usetheme hook, useContext(themeMode) is used to access the current value of the themeMode context and return it. This allows components that use the usetheme hook to access the theme, lighttheme, and darktheme properties provided by the context.

Overall, this code sets up a context called themeMode with an initial value containing a theme ('light') and two functions to toggle between light and dark themes. It also provides a ThemeProvider component to make the context available to child components and a custom hook (usetheme) to easily access the context's value within functional components.
