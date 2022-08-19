/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-17 09:53:13
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-17 11:56:42
 */

/**
 * 搞清楚什么情况下可以catch到error
 * 什么情况下error会冒泡到全局
 * 需要对宏任务 微任务 熟练掌握
 * 学习资料： https://www.zhihu.com/search?type=content&q=%E5%AE%8F%E4%BB%BB%E5%8A%A1%20%E5%BE%AE%E4%BB%BB%E5%8A%A1
 */

/**
 * 在搞清楚宏任务和微任务 以及 eventloop 和 callstack 以后 就能准确的判断报错的位置和时机
 */

(() => {

    const p = new Promise((resolve, reject) => {
        // resolve(1);
        // console.log('4')
        /**
         * promise status won't change once fullfiled or rejected
         * though `throw` is a async code as `console`,
         * but error won't happen because this error under `resolve` code
         */
        // throw new Error('44') 
        try {
            setTimeout(() => {
                // reject(2)
                throw new Error('3')
            }, 0);
        } catch (error) {
            reject(error)
        }
    })

    p.then((res) => {
        console.log('res', res)
    })
    .catch((error) => {
        console.log('catch-error', error)
    })

})()


