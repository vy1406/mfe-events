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

var EventBus = /*#__PURE__*/function () {
  function EventBus() {
    _classCallCheck(this, EventBus);
    if (!EventBus.instance) {
      console.log('EventBus: Singleton instance created');
      this.listeners = {};
      EventBus.instance = this;
    }
    return EventBus.instance;
  }
  return _createClass(EventBus, [{
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
var eventBus = new EventBus();

export { eventBus as default };
//# sourceMappingURL=index.esm.js.map
