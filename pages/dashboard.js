import style from './style/dashboard.module.scss'
import UserContext from '../components/userContext'
import { useContext, useEffect, useState } from 'react'

import Link from 'next/link'

const Dash = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div className={style.root}>
      <div className={style.dashboardWrapper}>
        <div className={style.organizations}>
          <h3 className={style.title}>Organizations</h3>
          <UserContext.Consumer>
            {(value) => {
              return value && value.user && value.user.orgs
                ? Object.keys(value.user.orgs).map((org, i) => {
                    return (
                      <div key={i}>
                        <Link href={`org/${org}`}>
                          <a className={style.organization}>
                            <h1>{org}</h1>
                          </a>
                        </Link>
                      </div>
                    )
                  })
                : 'Loading...'
            }}
          </UserContext.Consumer>
        </div>
      </div>
    </div>
  )
}

export default Dash

// {user.orgs
//     ? Object.keys(user.orgs).map((org, i) => {
//         return (
//           <div key={i}>
//             <UserContext.Consumer>
//               <Link href={`org/${org}`}>
//                 {/* <Link href={`org/${org}`}> */}
//                 <a className={style.organization}>
//                   <h1>{org}</h1>
//                 </a>
//               </Link>
//             </UserContext.Consumer>
//           </div>
//         )
//       })
//     : ''}
