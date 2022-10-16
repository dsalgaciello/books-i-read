import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Cenzo() {
    return (
        <div className="container">
            <Head>
                <title>The Books I Read!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="The Books I Read" />
                <ul>
                    <li>Camioncito Azul</li>
                    <li>B Is For Brooklyn</li>
                </ul>
            </main>

            <Footer />
        </div>
    )
}
