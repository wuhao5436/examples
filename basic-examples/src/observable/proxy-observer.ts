/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-01 16:41:13
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-02 08:18:30
 */

(function() {
    const observerQues : Set<Function>= new Set();

    const observable = (obj: any) => {
        return new Proxy(obj, {
            set
        });
    }

    const observe = (fn: Function) => observerQues.add(fn);

    function set(target, propsName, value, receiver) {
        const res = Reflect.set(target, propsName, value, receiver);
        observerQues.forEach(fn => fn())
        return res
    }


    /**
     * examples 
     * 
     */
    const a = observable({
        name: 'xiaoli',
        age: 18
    })

    observe(() => console.log('a', a));

    a.name = 'xiaoliu';
    a.name = 'xiaoWang'



})()