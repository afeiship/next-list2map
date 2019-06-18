var nx = require('next-js-core2');
require('../src/next-list2map');

test('nx.list2map', function() {
  var items = [
    { id: 1, name: 'xiaoming' },
    { id: 2, name: 'lihua' },
    { id: 3, name: 'hanmeimei' }
  ];

  var rs1 = nx.list2map(items, {
    key: 'id',
    value: function(i, val) {
      return val;
    }
  });

  var rs2 = nx.list2map(items, {
    key: function(i, value) {
      return i + '_' + value.name;
    },
    value: function(i, val) {
      return {
        username: val.name
      };
    }
  });

  expect(rs1).toEqual({
    '1': { id: 1, name: 'xiaoming' },
    '2': { id: 2, name: 'lihua' },
    '3': { id: 3, name: 'hanmeimei' }
  });

  expect(rs2).toEqual({
    '0_xiaoming': { username: 'xiaoming' },
    '1_lihua': { username: 'lihua' },
    '2_hanmeimei': { username: 'hanmeimei' }
  });
});
