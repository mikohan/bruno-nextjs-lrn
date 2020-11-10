import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

import { IPeople } from '~/interfaces/person';

export default function Home() {
  const people: IPeople[] = [
    { v: 'Aston Martini', name: 'vladimir' },
    { v: 'BMW X6', name: 'Olesya' },
    { v: 'Porche Cayene', name: 'Vasya' },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my stydy next js project</h1>
        <ul>
          {people.map((person: IPeople) => (
            <li key={person.name}>
              <Link href={`/${person.v}/${person.name}`}>
                {(person.name, person.v)}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="[aston]/[vladimir]" as="/astonMartini/vladimir">
          Aston page
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
