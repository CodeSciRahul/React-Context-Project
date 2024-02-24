import { useState,useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/theme'
import Card from './Components/Card'
import ThemeBtn from './Components/Thembtn'
function App() {
  const [theme, settheme] = useState('light')
  const lighttheme = () =>{
    settheme("light")
  }
  const darktheme = ()=>{
    settheme("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme])
  
  return (
    
    <ThemeProvider value = {{theme, lighttheme,darktheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
    
  )
}

export default App
