import React, { useState, useEffect } from 'react';

import './Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setFilter } from './../../ShopContentSlice';
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import {
  nameSelector,
  totalRowSelector,
  filterSelector,
} from '../../../../app/selectors';
import {
  fetchProductById,
  setName,
  fetchPagination,
} from '../../ShopContentSlice';

const Pagination = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const totalRow = useSelector(totalRowSelector);
  const params = useSelector(filterSelector);

  useEffect(() => {
    dispatch(setName(name));
    dispatch(fetchPagination(name));
    dispatch(fetchProductById(params));
  }, [name, params]);
  const maxPage = Math.ceil(totalRow / 16);

  const handlePagination = (page) => {
    const { selected } = page;

    const params = selected + 1;
    dispatch(fetchProductById({ _page: params, _limit: 16 }));
  };

  return (
    <ReactPaginate
      previousLabel={<MdKeyboardArrowLeft />}
      nextLabel={<MdKeyboardArrowRight />}
      pageCount={maxPage}
      pageRangeDisplayed={3}
      onPageChange={handlePagination}
      marginPagesDisplayed={1}
      containerClassName={'shop-pagination'}
      // forcePage={paginationActive}
    />
  );
};

export default Pagination;
