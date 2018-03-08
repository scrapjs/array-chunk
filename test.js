'use strict';
var assert = require('assert');
var arrayChunk = require('./');

it('should return correct chunk when size is 2', function () {
	assert.deepEqual(arrayChunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

it('should return correct chunk when size is 3', function () {
	assert.deepEqual(arrayChunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
});

it('should return correct chunk without size value (default 1)', function () {
	assert.deepEqual(arrayChunk([1, 'man', 3, 4]), [[1], ['man'], [3], [4]]);
});

it('ignore zero size value', function () {
	assert.deepEqual(arrayChunk([1, 'man', 3, 4], 0), [[1], ['man'], [3], [4]]);
});

it('should throw error when input is incorrect', function () {
	assert.throws(function () {
		arrayChunk('uncorrect');
	});
});

it('should throw error when arguments length > 2', function () {
	assert.throws(function () {
		arrayChunk([1, 2, 3], 2, 3);
	});
});

it('should support typed arrays', function () {
	assert.deepEqual(arrayChunk(new Uint8Array([1, 2, 3, 4]), 2), [[1, 2], [3, 4]]);
});

it('should handle bigger chunk size', function () {
	assert.deepEqual(arrayChunk([1, 2, 3], 5), [[1, 2, 3]]);
})
