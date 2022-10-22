import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Readers from '@components/Readers';

import firebase from '../firebase/initFirebaase';

firebase();

export default function Home() {

    const readers = [
        {
            name: 'Francesco Salgaciello',
            link: 'cesco',
            image: 'cesco.jpg',
            age: '6 years old'
        },
        {
            name: 'Vincenzo Salgaciello',
            link: 'cenzo',
            image: 'cenzo.jpg',
            age: '3 years old'
        }
    ];

  return (
    <div className="container">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Books I Read!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header title="The Books I Read" />
        <Readers readers={readers} />
      <Footer />
    </div>
  )
}
