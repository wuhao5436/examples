"use strict";
/*
 * @Description:
 * @Autor: 吴浩舟
 * @Date: 2022-09-21 15:05:44
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-21 19:09:33
 */
// import { Configuration } from 'webpack'
// import path from 'path';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const path = require("path");
// const MyPlugin = require("./config/custom-plugin");
var path_1 = __importDefault(require("path"));
var custom_plugin_1 = require("./custom-plugin");
console.log('MyPlugin', custom_plugin_1.MyPlugin);
/**
 * @type {import('webpack').Configuration}
 */
var config = {
    entry: './src/index.ts',
    output: {
        path: path_1.default.resolve(__dirname, '../dist'),
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
        new custom_plugin_1.MyPlugin(),
    ],
    mode: "production"
};
module.exports = config;
