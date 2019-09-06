import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/reducers';
import mySaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// const store = createStore(reducers);

sagaMiddleware.run(mySaga);

export default store;
