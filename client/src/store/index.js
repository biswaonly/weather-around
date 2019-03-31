import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { SET_OPEN_API_DATA } from '../actions';

const initialState ={
  cityName : undefined,
  leftPanel : [{"Today":true},{"Tomorrow":false},{"This Week":false}, {"Settings":false}],
  temperature : undefined,
  apiData: {}
}

const reducer = (state = initialState, action)=>{
  switch (action.type){
    case 'ADD_TO_STATE':
      return Object.assign({}, state, {...action.value})
    case SET_OPEN_API_DATA:
      return {...state, apiData: action.data}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;