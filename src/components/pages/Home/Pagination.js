import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { paginateBridges } from '../../../state/actions';
export default function Pagination() {
  const [limit] = useState(20);
  const [page, setPage] = useState(1);
  let dispatch = useDispatch();
  const nextPage = () => {
    setPage(page + limit);
  };
  const prevPage = () => {
    setPage(page - limit);
  };

  useEffect(() => {
    dispatch(paginateBridges(page, limit));
  }, [dispatch, page, limit]);

  return (
    <div>
      <div onClick={nextPage}>Previous Page</div>
      <div onClick={prevPage}> Next Page</div>
    </div>
  );
}
