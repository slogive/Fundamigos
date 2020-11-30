import Head from 'next/head';
import Footer from './components/Footer';
import Header from './components/Header';

import styles from '../styles/Index.module.css';
import Services from './components/Services';

export default function Home() {
  const { Container, Main } = styles;

  return (
    <div className={styles.container}>
      <Head>
        <title>Fundamigos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={Container}>
        <Header></Header>
        <main className={Main}>
          <div></div>
          <Services></Services>
          <Services></Services>
          <Services></Services>
          <Services></Services>
          <Services></Services>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}
