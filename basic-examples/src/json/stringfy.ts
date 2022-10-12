/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-10-12 22:05:44
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-10-12 22:28:33
 */

(() => {
    var a = {
        name: 'xiaoli',
        age: 12,
        gender: 1
    }
    var b = ['a', 'b', 'c']
    /** 第二个参数只格式化指定字符 */
    const json1 = JSON.stringify(a, ['name']);
    console.log('json1', json1);
    /** 第二个参数可以是一个函数 */
    const json4 = JSON.stringify(a, (key,val) => {
        if (typeof val === 'number') {
            return `number-${val}`
        }
        return val
    })
    console.log('json4', json4);
    /** 无效 */
    const json2 = JSON.stringify(b, [0]);
    // console.log('json2', json2);
    /** 第三个参数, 缩进值 */
    const json3 = JSON.stringify(a, ['name', 'age'], 2)
    // console.log('json3', json3)


    const c = '{"stu1":{"name":"xiaolu","age":18},"stu2":{"name":"xiaowang","age":20}}'

    /** 如果对象是nested 那么会从内层执行起来 */
    const c1 = JSON.parse(c, (a,c) => {
       console.log('a', a);
       console.log('c', c);
       return c
    });
    
    console.log('c1', c1)

})()