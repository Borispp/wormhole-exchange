import { SET_APP_VERSION } from '../../actionTypes';

const initialState = {
  appVersion: '0.0.1',
  news: {},
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_APP_VERSION: {
      return {
        ...state,
        appVersion: action.appVersion,
      };
    }
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, news: action.json[0], loading: false };
    default:
      return state;
  }
}
