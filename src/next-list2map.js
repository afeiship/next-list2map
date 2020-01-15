(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = {
    key: 'id',
    value: function(index, value, array) {
      return value;
    }
  };

  nx.list2map = function(inArray, inOptions) {
    var result = {};
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var getValue = function(inName, inIndex, inItem, inArray) {
      var res =
        typeof options[inName] === 'string'
          ? nx.get(inItem, options[inName])
          : options[inName](inIndex, inItem, inArray);
      return res;
    };
    inArray.forEach(function(value, index) {
      result[getValue('key', index, value, inArray)] = getValue('value', index, value, inArray);
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.list2map;
  }
})();
