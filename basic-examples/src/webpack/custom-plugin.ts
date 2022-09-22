/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-09-21 15:34:10
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-09-21 20:05:25
 */

import { Compiler } from 'webpack'; 


enum FileStatus {
    CLOSE,
    OPEN
}

export class MyPlugin {
    options: Record<string, any>
    constructor(opt = {}) {
     this.options = opt
    }

    apply (compiler:  Compiler) {

        compiler.hooks.emit.tap('my-indetifer-signal', (compilation) => {
            console.log("pakc done in emit")
          
        });
        compiler.hooks.done.tap("my-indetifer-signal", function(arg) {
            // console.log('arg', arg)
        })

        
    }
}

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

