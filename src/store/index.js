// 내가 짠 ReduxForm 코드가 제대로 굴러가서
// Form Input 정보가 바뀔때마다 Redux Store 에 저장하려면
// Store 에서form actions 받아먹을 수 있도록
// form 데이터를 처리하는 formReducer 가 필요해요 RootReducer 에 추가해주세요

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    form: formReducer
});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;


