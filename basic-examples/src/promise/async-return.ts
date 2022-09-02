/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-30 15:33:49
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-02 11:28:33
 */
(function() {
    const afn = async () => { console.log(1)}
    const a = afn();
    // 判断是否是Promis 函数
    console.log('a is promise', a instanceof Promise)
    console.log('a has then property', 'then' in a);
})()

