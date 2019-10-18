let parts = (str) => str.trim();

let split = (str) => str.split(' ');

let trimmed = (str) => str.filter((next) => next.length > 0);

let capitalized = (str) => str.map((next) => {
    return next[0].toUpperCase() + next.substring(1);
});

let join = (str) => str.join(' ');

let apply = (fn1, fn2) => fn2(fn1);

let compose = (arr, val) => arr.reduce(apply, val);




var titleCase = (str) => compose([parts, split, trimmed, capitalized, join], str)

module.exports = titleCase;