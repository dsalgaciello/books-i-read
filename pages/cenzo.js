import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Book from '@components/Book'

export default function Cenzo() {
    return (
        <div className="container">
            <Head>
                <title>The Books I Read!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="The Books I Read" />
                <div className={"row"}>
                    <div className={"col-5 col-sm-5 profile"}>
                        <div className={"profile-image"}>
                            <img src={"cenzo.jpg"}/>
                        </div>
                    </div>
                    <div className={"col-7 col-sm-7"}>
                        <strong>Vincenzo Salgaciello</strong> <br/>
                        September 27, 2019
                    </div>
                </div>
                <h1>Top Books Read</h1>
                <h3>Inglish</h3>
                <Book book={{title:'Advencture Of Biscuit', image:'images/books/el-camioncito-azul.jpg', timesRead: 11}} />
                <Book book={{title:'B Is For Brooklyn', image:'images/books/b-is-for-brooklyn.jpg', timesRead: 10}} />
                <Book book={{title:'Tractor', image:'images/books/tractor.jpg', timesRead: 10}} />

                <h3>Spanish</h3>
                <Book book={{title:'Camioncito Azul', image:'images/books/el-camioncito-azul.jpg', timesRead: 11}} />
                <Book book={{title:'Oso Polar, Que Es Ese Ruido?', image:'images/books/oso-polar-que-es-ese-ruido.jpg', timesRead: 10}} />
                <Book book={{title:'Buenas Noches Gorila', image:'images/books/buenas-noches-gorila.jpg', timesRead: 11}} />
            </main>

            <Footer />
        </div>
    )
}
