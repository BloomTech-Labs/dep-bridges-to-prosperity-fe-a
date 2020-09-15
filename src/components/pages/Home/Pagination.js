import React from 'react';

export default function Pagination(props) {
  let { limit, giveLimit, nextPage, prevPage } = props;

  return (
    <div className="pagination-wrapper">
      <button className="paginate-btn" onClick={prevPage}>
        Previous Page
      </button>
      <input
        type="number"
        className="pagination-counter"
        onChange={giveLimit}
        placeholder={`Displaying: ${limit} items`}
      ></input>
      <button className="paginate-btn" onClick={nextPage}>
        {' '}
        Next Page
      </button>
    </div>
  );
}
