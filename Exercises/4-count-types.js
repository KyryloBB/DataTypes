'use strict';

const types = ["hello", 2, "number", "stone", 4, 6, 1, false, true, false, "planet", "axe", 7];

const countTypesInArray = (arr) =>{
    let result = {number: 0, string: 0, boolean: 0};
    for(const value of arr){
        value === Number ? result.number = +1 : result.number = +0;
        value === String ? result.string = +1 : result.string = +0;
        value === Boolean ? result.boolean = +1 : result.boolean = +0;
    }
    return result
};

module.exports = { countTypesInArray };
