import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { paginateBridges } from '../../../state/actions';

export default function Pagination(props) {
  let { page, setPage, limit, nextPage, prevPage } = props;
  // const [limit] = useState(20);
  // const [page, setPage] = useState(1);
  // const [disabled, setDisabled] = useState(false);

  // const nextPage = () => {
  //   setPage(page + 1);

  //   console.log('page:', page);
  // };
  // const prevPage = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //     setDisabled(disabled);
  //   } else {
  //     setDisabled(true);
  //   }

  //   console.log('page:', page);
  // };

  // //work in progress
  // const jumpPage = e => {
  //   setPage({
  //     page: e.target.value,
  //   });
  // };

  // useEffect(() => {
  //   dispatch(paginateBridges(page, limit));
  // }, [paginateBridges, dispatch, page, limit]);

  return (
    <div className="pagination-wrapper">
      <button className="paginate-btn" onClick={prevPage}>
        Previous Page
      </button>
      <input
        type="number"
        className="pagination-counter"
        placeholder={`Current page: ${page}`}
        // onChange={jumpPage}
      ></input>
      <button
        className="paginate-btn"
        onClick={() => {
          nextPage();
        }}
      >
        {' '}
        Next Page
      </button>
      {/* <div>
        <Pagination simple />
      </div> */}
    </div>
  );
}
