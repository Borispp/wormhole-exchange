import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancers = applyMiddleware(sagaMiddleware);
let composedEnhancers;

if (process.env.NODE_ENV !== 'production') {
  composedEnhancers = composeWithDevTools(enhancers);
} else {
  composedEnhancers = compose(enhancers);
}

const store = createStore(rootReducer, {}, composedEnhancers);
sagaMiddleware.run(rootSaga);

export default store;
