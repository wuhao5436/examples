/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-21 14:10:39
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-21 14:16:55
 */


function debounce (fn: () => any, timer: number ) : Function

function debounce (fn, timer) {
    let timeout 
    return (...arg) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(...arg)
        }, timer);
    }
}

const console2 = () => {
    console.log(2)
}

const debounceConsole2 = debounce(console2, 200);

debounceConsole2();
debounceConsole2();
debounceConsole2();
debounceConsole2();
setTimeout(() => {
    debounceConsole2();
    setTimeout(() => {
        debounceConsole2();
        setTimeout(() => {
            debounceConsole2();
        }, 100);
    }, 100);
}, 100);

