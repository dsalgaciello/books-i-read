import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Profile from "@components/Profile";
import Search from "@components/Search";
import Collapsible from "@components/Collapse";
import Book from "@components/Book";

export default function Cesco() {
    const title = 'The Books I Read';
    const englishBooks = [
        {title:'Advencture Of Biscuit', image:'images/books/adventures-of-biscuit.jpg', timesRead: 21},
        {title:'B Is For Brooklyn', image:'images/books/b-is-for-brooklyn.jpg', timesRead: 30},
        {title:'Tractor', image:'images/books/tractor.jpg', timesRead: 15}
    ];
    const spanishBooks = [
        {title:'Camioncito Azul', image:'images/books/el-camioncito-azul.jpg', timesRead: 21},
        {title:'Oso Polar, Que Es Ese Ruido?', image:'images/books/oso-polar-que-es-ese-ruido.jpg', timesRead: 40},
        {title:'Buenas Noches Gorila', image:'images/books/buenas-noches-gorila.jpg', timesRead: 21}
    ];

    const englishBookItems = englishBooks.map((book, index) => <Book key={index} book={book}/>);
    const spanishBookItems = spanishBooks.map((book, index) => <Book key={index} book={book}/>);

    return (
        <div className="container">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title={title} />
            <Profile reader={{name:'Francesco Salgaciello', image:'cesco.jpg', totalBooksRead: 1000, totalUniqueBooksRead: 1000, totalEnglishBooksRead: 1000, totalSpanishBooksRead: 1000}} />
            <Search />
            <h1 className={"top-books-read"}>Top Books Read</h1>
            <Collapsible content={englishBookItems} title={"English"} />
            <Collapsible content={spanishBookItems} title={"Spanish"} />
            <Footer />
        </div>
    )
}
