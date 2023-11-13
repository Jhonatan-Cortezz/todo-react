import { Fragment, useEffect, useState } from "react"
import { Header, Main, Footer } from './components/semantic'

const initialStateIsDark = JSON.parse(localStorage.getItem('isDark'))

const App = () => {

  const [ isDark, setIsDark ] = useState(initialStateIsDark)

  const toggleDark = () => {
    
    setIsDark(!isDark)
    localStorage.setItem('isDark', !isDark)
  }

  useEffect(() => {
    let htmlTag = document.querySelector('html')
    if (isDark) {
      htmlTag.classList.add('dark')
    } else {
      htmlTag.classList.remove('dark')
    }
  }, [isDark])
 return (
  <Fragment>
    <Header toggleDark={toggleDark} isDark={isDark}/>
    <Main />
    <Footer />
  </Fragment>
 )
}

export default App