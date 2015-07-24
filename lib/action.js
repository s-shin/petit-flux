"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _lodash = require("./lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var Action = (function () {
  function Action(name, value) {
    _classCallCheck(this, Action);

    this[0] = name;
    this[1] = value;
    this.name = name;
    this.value = value;
  }

  _createClass(Action, null, [{
    key: "make",
    value: function make(source) {
      if (arguments.length > 2) {
        throw new Error("Invalid arguments.");
      }
      if (arguments.length === 2) {
        return new Action(arguments[0], arguments[1]);
      }
      if (source instanceof Action) {
        return source;
      }
      if (_lodash2["default"].isArray(source)) {
        return new Action(source[0], source[1]);
      }
      if (_lodash2["default"].isObject(source)) {
        return new Action(source.name, source.value);
      }
    }
  }]);

  return Action;
})();

exports["default"] = Action;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3NCQUFjLFVBQVU7Ozs7SUFFSCxNQUFNO0FBRWQsV0FGUSxNQUFNLENBRWIsSUFBSSxFQUFFLEtBQUssRUFBRTswQkFGTixNQUFNOztBQUd2QixRQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2YsUUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNoQixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztHQUNwQjs7ZUFQa0IsTUFBTTs7V0FTZCxjQUFDLE1BQU0sRUFBRTtBQUNsQixVQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3hCLGNBQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztPQUN2QztBQUNELFVBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDMUIsZUFBTyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDL0M7QUFDRCxVQUFJLE1BQU0sWUFBWSxNQUFNLEVBQUU7QUFDNUIsZUFBTyxNQUFNLENBQUM7T0FDZjtBQUNELFVBQUksb0JBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3JCLGVBQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ3pDO0FBQ0QsVUFBSSxvQkFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDdEIsZUFBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUM5QztLQUNGOzs7U0F6QmtCLE1BQU07OztxQkFBTixNQUFNIiwiZmlsZSI6ImFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCIuL2xvZGFzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24ge1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpc1swXSA9IG5hbWU7XG4gICAgdGhpc1sxXSA9IHZhbHVlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG1ha2Uoc291cmNlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50cy5cIik7XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gbmV3IEFjdGlvbihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgfVxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBY3Rpb24pIHtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuICAgIGlmIChfLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIG5ldyBBY3Rpb24oc291cmNlWzBdLCBzb3VyY2VbMV0pO1xuICAgIH1cbiAgICBpZiAoXy5pc09iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gbmV3IEFjdGlvbihzb3VyY2UubmFtZSwgc291cmNlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxufVxuIl19