import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>The Dojo Blog</h1>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/create">
          <a>New Blog</a>
        </Link>
      </div>
    </div>
  )
}
