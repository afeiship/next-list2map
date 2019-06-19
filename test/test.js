var nx = require('next-js-core2');
require('../src/next-list2map');
var items = [];
var deepItems = [];

beforeEach(() => {
  items = [
    { id: 1, name: 'xiaoming' },
    { id: 2, name: 'lihua' },
    { id: 3, name: 'hanmeimei' }
  ];
  deepItems = require('./data/deep-data');
});

describe('Basic test', () => {
  test('set key/value', function() {
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

  test('when key is null', () => {
    var rs = nx.list2map(items, {
      value: function(i, val) {
        return i + '_' + val.name;
      }
    });

    expect(rs).toEqual({
      1: '0_xiaoming',
      2: '1_lihua',
      3: '2_hanmeimei'
    });
  });

  test('when value is null', function() {
    var res = nx.list2map(items, {
      key: (i, value) => {
        return value.name;
      }
    });

    expect(res).toEqual({
      xiaoming: { id: 1, name: 'xiaoming' },
      lihua: { id: 2, name: 'lihua' },
      hanmeimei: { id: 3, name: 'hanmeimei' }
    });
  });

  test('when key is a dot path', () => {
    var res = nx.list2map(deepItems, {
      key: 'address.country'
    });
    expect(res['USA'].page).toBe(100);
  });
});

describe('Bussiness Test', () => {
  test('✈️ To be done ---', () => {
    expect('a' === 'a').toBeTruthy();
  });
});
