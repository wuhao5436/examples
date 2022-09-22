"use strict";
/*
 * @Description:
 * @Autor: 吴浩舟
 * @Date: 2022-09-21 15:34:10
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-21 20:05:25
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPlugin = void 0;
var FileStatus;
(function (FileStatus) {
    FileStatus[FileStatus["CLOSE"] = 0] = "CLOSE";
    FileStatus[FileStatus["OPEN"] = 1] = "OPEN";
})(FileStatus || (FileStatus = {}));
var MyPlugin = /** @class */ (function () {
    function MyPlugin(opt) {
        if (opt === void 0) { opt = {}; }
        this.options = opt;
    }
    MyPlugin.prototype.apply = function (compiler) {
        compiler.hooks.emit.tap('my-indetifer-signal', function (compilation) {
            console.log("pakc done in emit");
        });
        compiler.hooks.done.tap("my-indetifer-signal", function (arg) {
            // console.log('arg', arg)
        });
    };
    return MyPlugin;
}());
exports.MyPlugin = MyPlugin;
// function MyPlugin (opt = {}) {
//     this.options = {
//         ...opt
//     }
// }
// MyPlugin.prototype.apply = function(compiler: Compiler) {
//     compiler.hooks.done.tap("watchClose", function(arg) {
//         // console.log('arg', arg)
//         console.log("pakc done")
//     })
//     compiler.hooks.done.tap("", function(compiler: Compiler) {
//     })
// }
// export { MyPlugin } 
