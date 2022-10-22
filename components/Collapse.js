import useCollapse from 'react-collapsed';
import {ChevronDoubleDown, ChevronDoubleRight} from "react-bootstrap-icons";

export default function Collapsible(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className="row collapsible">
            <div className="row header" {...getToggleProps()}>
                <div className={"col-12 top-books-read-language"}>
                    <div className={"col-9"}>
                        <h3 >{props.title}</h3>
                    </div>
                    <div className={"col-3"}>
                    {isExpanded ? (
                        <ChevronDoubleDown />
                    ) : (
                        <ChevronDoubleRight />
                    )}
                    </div>
                </div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <div className={"align-items-start"}>
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    );
}