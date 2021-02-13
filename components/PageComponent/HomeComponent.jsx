import React, { useState, useEffect } from 'react'
// import styles from '../styles/HomeComponent.module.css'
import BlogList from '../BlogList'
import { useFetch } from '../../utils/useFetch.js'

export default function HomeComponent() {
  const { data: blogs, isPending, error, setData } = useFetch('http://localhost:8000/blogs')
   
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>loading...</div> }
      {/* { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} handleEdit={handleEdit} /> } */}
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
    </div>
  )
}


