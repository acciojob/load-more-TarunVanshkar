import React, { useState } from "react";

const LoadMore = ({items}) => {

    const [displayedItems, setDisplayedItems] = useState([]);
    const [page, setPage] = useState(0);

    // console.log(typeof items)
    const loadMore = () => {
        const nextPage = page + 1;
        const startIndex = (nextPage - 1);
        const endIndex = startIndex + 10;
        console.log(startIndex, endIndex)

        setDisplayedItems([...displayedItems, ...items.slice(startIndex, endIndex)]);
        setPage(endIndex);
    };

    return (
        <div>
            <ul>
                {displayedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {displayedItems.length < items.length && (
                <button onClick={loadMore}>Load More</button>
            )}
        </div>
    );
}

export default LoadMore;