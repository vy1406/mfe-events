import { all, takeEvery, put } from 'redux-saga/effects';
import reducer  from './globalSlice';

function* logEventSaga(action) {
  console.log('Saga caught event:', action.payload);
}

function* watchDispatchEvent() {
  yield takeEvery(reducer.dispatchEvent.type, logEventSaga);
}

export default function* rootSaga() {
  yield all([watchDispatchEvent()]);
}
