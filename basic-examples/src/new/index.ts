/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-22 07:41:02
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-22 08:17:11
 */

/**
 * example
 * */

function Stu (name) {
    this.name = name
}

Stu.prototype.getType = function () {
    console.log('I am a human')
}

const stu = new Stu('xiaoming');


function myNew(fn, ...arg) {
    const obj = {};
    const symbol = Symbol('new');
    obj[symbol] = fn;
    Object.setPrototypeOf(obj, fn.prototype);
    const res =  obj[symbol](...arg);
    delete obj[symbol];
    return Object.prototype.toString.call(res) === '[object Object]' ? res : obj ;
}

const myStu1 = myNew(Stu, 'xiaoli') as {getType: () => void};

console.log('myStu1', myStu1)
console.log('myStu1.type', myStu1.getType())