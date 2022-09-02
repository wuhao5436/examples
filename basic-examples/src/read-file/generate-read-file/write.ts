/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-30 15:09:55
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-30 15:18:00
 */

import { writeFileSync } from 'fs'
import path from 'path'

(function () {
    const writingStrs: string[] = [];

    for (let index = 0; index < 300; index++) {
        writingStrs.push(`hello world ${index}`);
    }

    const writingStr = writingStrs.join('\n');
    
    writeFileSync(path.resolve(__dirname, './test.txt'), writingStr, {encoding: 'utf-8'})
})()

