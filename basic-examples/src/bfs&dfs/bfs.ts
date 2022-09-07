/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-07 11:15:53
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-07 14:45:07
 */

/**
 * 广度优先
 */

import doms  from './html';

console.log('doms', doms)


function *bfs(node: Element): Generator<Element> {
    const mapStack: Element[] = [];
    mapStack.push(node);
    while(mapStack.length!== 0) {
       const child = mapStack.splice(0, 1)[0];
       yield child;
       if (child.children) {
         for (var k = 0 ; k < child.children.length; k++) {
            mapStack.push(child.children[k])
         }
       }
    }
}

for (const node of bfs(doms)) {
   console.log('node', node.tagName)
}

// 课程示例
// function *bfcExample(node: Element): Generator<Element> {
//     // 不使用 unshift 和 pop unshift 是一个o(n1)的操作
//     // 因为可以预测节点有限, 使用array 和 i, j 两个指针来计算， i出队 j入队
//     const queue = new Array(1000);
//     let i = 0, j = 0;
//     queue[j++] = node;
//     while (i !== j) {
//        const childNode = queue[i++];
//        yield childNode; 
//        if (childNode.children) {
//             for(let k = 0 ; k < childNode.children.length; k++) {
//                 queue[j++] = childNode.children[k];
//             }
//        }
//     }
// }

// for (const dom of bfcExample(doms)) {
//     console.log(dom.tagName)
// }