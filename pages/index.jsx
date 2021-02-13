import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeComponent from '../components/PageComponent/HomeComponent'

// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:8000/blogs')
//   const data = await res.json()

//   return {
//     props: {
//       blogs: data
//     }
//   }
// }

// export default function Home({ blogs }) {
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <HomeComponent />
      </div>
    </div>
  )
}
