"use strict";
const age = 50;
const username = 'Max';
const toggle = true;
const empty = null;
const callback = (a) => {
    return 100 + a;
};
console.log(age, username, toggle, empty, callback(10));
