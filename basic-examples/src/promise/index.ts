/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-16 17:03:26
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-19 10:12:07
 */


/**
 * 手写Promise
 */


enum PromiseState  {
    PENDING,
    FULLFILED,
    REJECTED
}

type resolveType<T> =  (value: T) => void;
type rejectType = (error: any) => void;
type PromiseThen<T> = (resolve: resolveType<T>, reject: rejectType) => void;
type thenType <T, R> = (val: T) => R;

class MyPromise<T> {

    state: PromiseState = PromiseState.PENDING;

    value: T;

    pendingStack: resolveType<T>[]  = []

    constructor(fn: PromiseThen<T>) {

        const resolve = (value) => {
            this.value = value;
            this.state = PromiseState.FULLFILED;
            this.pendingStack.forEach(fn => {
                fn(this.value);
            })
        };

        const reject = (error) => {
            throw new Error(error)
        };
        
        fn(resolve, reject);
    }

    then<R> (fn : thenType<T, R>): MyPromise<R> {
        return new MyPromise((resolve, reject) => {
            if (this.state === PromiseState.PENDING) {
                this.pendingStack.push((val) =>  resolve(fn(val)));
             } else {
                try {
                    resolve(fn(this.value));
                } catch (error) {
                    reject(error);
                }
             }
        })
    }

    catch () {

    }

}

const p = new MyPromise((resolve, reject) => {
   setTimeout(() => {
    resolve(1);
   }, 0);
})

const q = p.then((res) => `${res} -1 `);



/**
  example
*/
//   const p = new Promise(( resolve, reject ) => {
//     resolve(1)
//   })
  
//   p
//    .then((res1) => { console.log(res1); return 2})
//    .then((res2) => console.log(res2))
//    .catch((err) => console.log(err))
