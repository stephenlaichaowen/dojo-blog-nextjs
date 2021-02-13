import React, { useState } from 'react'
import styles from '../styles/BlogList.module.css'
import Link from 'next/link'

export default function BlogList({ blogs, title, handleDelete, handleEdit }) {

  return (
    <div className="blogList">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className={styles.blogPreview} key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>
            <a>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
