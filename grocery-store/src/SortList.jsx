import React from 'react';

const SortList = ({
    sortBy,
    setSortBy,
}) => {

    const getSelectedValue = (e) => {
        switch (e.target.value) {
            case 'name-asc': {
                setSortBy({ type: 'name-asc', name: 'itemName' })
            }
            break;
            case 'name-desc': {
                setSortBy({ type: 'name-desc', name: 'itemName' })
            }
            break;
            case 'high-price': {
                setSortBy({ type: 'high-price', name: 'price' })
            }
            break;
            case 'low-price': {
                setSortBy({ type: 'low-price', name: 'price' })
            }
            break;
            case 'all': {
                setSortBy({ type: 'all' })
            }
            break;
            default: {
                setSortBy({ type: 'all' })

            }
            break;
        }
    }

    return (
        <div className="sort-area">
            <label className="sort-title"> Sort By</label>
            <select className="sort" value={sortBy.type} defaultValue="all" onChange={(e) => getSelectedValue(e)} >
                <option value="name-asc">Sort By Name Asc</option>
                <option value="name-desc">Sort By Name Desc</option>
                <option value="high-price">Sort By high Price</option>
                <option value="low-price">Sort By Low Price</option>
                <option value="all">All</option>
            </select>
        </div>

    )
}

export default SortList;
