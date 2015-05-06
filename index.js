'use strict';

module.exports = function (arr, size) {
    if (!Array.isArray(arr)) {
        throw new TypeError('must be an array');
    }

    if (arguments.length > 2) {
        throw new Error('uncorrect length');
    }

    size = size || 1;

	var chunk = [];

    while (arr.length > 0) {
        chunk.push(arr.splice(0, size));
    }

    return chunk;
};
