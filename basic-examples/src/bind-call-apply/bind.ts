/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-13 11:50:16
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-13 14:18:45
 */

interface Function {
    _bind(this: Function, thisArg: any, ...argArray: any[]): any;
}

(function() {

    Function.prototype._bind = function(athis, ...arg) {
        const fn = this;
        const symbol = Symbol("bind");
        return function(...bindArg) {
            athis[symbol]=fn;
            const res = athis[symbol](...arg, ...bindArg);
            delete athis[symbol]
            return res;
        }
    }

    const a = function () {
        console.log(this.name)
    }

    const b = {
        name : 'xiaoli'
    }


    a._bind(b)()

} )()
