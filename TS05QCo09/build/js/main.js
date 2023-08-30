"use strict";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TypeScript sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
