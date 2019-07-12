import { CHANGE_LIST } from "./constants";

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = (server) => {
  return (dispatch, getState, axiosInstance) => {
    return dispatch(changeList([{name: 'xzh', title: '25'}, {name: 'ming', title: '22'}]))
    // axiosInstance.get('/api/news.json')
    //   .then((res) => {
    //     const list = res.data.data
    //     dispatch(changeList(list))
    //   });
  };
};