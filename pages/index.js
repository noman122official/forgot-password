import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
          <div className={styles.element1}>
            <Image src="/element1.svg" alt="Vercel Logo" width={449.76} height={439}  />
          </div>
          <div className={styles.element2}>
          <Image src="/element2.svg" alt="Vercel Logo" width={251.93} height={245.9}  />
        </div>
    </div>
          
  )
}
