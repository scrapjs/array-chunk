# array-chunk

> Chunk array on small pieces


## Install

```
$ npm install --save array-chunk
```


## Usage

```js
var arrayChunk = require('array-chunk');

arrayChunk([1, 2, 3, 4], 2);
//=> [[1, 2], [3, 4]]
```


## API

### arrayChunk(arr, size)

#### arr

*Required*
Type: `array` | [`TypedArray`](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

Your array

#### size

*Required*
Type: `number`

Length of nested array , default `1`

## Related

* [flatten-vertex-data](https://github.com/glo-js/flatten-vertex-data) − flattens array data.

## License

MIT © [hzlmn](github.com/hzlmn)
