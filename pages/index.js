import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import firebase from '../firebase/initFirebaase';

firebase();

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Books I Read!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The Books I Read" />
        <ul class={"customers"}>
           <li class={"customer"}> <a href="cesco">Francesco</a></li>
           <li class={"customer"}> <a href={"cenzo"}>Vincenzo</a></li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
