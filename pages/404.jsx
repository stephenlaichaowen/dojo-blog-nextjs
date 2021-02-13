import React from 'react'
import Link from 'next/link'
import styles from '../styles/NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link href="/">
        <a>Back to the homepage...</a>
      </Link>
    </div>
  )
}
