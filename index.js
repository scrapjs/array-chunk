'use strict';

module.exports = function (arr, size) {
	if (!Array.isArray(arr) && !ArrayBuffer.isView(arr)) {
		throw new TypeError('must be an array');
	}

	if (arguments.length > 2) {
		throw new Error('uncorrect length');
	}

	size = size || 1;

	var chunk = [];
	for (var i = 0, l = arr.length, group; i < l; i++) {
		if (i % size == 0) {
			group = [];
			chunk.push(group);
		}
		group.push(arr[i]);
	}

	return chunk;
};
