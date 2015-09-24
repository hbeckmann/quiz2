'use strict';

function bindName(firstName, lastName, func) {
var name = firstName + " " + lastName;
func = func.bind(null, name);
return func;
}

module.exports = bindName;
