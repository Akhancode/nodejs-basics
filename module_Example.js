const names = require('./module_exports')
const sayHi = require('./module_Print')
const data = require('./module_Example_2')
console.log(names);
console.log(data);

sayHi(names.john)
