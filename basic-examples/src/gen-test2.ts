/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-03 16:29:58
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-03 16:36:05
 */

(function() {
    const getName =  (url: string): Promise<string> => {
        return Promise.resolve('xiaoming');
    }

    function *get () {
        const res = yield getName('http://xxxx/xxx');
        console.log("res", res);
    }

    const it = get();
    const { value } = it.next()
    console.log("value", value);
    const promis = getName('aaaa').then((res) => {
        it.next(res);
    })

})()