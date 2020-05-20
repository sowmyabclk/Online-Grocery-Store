import React from 'react';

const FilterList = ({ filterState, setFilterState }) => {

  return (
    <div className="filter-area">
      <label className="filter-title">Category</label>
      <select className="filter" value={filterState} defaultValue="all" onChange={(e) => setFilterState(e.target.value)} >
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Food Grains">Food Grains</option>
        <option value="All">All</option>
      </select>
    </div>

  )
}

export default FilterList;
