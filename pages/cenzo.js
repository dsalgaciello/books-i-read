import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Book from '@components/Book'
import Search from '@components/Search'
import Profile from '@components/Profile'
import Collapsible from "@components/Collapse";

export default function Cenzo() {
    const englishBooks = [
        {title:'Advencture Of Biscuit', image:'images/books/adventures-of-biscuit.jpg', timesRead: 11},
        {title:'B Is For Brooklyn', image:'images/books/b-is-for-brooklyn.jpg', timesRead: 10},
        {title:'Tractor', image:'images/books/tractor.jpg', timesRead: 10}
    ];

    const spanishBooks = [
        {title:'Camioncito Azul', image:'images/books/el-camioncito-azul.jpg', timesRead: 11},
        {title:'Oso Polar, Que Es Ese Ruido?', image:'images/books/oso-polar-que-es-ese-ruido.jpg', timesRead: 10},
        {title:'Buenas Noches Gorila', image:'images/books/buenas-noches-gorila.jpg', timesRead: 11}
    ];

    const englishBookItems = englishBooks.map((book, index) => <Book key={index} book={book}/>);
    const spanishBookItems = spanishBooks.map((book, index) => <Book key={index} book={book}/>);

    return (
        <div className="container">
            <Head>
                <title>The Books I Read!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="The Books I Read" />
            <Profile reader={{name:'Vincenzo Salgaciello', image: 'cenzo.jpg', totalBooksRead: 100, totalUniqueBooksRead: 100, totalEnglishBooksRead: 100, totalSpanishBooksRead: 100}} />
            <Search />
            <h1 className={"top-books-read"}>Top Books Read</h1>
            <Collapsible content={englishBookItems} title={"English"} />
            <Collapsible content={spanishBookItems} title={"Spanish"} />
            <Footer />
        </div>
    )
}
