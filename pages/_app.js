import { useEffect, useState } from 'react'
import DisplayContext from 'components/DisplayContext'
import 'styles/globals.css'

function Louwer({ Component, pageProps }) { 

  const getWindow = () => {
    const [dimensions, setDimensions] = useState({})
    const handleResize = () => {
      const { innerWidth: width, innerHeight: height } = window
      setDimensions ({ width, height })
    }
    useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])
    return dimensions
  };
  
   
  return (
  <DisplayContext.Provider value={getWindow()}>
    <Component {...pageProps} />
  </DisplayContext.Provider>
  )
}

export default Louwer
