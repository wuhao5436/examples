/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-18 15:31:23
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-18 17:33:18
 */

class Bee {
    name : string = 'jack'

    getName (): string {
        return this.name
    }

    test1 () {
        return this.constructor
    }

    static Child = 'little bee'
}

const bee1 = new Bee ();

console.log('bee1', bee1);

const bee1Test1 = bee1.test1();

console.log('bee1Test1', bee1Test1);

