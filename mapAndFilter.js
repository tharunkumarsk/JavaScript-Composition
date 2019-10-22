let mapping = (people) => people.map(name => name + '!');
let filter = (people) => people.filter(name => name.length > 6);



module.exports = { mapping, filter };