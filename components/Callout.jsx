// components/Callout.jsx
import styles from '../styles/Callout.module.css'

export default function Callout({ children, type = 'info', emoji }) {
  return (
    <div className={`${styles.callout} ${styles[type]}`}>
      {emoji && <span className={styles.emoji}>{emoji}</span>}
      {children}
    </div>
  )
}