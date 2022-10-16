import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import firebase from '../firebase/initFirebaase';

firebase();

export default function Home() {
  return (
    <div className="container">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Books I Read!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The Books I Read" />
        <ul class={"customers"}>
           <li class={"customer"}>
               <div class={"row"}>
                   <div class={"col-8"}>
                       <a href={"cesco"}><img alt={"cesco"} src={"cesco.jpg"}/></a>
                   </div>
                   <div class={"col-4"}>
                       <a href="cesco">Francesco</a><br/>
                       6 years old
                   </div>
               </div>
           </li>
           <li class={"customer"}>
               <div class={"row"}>
                   <div className={"col-8"}>
                      <a href={"cenzo"}><img alt={"cenzo"} src={"cenzo.jpg"} /></a>
                   </div>
                   <div className={"col-4"}>
                       <a href={"cenzo"}>Vincenzo</a><br/>
                       3 years old
                   </div>
               </div>
           </li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
