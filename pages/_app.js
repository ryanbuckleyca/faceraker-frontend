import { useEffect } from 'react'
import DisplayContext from 'components/DisplayContext'
import 'styles/globals.css'

function Louwer({ Component, pageProps }) {   
  useEffect(() => { 
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  const handleResize = () => {
    const { innerWidth: width, innerHeight: height } = window
    return ({ width, height })
  }
   
  return (
  <DisplayContext.Provider value={handleResize}>
    <Component {...pageProps} />
  </DisplayContext.Provider>
  )
}

export default Louwer
