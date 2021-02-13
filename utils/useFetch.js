import { useState, useEffect } from 'react'

export const useFetch = url => {
  const [data, setData] = useState(null)
  const [name, setName] = useState('mario')
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          console.log(res)
          if (!res.ok) {
            throw Error('could not fetch the data for that resource')
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        // catches any kind of network errors
        .catch(err => {
          setIsPending(false)
          setError(err.message)
        })
    }, 500)

    return () => { 
      abortCont.abort()
      console.log('abort fetching')
    }
  }, [url])

  return {
    data,
    setData,
    isPending, 
    error
  }
}