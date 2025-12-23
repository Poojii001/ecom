import { put, takeEvery } from "redux-saga/effects"
import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constant"
import { createRecord, deleteRecord, getRecord, updateRecord } from "./services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {     //worker saga
    let response = yield createRecord("maincategory", action.payload)   //Used this line in case when no field is used
    // let response = yield createMultipartRecord("maincategory", action.payload)  //Used this line in case when field is used
    yield put({ type: CREATE_MAINCATEGORY_RED, payload: response })
}

function* getSaga(action) {     //worker saga
    let response = yield getRecord("maincategory")
    yield put({ type: GET_MAINCATEGORY_RED, payload: response })
}
function* updateSaga(action) {     //worker saga
    yield updateRecord("maincategory", action.payload)   //Used this line in case when no field is used
    yield put({ type: UPDATE_MAINCATEGORY_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("maincategory", action.payload)  //Used this line in case when field is used
    // yield put({ type: UPDATE_MAINCATEGORY_RED, payload: response})
}
function* deleteSaga(action) {     //worker saga
    yield deleteRecord("maincategory", action.payload)   //Used this line in case when no field is used
    yield put({ type: DELETE_MAINCATEGORY_RED, payload: action.payload })

}

export default function* MaincategorySagas() {
    yield takeEvery(CREATE_MAINCATEGORY, createSaga)    //watcher Saga
    yield takeEvery(GET_MAINCATEGORY, getSaga)         //watcher Saga
    yield takeEvery(UPDATE_MAINCATEGORY, updateSaga)   //watcher Saga
    yield takeEvery(DELETE_MAINCATEGORY, deleteSaga)    //watcher Saga
}