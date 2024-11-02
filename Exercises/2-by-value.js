'use strict';

const inc = (obj) => {
 if(typeof obj === "Object") {
    obj.n = {new:"a"};
 }
} ;

module.exports = { inc };
