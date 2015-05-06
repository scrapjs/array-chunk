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
Type: `array`

Your array

#### size

*Required*
Type: `number`

Length of nested array , default 1


## License

MIT © [drKraken](http://drkraken.github.io)
