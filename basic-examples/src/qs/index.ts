/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-08 16:56:09
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-09 16:28:46
 */


var str = 'a=1&b=2&c[0]=1&d[2]=2&e.f=hello&aa[1]=1&bb=b';

const vals = decodeURIComponent(str).split('&');

const reg = /([a-zA-Z\$_]+[a-zA-Z\d\[\.\]]*)=([a-zA-Z\d]+)/

// vals.map(item => {
//     console.log("item", item);
//     const res = reg.exec(item);
//     console.log("res", res);
// })

const result = {};

try {
while(str) {
    const [patter, key, val] = reg.exec(str)
    if (patter) {
        result[key] = val;
        str = str.substring(patter.length)
    }
}
} catch (error) {
    console.log("error", error);
     
}

function stepGetConstructor(key: string, val: any, res) {

    const arrReg = /^([^[.*])\[(.*)\]/;
    const objReg = /\./;

    const arrStrExec = arrReg.exec(key);
    console.log( "arrStrExec",key, arrStrExec);
    
    const objStr = objReg.exec(key);

    if (arrStrExec) {
        const [, trueKey, index,  ] = arrStrExec;
        res[trueKey] = new Array();
        res[trueKey][index] = val;
        if (arrReg.exec(trueKey)|| objReg.exec(trueKey)) {
            console.log("trueKey", trueKey);
            console.log("val", val);
            
            
            stepGetConstructor(trueKey, val, res);
        }
    } else if (objStr) {
        const [pre, last] = key.split('.');
        if (arrReg.exec(pre)|| objReg.exec(pre)) {
            stepGetConstructor(pre, val, res);
        }
        if (!res[pre]) {
            res[pre] = {}
        }
        res[pre] = {
            [last]: val
        }
    } else {
        res[key] = val
    }

    return res;
}

const decodeRes = {};

Object.entries(result).map(([key, val]) => {
   stepGetConstructor(key, val, decodeRes );
})

console.log("dres", decodeRes);



