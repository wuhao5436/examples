/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-02 10:31:05
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-02 11:27:08
 */


/**
 * learned things from this coding 
 *  1. new Array(10).fill([]) point the same pointer, it is all same [];
 *  2. for expression in while expression cannot --a every time
 *  3. it not sensible create Array under this number question, stackover flow must accur at some time; 
 *  4. expression could been while's parameter, use while (a--) do not use while(a > 0) {a--}
 */

function divide(a: number, b: number): number {
    if (b > a) {
        return 0;
    }

    const temp = b;

    const stack: number[] = new Array(b).fill(0)
   
    while(a--) {
        if (b === 0) {
            b = temp;
        }
        b--;
        stack[b]++;
    }
   return stack.sort((a,b) => a-b )[0];
};


const test1 = divide(6, 2);
console.log('test1', test1);