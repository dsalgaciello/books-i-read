import useCollapse from 'react-collapsed';
import Book from "@components/Book";
import {ChevronDoubleUp, ChevronDoubleDown, ChevronDoubleRight} from "react-bootstrap-icons";

export default function Collapsible(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    const bookItems = props.books.map((book, index) => <Book key={index} book={book}/>);


    return (
        <div className="collapsible">
            <div className="row header top-books-read-language" {...getToggleProps()}>
                <div className={"col-9"}>
                    <h3 >{props.language}</h3>
                </div>
                <div className={"col-3"}>
                {isExpanded ? (
                    <ChevronDoubleDown />
                ) : (
                    <ChevronDoubleRight />
                )}
                    </div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <div className={"align-items-start"}>
                        {bookItems}
                    </div>
                </div>
            </div>
        </div>
    );
}