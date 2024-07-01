export default class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.handlers = [];
        console.log(executor)
        console.log(this.value)
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.handlers.forEach(handler => handler(value));
                console.log(value)
            }
        };
        console.log(resolve)
        executor(resolve);
    }

    then(onFulfilled) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        } else {
            this.handlers.push(onFulfilled);
        }
        return this;
    }
}

