import axiosClient from './axiosClient';

const shopApi = {
  getAll: (type, params) => {
    return axiosClient.get(type, { params });
  },
  get: (id) => {
    const url = `/best-foods/${id}`;
    return axiosClient.get(url);
  },
};

export default shopApi;
