/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-21 10:58:01
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-21 14:19:25
 */

function tthrottl (fn : () => any , timer: number) {}

function throttl (fn, timer) {
    let flag = false;
   return function(...arg) {
        if (!flag) {
            flag = true
            setTimeout(() => {
                fn(...arg);
                flag = false;
            }, timer);
        }
   }
}

const console1 = () => {
    console.log(1)
}

const throttlConsole1 = throttl(console1, 200);

throttlConsole1();
throttlConsole1();
throttlConsole1();
throttlConsole1();
throttlConsole1();
setTimeout(() => {
    throttlConsole1();
    setTimeout(() => {
        throttlConsole1();
        setTimeout(() => {
            throttlConsole1();
             
        }, 100);
    }, 100);
}, 100);