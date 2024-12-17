"use client"

import { useSession, signOut } from "next-auth/react" // https://next-auth.js.org/getting-started/client#usesession
import styles from '../styles/Counters.module.css'

export default function User() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    console.error("***********Session***********")
    console.error(session)
      return (
        <div className={styles.container}> 
          <br />
          <hr className={styles.separator} />
          <br />
          <h2 className={styles.title}>I want to share with you some secrets ... </h2>
          <br />
          This is the user information:
          <ul className={styles.list}>
            <li className={styles.listItem}> 
              <img src={session.user.image} alt={session.user.name} width="32" height="32" className={styles.image} />
            </li>
            <li className={styles.listItem}><span>Email: {session.user.email}</span></li>
            <li className={styles.listItem}>Name: {session.user.name}</li>
          </ul>     
        </div>
      )
  }

  return <a href="/api/auth/signin" className={styles.button}>Sign in</a>
}
