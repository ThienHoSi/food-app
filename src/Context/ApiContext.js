import { createContext, useState, useEffect } from 'react';
import shopApi from '../apis/shopApi';

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [totalRows, setTotalRows] = useState(null);

  useEffect(() => {
    const getPagination = async () => {
      const res = await shopApi.getAll('pagination');
      setTotalRows(res);
    };
    getPagination();
  }, []);

  return (
    <ApiContext.Provider value={totalRows}>{children}</ApiContext.Provider>
  );
};

export default ApiProvider;
