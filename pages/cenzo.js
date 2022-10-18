import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Book from '@components/Book'
import Search from '@components/Search'
import Profile from '@components/Profile'

export default function Cenzo() {
    return (
        <div className="container">
            <Head>
                <title>The Books I Read!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="The Books I Read" />
            <Profile reader={{name:'Vincenzo Salgacello', totalBooksRead: 100, totalUniqueBooksRead: 100, totalEnglishBooksRead: 100, totalSpanishBooksRead: 100}} />
            <Search />
            <h1 className={"top-books-read"}>Top Books Read</h1>
            <h3 className={"top-books-read-language"}>English</h3>
            <div className={"align-items-start"}>
                <Book book={{title:'Advencture Of Biscuit', image:'images/books/el-camioncito-azul.jpg', timesRead: 11}} />
                <Book book={{title:'B Is For Brooklyn', image:'images/books/b-is-for-brooklyn.jpg', timesRead: 10}} />
                <Book book={{title:'Tractor', image:'images/books/tractor.jpg', timesRead: 10}} />
            </div>
            <h3 className={"top-books-read-language"}>Spanish</h3>
            <div className={"align-items-start"}>
                <Book book={{title:'Camioncito Azul', image:'images/books/el-camioncito-azul.jpg', timesRead: 11}} />
                <Book book={{title:'Oso Polar, Que Es Ese Ruido?', image:'images/books/oso-polar-que-es-ese-ruido.jpg', timesRead: 10}} />
                <Book book={{title:'Buenas Noches Gorila', image:'images/books/buenas-noches-gorila.jpg', timesRead: 11}} />
            </div>

            <Footer />
        </div>
    )
}
