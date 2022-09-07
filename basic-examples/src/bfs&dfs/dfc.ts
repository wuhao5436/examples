/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-07 11:26:08
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-07 14:10:25
 */


import doms  from './html';

function *dfc(dom: Element): Generator<Element> {
    yield dom;
    if (dom.children) {
        for(let k = 0; k < dom.children.length; k++) {
            yield *dfc(dom.children[k])
        }
    }
}


for (const dom of dfc(doms)) {
    console.log('dom', dom.tagName)
}