import React, { useEffect } from 'react';

import './Pagination.scss';
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { onPagination } from '../../Filter/FilterSlice';
import { fetchProductQnt, fetchProducts } from '../../thunk';
import {
  nameActiveSelector,
  paginationActiveSelector,
  paramsSelector,
  prevPriceSelector,
  prevRateSelector,
  prevSearchSelector,
  productQntSelector,
  totalRowsSelector,
} from '../../../../app/selectors';

const Pagination = () => {
  const dispatch = useDispatch();

  const params = useSelector(paramsSelector);
  const nameActive = useSelector(nameActiveSelector);
  const prevPrice = useSelector(prevPriceSelector);
  const prevRate = useSelector(prevRateSelector);
  const prevSearch = useSelector(prevSearchSelector);
  const totalRows = useSelector(totalRowsSelector);
  const productQnt = useSelector(productQntSelector);
  const paginationActive = useSelector(paginationActiveSelector);

  let maxPage;
  if (prevPrice || prevRate || prevSearch) {
    maxPage = Math.ceil(productQnt / 16);
  } else if (totalRows && nameActive) {
    maxPage = Math.ceil(totalRows[nameActive] / 16);
  }

  useEffect(() => {
    const params = prevPrice || JSON.parse(prevRate) || prevSearch;
    if (prevPrice || prevRate || prevSearch) {
      dispatch(fetchProductQnt({ name: nameActive, params }));
    }
  }, [dispatch, nameActive, prevPrice, prevRate, prevSearch]);

  const handlePagination = (page) => {
    const { selected } = page;
    dispatch(onPagination());
    dispatch(fetchProducts({ name: nameActive, params, page: selected + 1 }));
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
      forcePage={paginationActive}
    />
  );
};

export default Pagination;
