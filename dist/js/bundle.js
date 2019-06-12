/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_drag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/drag */ "./src/js/components/drag.js");
/* harmony import */ var _components_drag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_drag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_addCandidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addCandidate */ "./src/js/components/addCandidate.js");
/* harmony import */ var _components_addCandidate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_addCandidate__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/components/addCandidate.js":
/*!*******************************************!*\
  !*** ./src/js/components/addCandidate.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var addPerson = document.querySelectorAll('.add-person');
var peopleList = document.querySelector('.people');
var people = JSON.parse(localStorage.getItem('people')) || [];
var contactList = document.querySelector('#contact');
var dialogueList = document.querySelector('#dialogue');
var interviewList = document.querySelector('#interview');
var offerList = document.querySelector('#offer');
var terminationList = document.querySelector('#termination');

var ID = function ID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

function addCandidate(e) {
  e.preventDefault();
  var name = this.querySelector('[name=name]').value;
  var age = this.querySelector('[name=age]').value;
  var email = this.querySelector('[name=email]').value;
  var address = this.querySelector('[name=address]').value;
  var image = this.querySelector('[name=image]').value;
  var stage = this.querySelector('[name=stage]').value;
  var userID = ID();
  var person = {
    name: name,
    age: age,
    email: email,
    address: address,
    image: image,
    stage: stage,
    userID: userID
  };
  console.log(person);
  people.push(person);
  populateList(people, peopleList);
  localStorage.setItem('people', JSON.stringify(people));
  this.reset();
}

function populateList() {
  var people = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var peopleList = arguments.length > 1 ? arguments[1] : undefined;
  people.map(function (p) {
    if (p.stage === 'Kontakt') {
      contactList.innerHTML = people.filter(function (person) {
        return person.stage === 'Kontakt';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p>").concat(person.name, "</p>\n        <p>").concat(person.age, "</p>\n        <p>").concat(person.email, "</p>\n        <p>").concat(person.address, "</p>\n        <p>").concat(person.image, "</p>\n        <p >").concat(person.stage, "</span>\n        <p>").concat(person.userID, "</p>\n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Dialog') {
      dialogueList.innerHTML = people.filter(function (person) {
        return person.stage === 'Dialog';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p>").concat(person.name, "</p>\n        <p>").concat(person.age, "</p>\n        <p>").concat(person.email, "</p>\n        <p>").concat(person.address, "</p>\n        <p>").concat(person.image, "</p>\n        <p >").concat(person.stage, "</span>\n        <p>").concat(person.userID, "</p>\n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Intervju') {
      interviewList.innerHTML = people.filter(function (person) {
        return person.stage === 'Intervju';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p>").concat(person.name, "</p>\n        <p>").concat(person.age, "</p>\n        <p>").concat(person.email, "</p>\n        <p>").concat(person.address, "</p>\n        <p>").concat(person.image, "</p>\n        <p >").concat(person.stage, "</span>\n        <p>").concat(person.userID, "</p>\n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Erbjudande') {
      offerList.innerHTML = people.filter(function (person) {
        return person.stage === 'Erbjudande';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p>").concat(person.name, "</p>\n        <p>").concat(person.age, "</p>\n        <p>").concat(person.email, "</p>\n        <p>").concat(person.address, "</p>\n        <p>").concat(person.image, "</p>\n        <p >").concat(person.stage, "</span>\n        <p>").concat(person.userID, "</p>\n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Avslutad') {
      terminationList.innerHTML = people.filter(function (person) {
        return person.stage === 'Avslutad';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p>").concat(person.name, "</p>\n        <p>").concat(person.age, "</p>\n        <p>").concat(person.email, "</p>\n        <p>").concat(person.address, "</p>\n        <p>").concat(person.image, "</p>\n        <p >").concat(person.stage, "</span>\n        <p>").concat(person.userID, "</p>\n      </div>\n    ");
      }).join('');
    }
  });
}

addPerson.forEach(function (person) {
  return person.addEventListener('submit', addCandidate);
});
populateList(people, peopleList);

/***/ }),

/***/ "./src/js/components/drag.js":
/*!***********************************!*\
  !*** ./src/js/components/drag.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function dragstart_handler(ev) {
  console.log('dragStart'); // Add the target element's id to the data transfer object

  ev.dataTransfer.setData('text/plain', ev.target.id);
  ev.dataTransfer.dropEffect = 'move';
}

function dragover_handler(ev) {
  ev.preventDefault(); // Set the dropEffect to move

  ev.dataTransfer.dropEffect = 'move';
}

function drop_handler(ev, el) {
  ev.preventDefault(); // Get the id of the target and add the moved element to the target's DOM

  var data = ev.dataTransfer.getData('text/plain');
  console.log(data);
  el.appendChild(document.getElementById(data));
} // Bind fn to the window
// window.foo = foo;


window.dragstart_handler = dragstart_handler;
window.dragover_handler = dragover_handler;
window.drop_handler = drop_handler;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZGRDYW5kaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZHJhZy5qcyJdLCJuYW1lcyI6WyJhZGRQZXJzb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwZW9wbGVMaXN0IiwicXVlcnlTZWxlY3RvciIsInBlb3BsZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb250YWN0TGlzdCIsImRpYWxvZ3VlTGlzdCIsImludGVydmlld0xpc3QiLCJvZmZlckxpc3QiLCJ0ZXJtaW5hdGlvbkxpc3QiLCJJRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImFkZENhbmRpZGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ2YWx1ZSIsImFnZSIsImVtYWlsIiwiYWRkcmVzcyIsImltYWdlIiwic3RhZ2UiLCJ1c2VySUQiLCJwZXJzb24iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBvcHVsYXRlTGlzdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZXNldCIsIm1hcCIsInAiLCJpbm5lckhUTUwiLCJmaWx0ZXIiLCJpIiwiam9pbiIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhZ3N0YXJ0X2hhbmRsZXIiLCJldiIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJpZCIsImRyb3BFZmZlY3QiLCJkcmFnb3Zlcl9oYW5kbGVyIiwiZHJvcF9oYW5kbGVyIiwiZWwiLCJkYXRhIiwiZ2V0RGF0YSIsImFwcGVuZENoaWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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LENBQUNOLFlBQVAsR0FBc0JBLFlBQXRCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvZHJhZyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRDYW5kaWRhdGUnO1xuIiwiY29uc3QgYWRkUGVyc29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1wZXJzb24nKTtcbmNvbnN0IHBlb3BsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVvcGxlJyk7XG5jb25zdCBwZW9wbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZW9wbGUnKSkgfHwgW107XG5jb25zdCBjb250YWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG5jb25zdCBkaWFsb2d1ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9ndWUnKTtcbmNvbnN0IGludGVydmlld0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW50ZXJ2aWV3Jyk7XG5jb25zdCBvZmZlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb2ZmZXInKTtcbmNvbnN0IHRlcm1pbmF0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXJtaW5hdGlvbicpO1xuXG5jb25zdCBJRCA9IGZ1bmN0aW9uKCkge1xuICAvLyBNYXRoLnJhbmRvbSBzaG91bGQgYmUgdW5pcXVlIGJlY2F1c2Ugb2YgaXRzIHNlZWRpbmcgYWxnb3JpdGhtLlxuICAvLyBDb252ZXJ0IGl0IHRvIGJhc2UgMzYgKG51bWJlcnMgKyBsZXR0ZXJzKSwgYW5kIGdyYWIgdGhlIGZpcnN0IDkgY2hhcmFjdGVyc1xuICAvLyBhZnRlciB0aGUgZGVjaW1hbC5cbiAgcmV0dXJuIChcbiAgICAnXycgK1xuICAgIE1hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygzNilcbiAgICAgIC5zdWJzdHIoMiwgOSlcbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGFkZENhbmRpZGF0ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9bmFtZV0nKS52YWx1ZTtcbiAgY29uc3QgYWdlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZ2VdJykudmFsdWU7XG4gIGNvbnN0IGVtYWlsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1lbWFpbF0nKS52YWx1ZTtcbiAgY29uc3QgYWRkcmVzcyA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9YWRkcmVzc10nKS52YWx1ZTtcbiAgY29uc3QgaW1hZ2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWltYWdlXScpLnZhbHVlO1xuICBjb25zdCBzdGFnZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9c3RhZ2VdJykudmFsdWU7XG4gIGNvbnN0IHVzZXJJRCA9IElEKCk7XG5cbiAgY29uc3QgcGVyc29uID0ge1xuICAgIG5hbWUsXG4gICAgYWdlLFxuICAgIGVtYWlsLFxuICAgIGFkZHJlc3MsXG4gICAgaW1hZ2UsXG4gICAgc3RhZ2UsXG4gICAgdXNlcklEXG4gIH07XG5cbiAgY29uc29sZS5sb2cocGVyc29uKTtcblxuICBwZW9wbGUucHVzaChwZXJzb24pO1xuICBwb3B1bGF0ZUxpc3QocGVvcGxlLCBwZW9wbGVMaXN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHBlb3BsZSkpO1xuICB0aGlzLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTGlzdChwZW9wbGUgPSBbXSwgcGVvcGxlTGlzdCkge1xuICBwZW9wbGUubWFwKHAgPT4ge1xuICAgIGlmIChwLnN0YWdlID09PSAnS29udGFrdCcpIHtcbiAgICAgIGNvbnRhY3RMaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdLb250YWt0JylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgPHA+JHtwZXJzb24ubmFtZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHAgPiR7cGVyc29uLnN0YWdlfTwvc3Bhbj5cbiAgICAgICAgPHA+JHtwZXJzb24udXNlcklEfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdEaWFsb2cnKSB7XG4gICAgICBkaWFsb2d1ZUxpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0RpYWxvZycpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5pbWFnZX08L3A+XG4gICAgICAgIDxwID4ke3BlcnNvbi5zdGFnZX08L3NwYW4+XG4gICAgICAgIDxwPiR7cGVyc29uLnVzZXJJRH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICAgIGlmIChwLnN0YWdlID09PSAnSW50ZXJ2anUnKSB7XG4gICAgICBpbnRlcnZpZXdMaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdJbnRlcnZqdScpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5pbWFnZX08L3A+XG4gICAgICAgIDxwID4ke3BlcnNvbi5zdGFnZX08L3NwYW4+XG4gICAgICAgIDxwPiR7cGVyc29uLnVzZXJJRH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICAgIGlmIChwLnN0YWdlID09PSAnRXJianVkYW5kZScpIHtcbiAgICAgIG9mZmVyTGlzdC5pbm5lckhUTUwgPSBwZW9wbGVcbiAgICAgICAgLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnN0YWdlID09PSAnRXJianVkYW5kZScpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5pbWFnZX08L3A+XG4gICAgICAgIDxwID4ke3BlcnNvbi5zdGFnZX08L3NwYW4+XG4gICAgICAgIDxwPiR7cGVyc29uLnVzZXJJRH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICAgIGlmIChwLnN0YWdlID09PSAnQXZzbHV0YWQnKSB7XG4gICAgICB0ZXJtaW5hdGlvbkxpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0F2c2x1dGFkJylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgPHA+JHtwZXJzb24ubmFtZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHAgPiR7cGVyc29uLnN0YWdlfTwvc3Bhbj5cbiAgICAgICAgPHA+JHtwZXJzb24udXNlcklEfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5hZGRQZXJzb24uZm9yRWFjaChwZXJzb24gPT4gcGVyc29uLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZENhbmRpZGF0ZSkpO1xuXG5wb3B1bGF0ZUxpc3QocGVvcGxlLCBwZW9wbGVMaXN0KTtcbiIsImZ1bmN0aW9uIGRyYWdzdGFydF9oYW5kbGVyKGV2KSB7XG4gIGNvbnNvbGUubG9nKCdkcmFnU3RhcnQnKTtcbiAgLy8gQWRkIHRoZSB0YXJnZXQgZWxlbWVudCdzIGlkIHRvIHRoZSBkYXRhIHRyYW5zZmVyIG9iamVjdFxuICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2LnRhcmdldC5pZCk7XG4gIGV2LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xufVxuXG5mdW5jdGlvbiBkcmFnb3Zlcl9oYW5kbGVyKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIFNldCB0aGUgZHJvcEVmZmVjdCB0byBtb3ZlXG4gIGV2LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xufVxuXG5mdW5jdGlvbiBkcm9wX2hhbmRsZXIoZXYsIGVsKSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIEdldCB0aGUgaWQgb2YgdGhlIHRhcmdldCBhbmQgYWRkIHRoZSBtb3ZlZCBlbGVtZW50IHRvIHRoZSB0YXJnZXQncyBET01cbiAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSkpO1xufVxuXG4vLyBCaW5kIGZuIHRvIHRoZSB3aW5kb3dcbi8vIHdpbmRvdy5mb28gPSBmb287XG5cbndpbmRvdy5kcmFnc3RhcnRfaGFuZGxlciA9IGRyYWdzdGFydF9oYW5kbGVyO1xud2luZG93LmRyYWdvdmVyX2hhbmRsZXIgPSBkcmFnb3Zlcl9oYW5kbGVyO1xud2luZG93LmRyb3BfaGFuZGxlciA9IGRyb3BfaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=