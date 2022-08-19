/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-14 09:57:29
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-14 10:29:19
 */




enum Topic {
    ADD = 0,
    __LAST
}

type EventHandler<T> = (val: T) => void;

class Emiter <T extends number, K> {

    private handlers : Array<Array<EventHandler<K>>> = [];

    on (type: T, handler: EventHandler<K>)  {
        if (!this.handlers[type]) {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
        return () => {
            this.handlers[type] = this.handlers[type].filter(i => i !== handler);
        }
    }

    emit (type: T , val: K) {
        this.handlers[type] && this.handlers[type].forEach(fn => {
            fn(val);
        })
    }
}

class A extends Emiter<Topic, string> {

}

const a = new A ();

// 这种ts的推导感觉很不错
const suba = a.on(Topic.ADD, (val) => {
    console.log("val", val);
})

a.emit(Topic.ADD, '20');

suba();

a.emit(Topic.ADD, '30');

console.log('I do exec');
