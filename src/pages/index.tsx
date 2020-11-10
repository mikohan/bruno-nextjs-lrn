import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my stydy next js project</h1>
        <Link href="/list">
          <h4>Go to vehicle list</h4>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
