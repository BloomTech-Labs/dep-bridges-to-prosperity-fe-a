import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { paginateBridges } from '../../../state/actions';
export default function Pagination() {
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  let dispatch = useDispatch();
  const nextPage = () => {
    setPage(page + 1);
    console.log('page:', page);
  };
  const prevPage = () => {
    setPage(page - 1);
    console.log('page:', page);
  };

  useEffect(() => {
    dispatch(paginateBridges(page, limit));
  }, [dispatch, page, limit]);

  return (
    <div>
      <button onClick={nextPage}>Previous Page</button>
      <button onClick={prevPage}> Next Page</button>
    </div>
  );
}
