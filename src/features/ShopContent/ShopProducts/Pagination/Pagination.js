import queryString from 'query-string';
import { useContext, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  paginationActiveSelector,
  paramsSelector,
  prevPriceSelector,
  prevRateSelector,
  prevSearchSelector,
  productQntSelector,
} from '../../../../app/selectors';
import { ApiContext } from '../../../../contexts/ApiContext';
import { onPagination } from '../../Filter/FilterSlice';
import { fetchProductQnt, fetchProducts } from '../../thunk';
import './Pagination.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  const totalRows = useContext(ApiContext);

  const params = useSelector(paramsSelector);
  const prevPrice = useSelector(prevPriceSelector);
  const prevRate = useSelector(prevRateSelector);
  const prevSearch = useSelector(prevSearchSelector);
  const productQnt = useSelector(productQntSelector);
  const paginationActive = useSelector(paginationActiveSelector);

  let maxPage;
  if (prevPrice || prevRate || prevSearch) {
    maxPage = Math.ceil(productQnt / 16);
  } else if (totalRows && name) {
    maxPage = Math.ceil(totalRows[name] / 16);
  }

  useEffect(() => {
    const params = prevPrice || JSON.parse(prevRate) || prevSearch;
    if (prevPrice || prevRate || prevSearch) {
      dispatch(fetchProductQnt({ name: name, params }));
    }
  }, [dispatch, name, prevPrice, prevRate, prevSearch]);

  const handlePagination = (page) => {
    const { selected } = page;
    let curPage = selected + 1;
    dispatch(onPagination());
    dispatch(fetchProducts({ name: name, params, page: curPage })).then(() => {
      navigate({
        search: queryString.stringify({
          _limit: 16,
          ...params,
          _page: curPage,
        }),
      });
    });
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
