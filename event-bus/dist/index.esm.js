function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var MessageBus = /*#__PURE__*/function () {
  function MessageBus() {
    _classCallCheck(this, MessageBus);
    if (!MessageBus.instance) {
      console.log('MessageBus Singleton Created');
      this.listeners = {};
      MessageBus.instance = this;
    }
    return MessageBus.instance;
  }
  return _createClass(MessageBus, [{
    key: "subscribe",
    value: function subscribe(eventType, callback) {
      if (!this.listeners[eventType]) {
        this.listeners[eventType] = [];
      }
      this.listeners[eventType].push(callback);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventType, callback) {
      if (this.listeners[eventType]) {
        this.listeners[eventType] = this.listeners[eventType].filter(function (cb) {
          return cb !== callback;
        });
      }
    }
  }, {
    key: "publish",
    value: function publish(eventType, data) {
      if (this.listeners[eventType]) {
        this.listeners[eventType].forEach(function (callback) {
          return callback(data);
        });
      }
    }
  }]);
}();
var eventBus = new MessageBus();

export { MessageBus, eventBus };
//# sourceMappingURL=index.esm.js.map
