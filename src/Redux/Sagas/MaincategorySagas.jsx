import { CREATE_MAINCATEGORY } from "../Constant"
import {} from "./services/index"

function* createSaga(action) {     //worker saga
    let response = yield createRecord("maincategory", action.payload)
    yield put({ type: CREATE_MAINCATEGORY_RED, payload: response})
}

export default function* MaincategorySagas() {
    yield takeEvery(CREATE_MAINCATEGORY, createSaga)    //watcher Saga
}