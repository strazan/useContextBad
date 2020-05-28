import '../base/__normalize.scss'
import UserContext from '../components/userContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
