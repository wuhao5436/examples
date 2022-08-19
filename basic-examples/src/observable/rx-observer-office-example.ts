/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-15 14:35:38
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-15 17:05:28
 */

import { Observable } from 'rxjs';
// import { Observable } from './rx-observer-mock';

// 数据发布
/**
 * @observer 每一个订阅者
 */
const observable = new Observable((observer) => {
    let i = 0;
    setInterval(() => {
        observer.next(i++)
    } ,1000)
});

// 数据订阅及订阅的数据发生变化了以后如何执行
observable.subscribe((i) => {
    console.log("tick", i);
});