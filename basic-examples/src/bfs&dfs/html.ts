/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-07 11:16:10
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-07 14:28:04
 */

import jsdom from 'jsdom';

export default new jsdom.JSDOM(` <!DOCTYPE html>
    <body>
        <div>
            <div>
                <span></span>
                <span></span>
                <p></p>
            </div>
        </div>
        <a/>
        <div>
            <span></span>
            <span></span>
        </div>
    </body>`).window.document.body;