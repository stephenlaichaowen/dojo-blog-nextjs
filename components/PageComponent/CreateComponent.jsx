import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/CreateComponent.module.css'

export default function CreateComponent() {
  const [title, setTitle] = useState(null)
  const [body, setBody] = useState('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, et! Inventore, libero maxime incidunt itaque assumenda repellat excepturi adipisci quae ex doloremque dolorem consequuntur eius iusto molestias perspiciatis optio tempore ab architecto officiis, provident minus quod soluta suscipit? Quos, est cupiditate. Et vel, recusandae deserunt accusantium amet perferendis repellendus labore consequuntur quo enim animi officiis omnis temporibus molestias, eligendi iusto officia aliquam possimus alias similique dolore corporis voluptates nemo consectetur. Nulla ipsum dolore eveniet officia deserunt mollitia odit iure natus!')
  const [author, setAuthor] = useState('mario')
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()

    const blog = { title, body, author }
    console.log(blog)

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    })
    .then(() => { 
      console.log('new blog added')
      setIsPending(false)
      setTimeout(() => {
        router.push('/')
      }, 1000)
    })
  }

  return (
    <div className={styles.create}>          
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          rows="10"
          onChange={e => setBody(e.target.value)}
        >
        </textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding blog...</button> }

      </form>
    </div>
  )
}
