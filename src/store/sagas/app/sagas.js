import { all, put, takeLatest, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchNews() {
  try {
    const [news ] = yield all([
      call(axios,'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'),
    ]);
    yield put({ type: "NEWS_RECEIVED", json: news.data.articles || [{ error: news.data.message }] });
  } catch (e) {
    console.log(e);
  }
}

function* fetchAppVersion(...arg) {
  yield put({ type: "SET_APP_VERSION", appVersion: '0.0.2' });
}

export function* actionWatcher() {
  yield takeEvery('SET_APP_V', fetchAppVersion);
  yield takeLatest('GET_NEWS', fetchNews);
}
