/**
 * @param {string} value - A string representing a CSS width value (e.g., "50px").
 * @returns {number} - The numeric part of the width value.
 */

function getBoxWidth(value) {
    if (typeof value !== 'string') {
        return('Error: Expected a string');
    }
    const width = Number.parseInt(value, 10);
    if (isNaN(width)) {
        return('Error: Invalid width value');
    }
    return width;
}

// Alternative implementation using slice
/**
 * @param {string} value - A string representing a CSS width value (e.g., "50px").
 * @returns {number} - The numeric part of the width value.
 */

function getBoxWidth2(value) {
    if (typeof value !== 'string' || !value.endsWith('px')) {
        return "Error: Invalid input"; // Return NaN for invalid input
    }
    if (value.length < 3) {
        return NaN; // Return NaN for values that are too short to be valid
    }
    // Remove the last two characters ('px') and convert to number
    if (isNaN(Number(value.slice(0, -2)))) {
        return "Error: Invalid width value"; // Return Error: Invalid width value if the remaining string is not a valid number
    }
    // Convert the string to a number
    return Number(value.slice(0, -2));
}

console.log(getBoxWidth('50px')); // 50
console.log(getBoxWidth2('50px')); // 50
console.log(getBoxWidth('100%')); // 100
console.log(getBoxWidth2('100px')); // 100
console.log(getBoxWidth('invalid')); // Error: Invalid width value
console.log(getBoxWidth2('invalid')); // NaN
