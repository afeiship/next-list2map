# next-list2map
> Transform list to map.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-list2map
```

## usage
```js
import '@jswork/next-list2map';

const items = [
  { id: 1, name: 'xiaoming' },
  { id: 2, name: 'lihua' },
  { id: 3, name: 'hanmeimei' }
];

const result = nx.list2map(items, {
  key: 'id',
  value: function(i, val) {
    return val;
  }
});

// result:
{
  '1': { id: 1, name: 'xiaoming' },
  '2': { id: 2, name: 'lihua' },
  '3': { id: 3, name: 'hanmeimei' }
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-list2map/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-list2map
[version-url]: https://npmjs.org/package/@jswork/next-list2map

[license-image]: https://img.shields.io/npm/l/@jswork/next-list2map
[license-url]: https://github.com/afeiship/next-list2map/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-list2map
[size-url]: https://github.com/afeiship/next-list2map/blob/master/dist/next-list2map.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-list2map
[download-url]: https://www.npmjs.com/package/@jswork/next-list2map
