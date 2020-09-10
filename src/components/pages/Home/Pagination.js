import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { paginateBridges } from '../../../state/actions';
export default function Pagination() {
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);
  let dispatch = useDispatch();
  const nextPage = () => {
    setPage(page + 1);

    console.log('page:', page);
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setDisabled(disabled);
    } else {
      setDisabled(true);
    }

    console.log('page:', page);
  };

  const jumpPage = e => {
    setPage({
      page: e.target.value,
    });
    console.log('Jpage:', page);
  };

  useEffect(() => {
    dispatch(paginateBridges(page, limit));
  }, [dispatch, page, limit]);

  return (
    <div className="pagination-wrapper">
      <button className="paginate-btn" onClick={prevPage}>
        Previous Page
      </button>
      <input
        type="number"
        className="pagination-counter"
        placeholder={`Current page: ${page}`}
        onChange={jumpPage}
      ></input>
      <button className="paginate-btn" onClick={nextPage}>
        {' '}
        Next Page
      </button>
    </div>
    // <div>
    //   <Pagination simple />
    // </div>
  );
}
