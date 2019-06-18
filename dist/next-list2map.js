/*!
 * name: next-list2map
 * url: https://github.com/afeiship/next-list2map
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var isString = function(inValue) {
    return typeof inValue === 'string';
  };
  var DEFAULT_OPTIONS = {
    key: 'id',
    value: function(inValue) {
      return inValue;
    }
  };

  nx.list2map = function(inArray, inOptions) {
    var result = {};
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var getValue = function(inName, inIndex, inItem, inArray) {
      var res = isString(options[inName])
        ? nx.get(inItem, options[inName])
        : options[inName](inIndex, inItem, inArray);
      return res;
    };
    inArray.forEach(function(value, index) {
      result[getValue('key', index, value, inArray)] = getValue(
        'value',
        index,
        value,
        inArray
      );
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.list2map;
  }
})();