"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _eventemitter3 = require("eventemitter3");

var _eventemitter32 = _interopRequireDefault(_eventemitter3);

var _disposables = require("disposables");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _action = require("./action");

var _action2 = _interopRequireDefault(_action);

var Context = (function () {
  function Context() {
    _classCallCheck(this, Context);

    this.actionEmitter = new _eventemitter32["default"]();
    this.storeEmitter = new _eventemitter32["default"]();
    this.actions = {};
    this.stores = {};
  }

  _createClass(Context, [{
    key: "registerActionCreator",
    value: function registerActionCreator(name, actionCreator) {
      var _this = this;

      _lodash2["default"].forEach(actionCreator, function (makeAction, key) {
        _this.actions[name] = _this.actions[name] || {};
        _this.actions[name][key] = function () {
          Promise.resolve(makeAction.apply(undefined, arguments)).then(function (source) {
            var action = _action2["default"].make(source);
            _this.actionEmitter.emit(action.name, action.value);
          })["catch"](function (err) {
            throw err;
          });
        };
      });
    }
  }, {
    key: "registerStore",
    value: function registerStore(name, store) {
      var _this2 = this;

      var CHANGE_EVENT = "change";
      this.stores[name] = {
        onChange: function onChange(callback) {
          _this2.storeEmitter.on(CHANGE_EVENT, callback);
          return new _disposables.Disposable(function () {
            _this2.storeEmitter.removeListener(CHANGE_EVENT, callback);
          });
        }
      };
      store.setup(function (actionName, handler) {
        _this2.actionEmitter.on(actionName, handler);
        return new _disposables.Disposable(function () {
          _this2.actionEmitter.removeListener(actionName, handler);
        });
      }, function () {
        _this2.storeEmitter.emit(CHANGE_EVENT, store);
      });
    }
  }]);

  return Context;
})();

exports["default"] = Context;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs2QkFBeUIsZUFBZTs7OzsyQkFDZixhQUFhOztzQkFDeEIsUUFBUTs7OztzQkFDSCxVQUFVOzs7O0lBRVIsT0FBTztBQUVmLFdBRlEsT0FBTyxHQUVaOzBCQUZLLE9BQU87O0FBR3hCLFFBQUksQ0FBQyxhQUFhLEdBQUcsZ0NBQWtCLENBQUM7QUFDeEMsUUFBSSxDQUFDLFlBQVksR0FBRyxnQ0FBa0IsQ0FBQztBQUN2QyxRQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQixRQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztHQUNsQjs7ZUFQa0IsT0FBTzs7V0FTTCwrQkFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFOzs7QUFDekMsMEJBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUs7QUFDNUMsY0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBSyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlDLGNBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQWE7QUFDckMsaUJBQU8sQ0FDSixPQUFPLENBQUMsVUFBVSw0QkFBUyxDQUFDLENBQzVCLElBQUksQ0FBQyxVQUFDLE1BQU0sRUFBSztBQUNoQixnQkFBTSxNQUFNLEdBQUcsb0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLGtCQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDcEQsQ0FBQyxTQUNJLENBQUMsVUFBQyxHQUFHLEVBQUs7QUFDZCxrQkFBTSxHQUFHLENBQUM7V0FDWCxDQUFDLENBQUM7U0FDTixDQUFDO09BQ0gsQ0FBQyxDQUFDO0tBQ0o7OztXQUVZLHVCQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7OztBQUN6QixVQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7QUFDOUIsVUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztBQUNsQixnQkFBUSxFQUFFLGtCQUFDLFFBQVEsRUFBSztBQUN0QixpQkFBSyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM3QyxpQkFBTyxpQkFuQ1AsVUFBVSxDQW1DWSxZQUFNO0FBQzFCLG1CQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1dBQzFELENBQUMsQ0FBQztTQUNKO09BQ0YsQ0FBQztBQUNGLFdBQUssQ0FBQyxLQUFLLENBQ1QsVUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFLO0FBQ3ZCLGVBQUssYUFBYSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0MsZUFBTyxpQkEzQ1AsVUFBVSxDQTJDWSxZQUFNO0FBQzFCLGlCQUFLLGFBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hELENBQUMsQ0FBQztPQUNKLEVBQ0QsWUFBTTtBQUNKLGVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7T0FDN0MsQ0FDRixDQUFDO0tBQ0g7OztTQS9Da0IsT0FBTzs7O3FCQUFQLE9BQU8iLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50ZW1pdHRlcjNcIjtcbmltcG9ydCB7RGlzcG9zYWJsZX0gZnJvbSBcImRpc3Bvc2FibGVzXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgQWN0aW9uIGZyb20gXCIuL2FjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFjdGlvbkVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5zdG9yZUVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5hY3Rpb25zID0ge307XG4gICAgdGhpcy5zdG9yZXMgPSB7fTtcbiAgfVxuXG4gIHJlZ2lzdGVyQWN0aW9uQ3JlYXRvcihuYW1lLCBhY3Rpb25DcmVhdG9yKSB7XG4gICAgXy5mb3JFYWNoKGFjdGlvbkNyZWF0b3IsIChtYWtlQWN0aW9uLCBrZXkpID0+IHtcbiAgICAgIHRoaXMuYWN0aW9uc1tuYW1lXSA9IHRoaXMuYWN0aW9uc1tuYW1lXSB8fCB7fTtcbiAgICAgIHRoaXMuYWN0aW9uc1tuYW1lXVtrZXldID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgUHJvbWlzZVxuICAgICAgICAgIC5yZXNvbHZlKG1ha2VBY3Rpb24oLi4uYXJncykpXG4gICAgICAgICAgLnRoZW4oKHNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gQWN0aW9uLm1ha2Uoc291cmNlKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uRW1pdHRlci5lbWl0KGFjdGlvbi5uYW1lLCBhY3Rpb24udmFsdWUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZWdpc3RlclN0b3JlKG5hbWUsIHN0b3JlKSB7XG4gICAgY29uc3QgQ0hBTkdFX0VWRU5UID0gXCJjaGFuZ2VcIjtcbiAgICB0aGlzLnN0b3Jlc1tuYW1lXSA9IHtcbiAgICAgIG9uQ2hhbmdlOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZUVtaXR0ZXIub24oQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBuZXcgRGlzcG9zYWJsZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9yZUVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoQ0hBTkdFX0VWRU5ULCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgc3RvcmUuc2V0dXAoXG4gICAgICAoYWN0aW9uTmFtZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbkVtaXR0ZXIub24oYWN0aW9uTmFtZSwgaGFuZGxlcik7XG4gICAgICAgIHJldHVybiBuZXcgRGlzcG9zYWJsZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hY3Rpb25FbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGFjdGlvbk5hbWUsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmVFbWl0dGVyLmVtaXQoQ0hBTkdFX0VWRU5ULCBzdG9yZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG4iXX0=