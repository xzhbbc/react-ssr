import { CHANGE_LIST } from "./constants";

const defaultState = {
  name: 'xzh',
  newsList: [{
      title: '123',
      name: 'xzh'
  }, {
      title: '222',
      name: 'zzz'
  }]
};

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST:
      const newState = {
        ...state,
        newsList: action.list
      };
      return newState;
    default:
      return state;
  }
}