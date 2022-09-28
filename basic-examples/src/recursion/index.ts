/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-22 09:05:14
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-22 09:10:22
 */
 (function() {

    const fibnarc = (from : number) => {
        if (from < 0) {
            return 
        }
        switch (from) {
            case 0:
                return 0
            case 1:
                return 1    
            default:
                return fibnarc(from-1) + fibnarc(from-2)
        }
    
    }


    const res1 = fibnarc(10)
    console.log('res1', res1)


 })()