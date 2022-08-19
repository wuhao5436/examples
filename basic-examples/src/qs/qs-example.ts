import { Action } from "redux";
/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-11 09:07:16
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-11 13:48:53
 */

var str = 'a=1&b=2&c[0]=1&d[2]=2&e.f=hello&aa[1]=1&bb=b';


/**
 * 1. string.protoType.match 和 regexp.exec 在合适的场景使用
 * 2. if语句中的赋值表达式 a=1 赋值表达式的返回值是1
 * 3. exec循环执行的结果
 * 4. getPath  deepSet 逻辑拆分
 * 5. a === undefined 和 typeof a === 'undefined' 的区别
 */

type keyPath = string ;

const deepSet = (obj: any, keys: keyPath[], val: any, index = 0) => {

    const key = keys[index];
    
    if (typeof key === 'undefined') {
        return val;
    }
    
    if (typeof obj === 'undefined') {
        if (key.match(/^\d+$/)) {
            obj = new Array();
        } else {
            obj = new Object();
        }
    }
    
    obj[key] = deepSet(obj[key], keys, val, index+1);
    return obj
}


// aa.a.b.c
// a[1][2][3]
// a[1].b[2]
const pthReg = /(^[a-zA-Z$_][a-zA-Z$_\d]*)/;
const partPtnReg = /\.([a-zA-Z$_][a-zA-Z$_\d]*)|\[([a-zA-Z$_\d]*)\]/g
const getPath = (path: string): keyPath[] => {
    const pthMatch =  path.match(pthReg);
    if (!pthMatch) {
        return [path]
    }
    const pth = pthMatch[0];
 
    const resetPath = path.substring(pth.length);
    let p: RegExpMatchArray;
    const keys  = [pth];
    let matchIndex = 0;
    while( p = partPtnReg.exec(resetPath) ) {
        matchIndex+=p[0].length;
        
        const [, strKey, numKey] = p;
        console.log("=", p.index + p[0].length, matchIndex);
        
        if (p.index + p[0].length === matchIndex) {
            keys.push(strKey || numKey);
        } else {
            throw new Error('格式错误')
        }
    }
    return keys
}

// console.log("getPath1", getPath('a.b.c.d'));
// console.log("getPath2", getPath('aa[1][2][3]'));
// console.log("getPath3", getPath('aa[1].v[2].d[3]'));
// console.log("getPath4", getPath('@@#$%^&*IOYT'))
// console.log("getPath5", getPath('a[1][2]aaaa[3]'))



const res = {};

const getPatter = () => {
    const reg = /([^=&]+)(=([^=&])*)?/g
  
 
    /**
     * regexp.exec 会一直匹配，直到返回一个null后继续从头开始匹配
     */
    // for (let index = 0; index < 10; index++) {
    //     let p1 = reg.exec(str);
    //     console.log("p1", index, p1);
    // }

    let p : RegExpMatchArray;
    while (p = reg.exec(str)) {
        const [,key,,val] = p;
        // console.log("key", key);
        // console.log("val", val);
        deepSet(res, getPath(key) , val);
    }
 
//    const dRes =  deepSet({a:1}, ['aa', 'bb', '3', 'dd'], 12);
//    console.log("dRes",JSON.stringify(dRes));
   
}

getPatter();

console.log("res", res);
