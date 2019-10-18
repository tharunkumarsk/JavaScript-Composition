let parts = (str) => str.trim();
let split = (str) => str.split(' ');
let trimmed = (str) => str.filter((next) => next.length > 0);
let capitalized = (str) => str.map((next) => {
    return next[0].toUpperCase() + next.substring(1);
});
let join = (str) => str.join(' ');


var titleCase = (str) => join(
    capitalized(
        trimmed(
            split(
                parts(str)))));

module.exports = titleCase;