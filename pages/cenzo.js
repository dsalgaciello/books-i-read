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
                <div className={"row"}>
                    <Book book={{title:'Camioncito Azul', image:'images/books/el-camioncito-azul.jpg'}} />
                    <Book book={{title:'B Is For Brooklyn'}} />
                </div>
            </main>

            <Footer />
        </div>
    )
}
