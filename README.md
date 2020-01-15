# next-list2map
> Transform list to map.

## installation
```bash
npm install -S @feizheng/next-list2map
```

## usage
```js
import '@feizheng/next-list2map';

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
