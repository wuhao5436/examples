/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-21 15:05:44
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-21 19:09:33
 */
// import { Configuration } from 'webpack'
// import path from 'path';

// const path = require("path");
// const MyPlugin = require("./config/custom-plugin");
import path from 'path'

import { MyPlugin } from './custom-plugin';

console.log('MyPlugin', MyPlugin)
/**
 * @type {import('webpack').Configuration}
 */

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../dist') ,
        // filename:  'index.js'
    },
    // target: "es5",
    module: {
        rules: [
            {
                test: /.ts?x$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
      new MyPlugin(),
    ],
    mode: "production"
}

module.exports = config