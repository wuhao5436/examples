import { combineReducers as _combineReducers } from "redux";
import { asyncRunner } from './async-runner';
/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-04 16:11:57
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-05 15:27:45
 */

let combinedReducer ;

/**
 * 
 * 替换state的一个reducer
 */
function _changeStateReducer (state, action: any) {
    if (action.type === '@__State') {
        return action.state;
    }
    return state;
}

type ITodo = {
    todo: any,
    path: Array<any>
}

function *asyncWorker(state: any, path = []): Generator<ITodo, void> {
   if (typeof state === 'function') {
         yield {
            todo: state(),
            path
        }
   }

   if (typeof state !== 'object') {
        return 
    }
   if (state instanceof Promise || state[Symbol.iterator]) {
        yield {
            todo: state,
            path
        }
   }
   
    for (let key in state) {
        yield *asyncWorker(state[key], path.concat(key))
    }
  
}

export function combineReducers (reducersObj: any) {
    for (const key in reducersObj) {
        const reducer = reducersObj[key];
        reducersObj[key] = (state: any, action: any) => {
            state = reducer(state, action);
            state = _changeStateReducer(state, action);
            return state;
        }
    }
    combinedReducer = _combineReducers(reducersObj)
//    combinedReducers = _combineReducers(reducers)
   return combinedReducer
}

function deepSet(state, path, value, i = 0) {
    const key = path[i];
    if (key === undefined) {
        return value
    }
    state[key] = deepSet(state[key], path, value, i+1);
    return state;
}

export const  ske_redux_middleware  = (store: any) => (dispatch: any) => (action: any) => {
    const oldState = store.getState();
    
    const nextState = combinedReducer(oldState, action);
    
    const works = [...asyncWorker(nextState)] ;
    
    if (works.length > 0 ) {
        asyncRunner( function *() {
            for (let work of works) {
                const result = yield work.todo;
                const newState =  deepSet(nextState , work.path, result)
                
                dispatch({
                    type: '@__State',
                    state: newState
                })
            } 
        })
    } else {
        return dispatch(action);
    }

    // return dispatch(action);
}