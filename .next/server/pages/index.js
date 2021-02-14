module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Im+X":
/***/ (function(module, exports) {

module.exports = require("react-mapbox-gl");

/***/ }),

/***/ "NC1Z":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "ObZi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DisplayContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (DisplayContext);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./utils/errorHandler.js
const errorHandler_errors = (msg, err) => {
  const errMsg = msg + err;
  console.log(errMsg);
  return {
    data: null,
    errors: errMsg
  };
};
// CONCATENATED MODULE: ./utils/callAPI.js

const baseURL = "http://louwer-api.herokuapp.com/graphql?";
const callAPI = async q => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  };

  try {
    const res = await fetch(`${baseURL}${q}`, options);
    const json = await res.json();
    return json;
  } catch (err) {
    return errorHandler_errors("error connecting to graphql: ", err);
  }
};
// CONCATENATED MODULE: ./images/Logo.js



const Logo = ({
  className
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
  width: "100",
  height: "35",
  viewBox: "0 0 239 80",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "M3.42426 61.1644V9.00709H12.1088V52.3041H33.7842V61.1644H3.42426Z",
    fill: "white"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "M38.27 35.1934C38.27 28.9278 39.1911 23.7742 41.0333 19.7327C42.8994 15.6673 45.3277 12.6421 48.3182 10.6572C51.3088 8.67229 54.9333 7.67984 59.1919 7.67984C65.3643 7.67984 70.3884 10.0354 74.2642 14.7466C78.1638 19.4577 80.1137 26.1657 80.1137 34.8705C80.1137 43.671 78.0562 50.5464 73.9412 55.4967C70.3286 59.8731 65.4241 62.0612 59.2277 62.0612C52.9835 62.0612 48.0551 59.897 44.4425 55.5685C40.3275 50.6182 38.27 43.8265 38.27 35.1934ZM47.2417 34.8347C47.2417 40.885 48.39 45.4287 50.6868 48.4659C52.9835 51.4791 55.8305 52.9857 59.2277 52.9857C62.6489 52.9857 65.4839 51.4911 67.7328 48.5018C69.9817 45.4885 71.1062 40.8731 71.1062 34.6553C71.1062 28.5571 70.0056 24.0493 67.8046 21.1317C65.6275 18.2141 62.7685 16.7554 59.2277 16.7554C55.6869 16.7554 52.8041 18.2261 50.5791 21.1676C48.3541 24.109 47.2417 28.6647 47.2417 34.8347Z",
    fill: "white"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "M158.737 61.1644V8.57663H190.748V17.4728H167.422V29.1311H189.097V37.9914H167.422V52.3041H191.537V61.1644H158.737Z",
    fill: "white"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "M198.93 61.1644V8.57663H217.268C221.957 8.57663 225.307 9.05492 227.316 10.0115C229.326 10.9442 230.977 12.5823 232.269 14.9259C233.561 17.2456 234.207 20.0316 234.207 23.284C234.207 27.3973 233.214 30.7094 231.228 33.2204C229.266 35.7314 226.467 37.3098 222.83 37.9555C224.697 39.2947 226.24 40.7654 227.46 42.3677C228.68 43.9461 230.343 46.7919 232.448 50.9052L237.688 61.1644H227.316L221 49.7214C218.727 45.5842 217.184 43.0014 216.371 41.9731C215.557 40.9209 214.696 40.2034 213.787 39.8208C212.878 39.4143 211.419 39.211 209.409 39.211H207.615V61.1644H198.93ZM207.615 30.817H214.074C218.022 30.817 220.534 30.6496 221.61 30.3148C222.687 29.9561 223.56 29.2506 224.23 28.1984C224.9 27.1462 225.235 25.7472 225.235 24.0014C225.235 22.3274 224.9 20.9882 224.23 19.9838C223.56 18.9555 222.651 18.25 221.503 17.8674C220.689 17.6043 218.333 17.4728 214.433 17.4728H207.615V30.817Z",
    fill: "white"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "M79.3931 76V80H81.9359L83.015 77.6975L79.3931 76ZM105 53L101.199 54.2459L102.102 57H105V53ZM120.5 43.5L120.225 39.5095L118.989 39.5947L118.017 40.3638L120.5 43.5ZM135 42.5L135.275 46.4905L138.323 46.2803L138.922 43.2846L135 42.5ZM100.575 39.5L104.376 38.2541L103.473 35.5H100.575V39.5ZM129.561 7.50147L126.062 9.44063L129.941 16.4377L133.439 14.4985L129.561 7.50147ZM142.143 5.10056L144.98 2.27985L142.848 0.136663L140.204 1.60203L142.143 5.10056ZM147.164 15.8207L149.985 18.6568L155.657 13.0154L152.836 10.1793L147.164 15.8207ZM96.5 39.5V35.5H93.9572L92.8781 37.8025L96.5 39.5ZM108.5 53V57H109.892L110.983 56.1362L108.5 53ZM0.741333 80H79.3931V72H0.741333V80ZM120.775 47.4905L135.275 46.4905L134.725 38.5095L120.225 39.5095L120.775 47.4905ZM138.922 43.2846L146.402 5.89187L138.558 4.32262L131.078 41.7154L138.922 43.2846ZM96.7738 40.7459L101.199 54.2459L108.801 51.7541L104.376 38.2541L96.7738 40.7459ZM109 80H238.5V72H109V80ZM133.439 14.4985L144.083 8.59908L140.204 1.60203L129.561 7.50147L133.439 14.4985ZM139.307 7.92126L147.164 15.8207L152.836 10.1793L144.98 2.27985L139.307 7.92126ZM83.015 77.6975L100.122 41.1975L92.8781 37.8025L75.7711 74.3025L83.015 77.6975ZM96.5 43.5H100.575V35.5H96.5V43.5ZM105 57H108.5V49H105V57ZM110.983 56.1362L122.983 46.6362L118.017 40.3638L106.017 49.8638L110.983 56.1362Z",
    fill: "white"
  })]
});

/* harmony default export */ var images_Logo = (Logo);
// CONCATENATED MODULE: ./components/Slogan.js





function Slogan() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: "flex justify-between items-center",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(images_Logo, {
      align: "left",
      className: "h-10 text-left mr-auto"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "space-y-0 text-white text-center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "https://www.classy.org/give/267006/#!/donation/checkout",
        children: "donnez / donate"
      })
    })]
  });
}

/* harmony default export */ var components_Slogan = (Slogan);
// EXTERNAL MODULE: ./components/DisplayContext.js
var DisplayContext = __webpack_require__("ObZi");

// CONCATENATED MODULE: ./components/Post/Header.js



function Header({
  children
}) {
  const [Title, PriceTag, Location] = children;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: "flex items-center h-20 mb-4",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex-1 min-w-0 mr-2",
      children: [Title, Location]
    }), PriceTag]
  });
}

/* harmony default export */ var Post_Header = (Header);
// CONCATENATED MODULE: ./components/ImageSlider.js




const ImageSlider = ({
  images
}) => {
  const {
    0: index,
    1: setIndex
  } = Object(external_react_["useState"])(0);

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    console.log('slideLeft');
    const nextIndex = index - 1;
    nextIndex < 0 ? setIndex(images.length - 1) : setIndex(nextIndex);
  };

  return images.length > 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-full flex space-y-2 my-3",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: "w-8 text-2xl text-teal",
      onClick: slideLeft,
      children: "◀"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: "flex-1 justify-center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: "mx-auto",
        src: images[index],
        alt: index
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: "w-8 text-2xl text-teal",
      onClick: slideRight,
      children: "▶"
    })]
  });
};

/* harmony default export */ var components_ImageSlider = (ImageSlider);
// CONCATENATED MODULE: ./components/Post/Images.js




const Images = ({
  children,
  className
}) => {
  if (!children || children.length <= 1) return false;
  const images = JSON.parse(children);
  const classNames = `imageContainer text-center ${className || ''}`;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classNames,
    children: images.length < 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("em", {
      className: "text-center w-full",
      children: "no images"
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImageSlider, {
      images: images
    })
  });
};

/* harmony default export */ var Post_Images = (Images);
// CONCATENATED MODULE: ./components/Post/Title.js



const Title_Title = ({
  trunc,
  children,
  className
}) => children ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
  className: className,
  title: children,
  children: children.length > trunc ? children.substr(0, trunc) + '...' : children
}) : false;

/* harmony default export */ var Post_Title = (Title_Title);
// CONCATENATED MODULE: ./components/Post/PriceTag.js



const PriceTag_PriceTag = ({
  children,
  className
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: `pricetag ${className}`,
  children: children
});

/* harmony default export */ var Post_PriceTag = (PriceTag_PriceTag);
// CONCATENATED MODULE: ./images/Pin.js


const Pin = ({
  className
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  className: className,
  width: "12",
  height: "15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    d: "M6.80626 0.0186396C9.70505 0.247823 11.9692 2.96528 11.6695 5.854C11.4604 7.86376 9.92668 10.7701 7.42077 13.893C6.31515 15.2757 6.24715 15.2908 5.46894 14.3388C1.86497 9.94152 0.333721 6.33503 1.05905 3.96261C1.84986 1.37359 4.13162 -0.190395 6.80626 0.0186396ZM5.77368 2.87965C4.59502 3.1038 3.70851 4.19683 3.70851 5.42334C3.70851 7.96702 7.02537 8.96938 8.44076 6.85132C9.70757 4.95489 8.02521 2.45151 5.77368 2.87965Z",
    fill: "#ED0010"
  })
});

/* harmony default export */ var images_Pin = (Pin);
// CONCATENATED MODULE: ./components/Mapbox/MapContext.js

const MapContext = /*#__PURE__*/Object(external_react_["createContext"])([{}, () => {}]);
/* harmony default export */ var Mapbox_MapContext = (MapContext);
// CONCATENATED MODULE: ./components/Post/Location.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Location_Location = ({
  post,
  setShowPopup
}) => {
  const {
    0: mapSettings,
    1: setMapSettings
  } = Object(external_react_["useContext"])(Mapbox_MapContext);

  const flyToLoc = post => {
    setMapSettings(_objectSpread(_objectSpread({}, mapSettings), {}, {
      currentPost: post,
      zoom: [12],
      center: [post.longitude, post.latitude - 0.007]
    }));
    setShowPopup(post.id);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("address", {
    className: "flex items-center justify-left",
    onClick: () => flyToLoc(post),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(images_Pin, {
      className: "mr-1 flex-0"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
      title: post.location,
      className: "text-sm truncate",
      children: post.location
    }), "\xA0", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
      className: "flex-0",
      children: ["(", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "border-b-2 border-dotted border-gray-400 cursor-pointer",
        children: "show"
      }), ")"]
    })]
  });
};

/* harmony default export */ var Post_Location = (Location_Location);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__("NC1Z");

// CONCATENATED MODULE: ./components/Post/index.js











const Post = ({
  data,
  setShowPopup
}) => {
  if (!data) return false;
  const {
    title,
    price,
    images,
    text,
    link
  } = data;
  const dimensions = Object(external_react_["useContext"])(DisplayContext["a" /* default */]);
  const w = dimensions.width;
  const trunc = w < 640 ? w / 8 : w / 22;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
    className: "relative border-solid border-2 border-red-400 bg-white rounded-xl p-5",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Post_Header, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Post_Title, {
        trunc: trunc,
        linkTo: link,
        className: "mb-1 p-0 text-2xl flex-1",
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Post_PriceTag, {
        className: "w-20 h-20 text-xl flex-0",
        children: price
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Post_Location, {
        post: data,
        setShowPopup: setShowPopup
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Post_Images, {
      children: images
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "my-3",
      children: text
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
      className: "bg-teal flex justify-center space-x-2 items-center rounded text-white w-full p-2",
      onClick: () => window.open(link),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_feather_["Facebook"], {
        size: 20
      }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: "voir/view facebook post"
      })]
    })]
  });
};

/* harmony default export */ var components_Post = (Post);
// CONCATENATED MODULE: ./components/Posts.js


function Posts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Posts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Posts_ownKeys(Object(source), true).forEach(function (key) { Posts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Posts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Posts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Posts = ({
  children,
  refs,
  setRefs,
  setShowPopup
}) => {
  Object(external_react_["useEffect"])(() => {
    const refList = children.reduce((acc, post) => {
      acc[post.id] = /*#__PURE__*/Object(external_react_["createRef"])();
      return acc;
    }, {});
    setRefs(Posts_objectSpread({}, refList));
  }, [children]);
  if (!children || children.length <= 1 || !refs) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("em", {
    children: "Loading..."
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
    className: "z-0 bg-beige",
    children: children.map(post => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      ref: refs[post.id],
      className: "mb-4",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Post, {
        data: post,
        setShowPopup: setShowPopup
      })
    }, post.id))
  });
};

/* harmony default export */ var components_Posts = (Posts);
// CONCATENATED MODULE: ./components/Button.js



const Button = ({
  children,
  className,
  onClick,
  id,
  type
}) => {
  const buttons = {
    primary: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      id: id,
      className: `btn-primary ${className || ''}`,
      onClick: onClick,
      children: children
    }),
    secondary: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      id: id,
      className: `btn-secondary ${className || ''}`,
      onClick: onClick,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "mx-auto border-dotted border-b-2 border-teal",
        children: children
      })
    })
  };
  return buttons[type || 'primary'];
};

/* harmony default export */ var components_Button = (Button);
// CONCATENATED MODULE: ./components/Filters/index.js





function Filters({
  children,
  setPosts
}) {
  if (!children || children.length <= 1) return false;

  const sortByPrice = dir => {
    const sorted = children.sort((a, b) => dir === 'ASC' ? a.price - b.price : b.price - a.price);
    setPosts([...sorted]);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "h-12 text-center space-x-3",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Button, {
      type: "secondary",
      id: "sortAsc",
      onClick: () => sortByPrice('ASC'),
      children: "$ \u2193"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Button, {
      type: "secondary",
      id: "sortDesc",
      onClick: () => sortByPrice('DESC'),
      children: "$ \u2191"
    })]
  });
}

/* harmony default export */ var components_Filters = (Filters);
// EXTERNAL MODULE: external "react-mapbox-gl"
var external_react_mapbox_gl_ = __webpack_require__("Im+X");
var external_react_mapbox_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_mapbox_gl_);

// CONCATENATED MODULE: ./components/Mapbox/coords.js
const gravesiteCoords = () => {
  let r = 0.00396;
  let n = Math.random() < .5 ? -1 : 1;
  let x = r * Math.random() * n;
  let spots = [[-73.609270 + x, 45.499805 + x], [-73.605279 + x, 45.503174 + x], [-73.597597 + x, 45.504768 + x], [-73.598026 + x, 45.508106 + x]];
  let spot = Math.floor(Math.random() * spots.length);
  return {
    lng: spots[spot][0],
    lat: spots[spot][1]
  };
};

const getCoords = post => post.location === 'Montréal, Québec' ? gravesiteCoords() : {
  lng: post.longitude,
  lat: post.latitude
};
// CONCATENATED MODULE: ./components/Mapbox/MarkerPopup.js



 // @TODO: getCoords re-renders on every state change
// which moves the markers randomly (as getCoords does)
// better to set random coords when fetching or initially saving data

const MarkerPopup = ({
  post,
  expandMarker
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_mapbox_gl_["Marker"], {
      coordinates: [getCoords(post).lng, getCoords(post).lat],
      anchor: "center",
      onClick: () => expandMarker(post),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: markerClass(post)
      })
    }, post.id)
  });
};

const markerClass = post => post.location === 'Montréal, Québec' ? "marker-dot" : "marker-pilon";

/* harmony default export */ var Mapbox_MarkerPopup = (MarkerPopup);
// CONCATENATED MODULE: ./components/Mapbox/PopUpCard.js










const PopupCard = ({
  post,
  refs
}) => {
  if (!post) return false;
  const display = Object(external_react_["useContext"])(DisplayContext["a" /* default */]);
  const trunc = display.width / 18;

  const scrollToRef = id => refs[id].current.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("aside", {
    className: "pop-up rounded-sm shadow-xl p-4 bg-white top-1/2 w-64 mx-auto text-sm sm:h-60",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "relative w-full text-center -top-12 -mb-12 select-none text-white text-5xl",
      children: "\u25B2"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "sm:h-full sm:overflow-scroll",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
        className: "relative flex items-center h-10 text-sm",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Post_Title, {
          trunc: trunc,
          linkTo: post.link,
          className: "p-0 flex-1 mr-2 text-md",
          children: post.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Post_PriceTag, {
          className: "w-10 h-10 text-sm",
          children: post.price
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Post_Images, {
        className: "hidden sm:block",
        children: post.images
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "hidden sm:block sm:my-3",
        children: post.text
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        className: "flex",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Button, {
          type: "primary",
          className: "flex-1",
          onClick: () => window.open(post.link),
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: "flex items-center justify-center space-x-2",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_feather_["Facebook"], {
              size: 16
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: "voir/view post"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Button, {
          type: "secondary",
          className: "px-4",
          onClick: () => scrollToRef(post.id),
          children: "show"
        })]
      })]
    })]
  });
};

/* harmony default export */ var PopUpCard = (PopupCard);
// EXTERNAL MODULE: ./node_modules/mapbox-gl/dist/mapbox-gl.css
var mapbox_gl = __webpack_require__("rG3h");

// CONCATENATED MODULE: ./components/Mapbox/index.js



function Mapbox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Mapbox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Mapbox_ownKeys(Object(source), true).forEach(function (key) { Mapbox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Mapbox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Mapbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Map = external_react_mapbox_gl_default()({
  accessToken: "pk.eyJ1IjoiYXBpbnJpc2UiLCJhIjoiY2loNmlleW90MDAxZXV6a2xvOHk4dmtiayJ9.DQIpdFRkH_I7uU7VzGCvOw"
});

const Mapbox = ({
  refs,
  children,
  setShowPopup,
  showPopup
}) => {
  var _mapSettings$currentP;

  if (!children || children.length <= 1) return false;
  const {
    0: mapSettings,
    1: setMapSettings
  } = Object(external_react_["useContext"])(Mapbox_MapContext);

  const expandMarker = post => {
    setMapSettings(Mapbox_objectSpread(Mapbox_objectSpread({}, mapSettings), {}, {
      zoom: [12],
      currentPost: post,
      center: [post.longitude, post.latitude - 0.007]
    }));
    setShowPopup(post.id);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Map, {
    style: "mapbox://styles/mapbox/streets-v11",
    center: mapSettings.center,
    zoom: mapSettings.zoom,
    onDrag: () => setShowPopup(false),
    containerStyle: {
      height: '100%',
      width: '100%'
    },
    children: [children.map(post => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Mapbox_MarkerPopup, {
      post: post,
      refs: refs,
      showPopup: showPopup,
      expandMarker: expandMarker
    }, post.id)), ((_mapSettings$currentP = mapSettings.currentPost) === null || _mapSettings$currentP === void 0 ? void 0 : _mapSettings$currentP.id) === showPopup && /*#__PURE__*/Object(jsx_runtime_["jsx"])(PopUpCard, {
      post: mapSettings.currentPost,
      refs: refs,
      anchor: "top",
      offset: {
        'top': [0, -38]
      }
    })]
  });
};

/* harmony default export */ var components_Mapbox = (Mapbox);
// CONCATENATED MODULE: ./pages/index.js










function Home() {
  const {
    0: posts,
    1: setPosts
  } = Object(external_react_["useState"])([]);
  const {
    0: refs,
    1: setRefs
  } = Object(external_react_["useState"])(null);
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])();
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(external_react_["useState"])();
  const mapSettings = Object(external_react_["useState"])({
    center: [-73.55335998535156, 45.509063720703125],
    zoom: [10],
    currentPost: undefined
  });
  Object(external_react_["useEffect"])(() => {
    const query = `query={ posts {
      id, title, price, location, latitude, longitude,images, text, link, group { id, name } }
    }`;
    callAPI(query).then(res => res.data ? setPosts([...res.data.posts]) : setErrors("cannot connect to api"));
  }, []);
  if (errors) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: errors
  });
  if (!posts || posts.length <= 1) return false;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Mapbox_MapContext.Provider, {
    value: mapSettings,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "slogan",
      className: " w-full p-5 bg-red-600 z-10 sm:w-1/2 ",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Slogan, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "sticky top-0 z-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "mapbox",
        className: " w-full h-64 top-20 sm:w-1/2 sm:h-screen sm:top-0 sm:right-0 sm:fixed ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Mapbox, {
          refs: refs,
          showPopup: showPopup,
          setShowPopup: setShowPopup,
          children: posts
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "filters",
        className: " w-full bg-beige pt-2 z-10 sm:w-1/2 sm:top-0 ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Filters, {
          setPosts: setPosts,
          children: posts
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "posts",
      className: " w-full px-3 bg-beige sm:w-1/2 ",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Posts, {
        refs: refs,
        setRefs: setRefs,
        showPopup: showPopup,
        setShowPopup: setShowPopup,
        children: posts
      })
    })]
  });
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rG3h":
/***/ (function(module, exports) {



/***/ })

/******/ });