import useCollapse from 'react-collapsed';

export default function Collapsible(books, language) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? '<i class="bi bi-arrow-down"></i>' : '<i class="bi bi-arrow-up"></i>'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br/><br/>
                    Click again to hide...
                </div>
            </div>
        </div>
    );
}