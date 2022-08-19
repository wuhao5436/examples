/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-03 15:44:42
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-03 16:43:58
 */

/**
 * 测试generator函数执行顺序
 */
(function() {
    const gen1: () => Generator<number, void, number>  = function * () {
        console.log('gen1 start');
        const a = yield 1;
        console.log("a", a);
        
        console.log('gen2');
        const b = yield 2;
        console.log("b", b);
        
        console.log('gen3');
        yield 3;
        console.log('gen4');
        yield 4;
        console.log('gen end');
        
    }


    /**
     * test1 
     * manually invoke next
     */
    
    // const res = gen1();
    // const n1 = res.next(5);
    // console.log("n1", n1);
    // const n2 = res.next(6);
    // console.log("n2", n2);
    // const n3 = res.next();
    // console.log("n3", n3);
    // const n4 = res.next();
    // console.log("n4", n4);
    // const n5 = res.next();
    // console.log("n5", n5);

    /**
     * test2
     * for of iterator
     */

    // const res = [...gen1()];
    // console.log("res", res);
    
    const gen2: () => Generator<number, void> = function *() {
        yield * gen1();
        yield 22
    }

    // console.log('gen2', [...gen2()]);
    const gen2It = gen2();
    gen2It.next();
    const { value } = gen2It.next();
    console.log("value", value);
    

})()