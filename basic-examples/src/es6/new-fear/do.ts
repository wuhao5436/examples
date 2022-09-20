/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-30 15:57:37
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-07 19:17:23
 */
(() => {
    function *g () {
        console.log(1);
        const a = yield 1;
        console.log(2, a)
        yield 2;
    }

    const I = g();
    I.next();
    I.next(2)

})()

