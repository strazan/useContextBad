import Link from 'next/link'
import style from './org.module.scss'
import UserContext from '../../components/userContext'

import { useContext } from 'react'

const Organization = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div className={style.root}>
      <div className={style.orgWrapper}>
        <div>
          <Link href="/dashboard">
            <a>back</a>
          </Link>
          <UserContext.Consumer>
            {(value) => {
              return (
                <h4>
                  {value.user && value.user.user
                    ? value.user.user.displayName
                    : ''}
                </h4>
              )
            }}
          </UserContext.Consumer>
        </div>
      </div>
    </div>
  )
}

export default Organization
