/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-02 14:48:12
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-02 15:10:33
 */

(function() {

    /**
     * unName group
     */
//     const upcaseReg: RegExp = /([A-Z])+/g;
//     let a = 'Hello World WINDOWS98'
//     const res = [];
//     let r = []
//     while(r = upcaseReg.exec(a)) {
//         res.push(r[0])
//     }
//    console.log('res', res)
    

   /**
    * named Group
    */

    const DateExec: RegExp = /(?<year>\d{4}).(?<month>\d+).(?<day>\d+)/

    const databaseTime = '2021-10-20 20:34:45'

    const regTime =  DateExec.exec(databaseTime)

    // console.log('regTime', regTime.groups)
    const groupTime = regTime.groups;

    const showTime = `In ${groupTime.year} at ${groupTime.month} at ${groupTime.day}; user a create the account`
    
    console.log('showTime', showTime)

})()

