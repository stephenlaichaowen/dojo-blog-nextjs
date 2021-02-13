import React from 'react'
import Head from 'next/head'
import CreateComponent from '../components/PageComponent/CreateComponent'

export default function create() {
  return (
    <div>
      <Head>
        <title>Create Page</title>
      </Head>      
      <CreateComponent />
    </div>
  )
}
