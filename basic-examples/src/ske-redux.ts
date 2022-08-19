import { Action, applyMiddleware, createStore } from "redux";
import { combineReducers, ske_redux_middleware } from './ske-combineReducers';


const initalState = {
    list: ''
}


const getItemInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello')
        }, 1000);
    })
}
// const getItemInfo = 'getItemInfo';

type Async<T> = Promise<T> | Generator<any, T> | (() => Promise<T>) | (() => Generator<T>) | T

type UserState = {
    list : Async<string>
}

type UserAction = {
} & Action<Async<string>>

const reducer = (state: UserState = initalState, action: UserAction) => {
    
    switch (action.type) {
        case "GET_ITEM_INFO":
            return {
                ...state,
                list: getItemInfo
            }
    }
    return state

}



const reducers = combineReducers({
    user: reducer
})

const store = createStore(reducers, applyMiddleware(ske_redux_middleware));

store.subscribe(() => {
//   console.log("store.state", store.getState());
    console.log('store',   store.getState()
    );
})

store.dispatch({
    type: 'GET_ITEM_INFO'
}) 