/**
 * @param {number} age
 * @returns {number}
 */

function getNextAge(age) {
    if (typeof age === 'string') {
        age = Number.parseInt(age, 10);
    }
    return age + 1;
}

console.log(getNextAge(25)); // 26
console.log(getNextAge('30')); // 31
console.log(getNextAge('invalid')); // NaN
console.log(getNextAge(-5)); // -4
