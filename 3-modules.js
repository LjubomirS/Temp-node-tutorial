//* Modules

//* Common JS, every file in NODE is module (by default)
//* Modules -Encapsuleted code (only share minimum)

const names=require('./4-first-module-names')
const sayHi = require('./5-second-module-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

console.log(data)

console.log(names);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)