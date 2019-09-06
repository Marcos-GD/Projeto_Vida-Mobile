import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import Api from '../Api/github';
function* fetchUser(action) {
  try {
    const userdata = yield call(Api.requestUser, action.username);
    // console.log(userdata);
    yield put({type: 'REQUEST_SUCCEEDED', userdata});
  } catch (e) {
    yield put({type: 'REQUEST_FAILED', message: e.message});
  }
}

function* mySaga() {
  yield takeLatest('SEARCH_USER', fetchUser);
}

export default mySaga;
