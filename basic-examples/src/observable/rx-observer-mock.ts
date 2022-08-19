/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-08-15 15:28:39
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-08-15 17:13:02
 */

(() => {
    type SubscribeCallback = (val: any) => void;

    type Unsubscribe = () => void;
    
    type Subscribe = ( observer: Subscription ) => Unsubscribe;
    
    class Observable {
    
        subscribers: Subscription[]  = [];
    
        onSubscribe: Subscribe | null;
    
        constructor(onSubscribe: Subscribe | null = null) {
            this.onSubscribe = onSubscribe
        }
    
        subscribe(callback: SubscribeCallback) {
            const subscription = new Subscription(callback);
            if (this.onSubscribe) {
                const unsubscribeHandler = this.onSubscribe(subscription);
                subscription.setUnsubscriptionHandler(unsubscribeHandler);
            }
            this.subscribers.push(subscription);
            return subscription;
        }
    
        publish (val: any) {
            this.subscribers.forEach(subscriber => {
                subscriber.next(val)
            })
        }
    }
    
    
    class Subscription extends Observable {

        subscribeCallback: SubscribeCallback

        unsubscribeHandler: Unsubscribe

        constructor(fn: SubscribeCallback) {
            super();
            this.subscribeCallback = fn
        }


        unsubscribe () {
            
        }

        setUnsubscriptionHandler (handler: () => void ) {
            this.unsubscribe = handler
        }

        next(val: any) {
            const result = this.subscribeCallback(val);
            this.publish(result);
        }
    }
})()

