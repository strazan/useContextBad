import style from './style/login.module.scss'

import { useContext } from 'react'

import Router from 'next/router'
import UserContext from '../components/userContext'

const Login = () => {
  const { user, setUser } = useContext(UserContext)

  const makeLoginRequest = () => {
    setUser({
      user: { email: 'mail@mail.com', password: 'pass' },
      orgs: { Ikea: true, Volvo: true },
    })

    Router.router.push({ pathname: '/dashboard' })
  }

  return (
    <div className={style.root}>
      <div className={style.loginWrapper}>
        <div className={style.nav}>
          <button
            onClick={() => {
              makeLoginRequest()
            }}
            className={style.login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
