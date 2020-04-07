import { all } from 'redux-saga/effects';

import { actionWatcher } from './app/sagas'

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
