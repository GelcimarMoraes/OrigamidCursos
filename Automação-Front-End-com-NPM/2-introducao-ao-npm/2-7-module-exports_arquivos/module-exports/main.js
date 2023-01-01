let plugin = require('./plugin');
let moment = require('moment');

console.log(plugin.imc(80, 1.3));
console.log(plugin.quadrado(5));

console.log(moment().endOf('day').fromNow());