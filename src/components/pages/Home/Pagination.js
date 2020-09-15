import React from 'react';

export default function Pagination(props) {
  let { page, limit, giveLimit, nextPage, prevPage } = props;

  return (
    <div className="pagination-wrapper">
      <button className="paginate-btn" onClick={prevPage}>
        Previous Page
      </button>
      <input
        type="number"
        className="pagination-counter"
        placeholder={`Displaying: ${limit} items`}
        onChange={giveLimit}
      ></input>
      <button className="paginate-btn" onClick={nextPage}>
        {' '}
        Next Page
      </button>
    </div>
  );
}
