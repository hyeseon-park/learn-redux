import axios from "axios";

const GET_LIST = "list/GET_LIST";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/main`,
  headers: {
    os: process.env.REACT_APP_OS,
    version: process.env.REACT_APP_VERSION,
  },
});

export const testApi = {
  getHotDeal: () => api.get("hot_deal"),
  getOrder: (userNo, page) => api.get("v2/order", { params: { userNo, page } }),
};

export const getList = (userNo, page) => ({
  type: GET_LIST,
  userNo,
  page,
});

const initialState = [];

export default function list(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
      };
    default:
      return state;
  }
}
