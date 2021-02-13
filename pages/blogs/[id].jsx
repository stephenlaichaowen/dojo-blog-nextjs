import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogDetails.module.css'
import { useFetch } from '../../utils/useFetch.js'

export default function BlogDetails() {
  const router = useRouter()
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${router.query.id}`)

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        router.push('/')
      })
  }

  const handleEdit = () => {
    
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    })
      .then(() => {
      })
  }

  return (
    <div className={styles.blogDetails}>
      { isPending && <div>Loading...</div>}
      { error && <div>{error}</div>}
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
          <button onClick={handleEdit}>edit</button>
        </article>
      )}
    </div>
  )
}
