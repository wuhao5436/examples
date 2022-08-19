/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-03 16:54:28
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-03 17:13:12
 */

import { createStore } from 'redux';

(function() {
   

    const initState = {
        list : []
    }

    const reducer = (state = initState, action) => {
        switch (action.type) {
            case 'ADD':
                state.list.push('xiaoli');
                return {
                    ...state,
                }
        
            default:
                break;
        }
    }
    const store = createStore(reducer);

    store.subscribe(() => {
        console.log("store", store.getState());
    })

    store.dispatch({
        type: "ADD"
    })
    store.dispatch({
        type: "ADD"
    })

})()