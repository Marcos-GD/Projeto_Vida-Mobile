import {call, put, takeLatest} from 'redux-saga/effects';
import FindUser from '../Services/github';

// function* fetchUser(action) {
//   try {
//     const userdata = yield call(Api.requestUser, action.username);
//     // console.log(userdata);
//     yield put({type: 'REQUEST_SUCCEEDED', userdata});
//   } catch (e) {
//     yield put({type: 'REQUEST_FAILED', message: e.message});
//   }
// }

function* requestUserToGithub(action) {
  try {
    console.log('requesting...');
    const userdata = yield call(FindUser, action.username);
    const {
      avatar_url: avatar,
      company,
      html_url: url,
      location,
      name,
      id,
      bio,
    } = userdata;
    yield put({
      type: 'REQUEST_USER_SUCESSFULL',
      // payload: {data},
      payload: {
        name,
        username: action.username,
        avatar,
        url,
        company,
        location,
        id,
        bio,
      },
    });
  } catch (e) {
    console.log(`error on request: ${e.message}`);
    yield put({type: 'REQUEST_FAILED', message: e.message});
  }
}

function* mySaga() {
  yield takeLatest('SEARCH_USER', requestUserToGithub);
}

export default mySaga;
