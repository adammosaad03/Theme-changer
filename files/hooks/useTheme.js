import {useState} from  'react'
import {useEffect} from 'react'

 export default useTheme(){
  const [theme, setTheme] = useState('light')
useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); 

  }, [theme])

function ToggleTheme(){
  setTheme(prevTheme => (prevTheme == 'light' ? 'dark' : 'light'))
}
const isDarkTheme = theme === 'dark'
return {onToggleTheme, isDarkTheme}
}
