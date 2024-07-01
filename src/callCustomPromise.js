import MyPromise from "./customPromise.js";

const delay = (ms) => new MyPromise((resolve) => setTimeout(resolve, ms));

delay(1000).then(() => console.log('Resolved after 1 second'));
