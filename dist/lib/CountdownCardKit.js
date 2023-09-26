"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/esnext.weak-map.delete-all.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./CountdownCardKit.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const addLeadingZero = value => {
  return value < 10 ? "0".concat(value) : value;
};
const CountdownCardKit = _ref => {
  let {
    imageUrl,
    endDate,
    title,
    description
  } = _ref;
  const [timeLeft, setTimeLeft] = (0, _react.useState)({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isCountdownOver, setIsCountdownOver] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const futureDate = new Date(endDate);
    const countdownInterval = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(countdownInterval);
    function calculateTimeLeft() {
      const now = new Date().getTime();
      const timeDifference = futureDate - now;
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      }
    }
  }, [endDate]);
  (0, _react.useEffect)(() => {
    setIsCountdownOver(timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0);
  }, [timeLeft]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("main", {
    className: "flex_box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "img_div"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    alt: "gift-img",
    width: "100%"
  })), /*#__PURE__*/_react.default.createElement("aside", {
    className: "aside_div"
  }, /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement("p", null, description), /*#__PURE__*/_react.default.createElement("h3", null, title, " Ends On ", endDate), isCountdownOver ? /*#__PURE__*/_react.default.createElement("p", {
    className: "countdown-ended ".concat(isCountdownOver ? '' : 'hidden')
  }, "Time's up! The countdown has ended. \uD83C\uDF89") : /*#__PURE__*/_react.default.createElement("div", {
    className: "deadline",
    id: "deadline"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "deadline-container"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "box"
  }, addLeadingZero(timeLeft.days)), /*#__PURE__*/_react.default.createElement("span", null, "Day")), /*#__PURE__*/_react.default.createElement("div", {
    className: "deadline-container"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "box"
  }, addLeadingZero(timeLeft.hours)), /*#__PURE__*/_react.default.createElement("span", null, "Hrs")), /*#__PURE__*/_react.default.createElement("div", {
    className: "deadline-container"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "box"
  }, addLeadingZero(timeLeft.minutes)), /*#__PURE__*/_react.default.createElement("span", null, "Min")), /*#__PURE__*/_react.default.createElement("div", {
    className: "deadline-container"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "box"
  }, addLeadingZero(timeLeft.seconds)), /*#__PURE__*/_react.default.createElement("span", null, "Sec"))))));
};
var _default = exports.default = CountdownCardKit;