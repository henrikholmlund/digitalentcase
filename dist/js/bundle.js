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
/* harmony import */ var _components_updateCandidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/updateCandidate */ "./src/js/components/updateCandidate.js");
/* harmony import */ var _components_moduletest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/moduletest */ "./src/js/components/moduletest.mjs");





/***/ }),

/***/ "./src/js/components/addCandidate.js":
/*!*******************************************!*\
  !*** ./src/js/components/addCandidate.js ***!
  \*******************************************/
/*! exports provided: populateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateList", function() { return populateList; });
var addPerson = document.querySelectorAll('.add-person');
var peopleList = document.querySelector('.people');
var people = JSON.parse(localStorage.getItem('people')) || [];
var contactList = document.querySelector('#contact');
var contactList_childNodes = contactList.childNodes;
console.log(contactList_childNodes);
var dialogueList = document.querySelector('#dialogue');
var interviewList = document.querySelector('#interview');
var offerList = document.querySelector('#offer');
var terminationList = document.querySelector('#termination');

var ID = function ID() {
  // Create a unique id for each person appended to the DOM
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
  contactList.innerHTML = '';
  dialogueList.innerHTML = '';
  interviewList.innerHTML = '';
  offerList.innerHTML = '';
  terminationList.innerHTML = '';
  people.map(function (p) {
    if (p.stage === 'Kontakt') {
      contactList.innerHTML = people.filter(function (person) {
        return person.stage === 'Kontakt';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p contenteditable=\"true\" name=\"name\">").concat(person.name, "</p>\n        <p contenteditable=\"true\" name=\"age\">").concat(person.age, "</p>\n        <p contenteditable=\"true\" name=\"email\">").concat(person.email, "</p>\n        <p contenteditable=\"true\" name=\"address\">").concat(person.address, "</p>\n        <p contenteditable=\"true\" name=\"image\">").concat(person.image, "</p>\n        <select class=\"stage-select\" name=\"stage\">\n              <option value=\"\">-Rekryteringssteg-</option>\n              <option value=\"Kontakt\" selected>Kontakt</option>\n              <option value=\"Dialog\">Dialog</option>\n              <option value=\"Intervju\">Intervju</option>\n              <option value=\"Erbjudande\">Erbjudande</option>\n              <option value=\"Avslutad\" >Avslutad</option>\n        </select>\n        <p >").concat(person.userID, "</p>\n        <button>\xC4ndra</button>\n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Dialog') {
      dialogueList.innerHTML = people.filter(function (person) {
        return person.stage === 'Dialog';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p>").concat(person.name, "</p>\n        <p>").concat(person.age, "</p>\n        <p>").concat(person.email, "</p>\n        <p>").concat(person.address, "</p>\n        <p>").concat(person.image, "</p>\n        <p >").concat(person.stage, "</p>\n        <p>").concat(person.userID, "</p>\n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Intervju') {
      interviewList.innerHTML = people.filter(function (person) {
        return person.stage === 'Intervju';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p>").concat(person.name, "</p>\n        <p>").concat(person.age, "</p>\n        <p>").concat(person.email, "</p>\n        <p>").concat(person.address, "</p>\n        <p>").concat(person.image, "</p>\n        <p>").concat(person.stage, "</p>\n        <p>").concat(person.userID, "</p>\n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Erbjudande') {
      offerList.innerHTML = people.filter(function (person) {
        return person.stage === 'Erbjudande';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p>").concat(person.name, "</p>\n        <p>").concat(person.age, "</p>\n        <p>").concat(person.email, "</p>\n        <p>").concat(person.address, "</p>\n        <p>").concat(person.image, "</p>\n        <p >").concat(person.stage, "</p>\n        <p>").concat(person.userID, "</p>\n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Avslutad') {
      terminationList.innerHTML = people.filter(function (person) {
        return person.stage === 'Avslutad';
      }).map(function (person, i) {
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p>").concat(person.name, "</p>\n        <p>").concat(person.age, "</p>\n        <p>").concat(person.email, "</p>\n        <p>").concat(person.address, "</p>\n        <p>").concat(person.image, "</p>\n        <p >").concat(person.stage, "</p>\n        <p>").concat(person.userID, "</p>\n      </div>\n    ");
      }).join('');
    }
  });
}
addPerson.forEach(function (person) {
  return person.addEventListener('submit', addCandidate);
});
populateList(people, peopleList);
window.populateList = populateList;

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
  console.log({
    data: data,
    el: el
  });
  el.appendChild(document.getElementById(data));
} // Bind fn to the window
// window.foo = foo;


window.dragstart_handler = dragstart_handler;
window.dragover_handler = dragover_handler;
window.drop_handler = drop_handler;

/***/ }),

/***/ "./src/js/components/moduletest.mjs":
/*!******************************************!*\
  !*** ./src/js/components/moduletest.mjs ***!
  \******************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test */ "./src/js/components/test.mjs");

console.log(Object(_test__WEBPACK_IMPORTED_MODULE_0__["repeat"])('hello'));
// → 'hello hello'
console.log(Object(_test__WEBPACK_IMPORTED_MODULE_0__["shout"])('Modules in action'));
// → 'MODULES IN ACTION!'


/***/ }),

/***/ "./src/js/components/test.mjs":
/*!************************************!*\
  !*** ./src/js/components/test.mjs ***!
  \************************************/
/*! exports provided: repeat, shout */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shout", function() { return shout; });
const repeat = string => `${string} ${string}`;
function shout(string) {
  return `${string.toUpperCase()}!`;
}


/***/ }),

/***/ "./src/js/components/updateCandidate.js":
/*!**********************************************!*\
  !*** ./src/js/components/updateCandidate.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addCandidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCandidate */ "./src/js/components/addCandidate.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var column = document.querySelector('.container-canvas');
var buttons = column.getElementsByTagName('button');
var buttonsArray = Array.from(buttons);
console.log(buttonsArray);
buttonsArray.forEach(function (element) {
  return element.addEventListener('click', updateCandidate);
});

function updateCandidate(e) {
  console.log('was clicked yo');
  console.log(e);
  var peopleList = document.querySelector('.people');
  var name = this.parentNode.querySelector('[name=name]').innerHTML;
  var age = this.parentNode.querySelector('[name=age]').innerHTML;
  var email = this.parentNode.querySelector('[name=email]').innerHTML;
  var address = this.parentNode.querySelector('[name=address]').innerHTML;
  var image = this.parentNode.querySelector('[name=image]').innerHTML;
  var stage = this.parentNode.querySelector('[name=stage]').value;
  var userID = this.parentNode.dataset.id;
  var people = JSON.parse(localStorage.getItem('people')) || [];
  var person = {
    name: name,
    age: age,
    email: email,
    address: address,
    image: image,
    stage: stage,
    userID: userID
  };

  var peopleClone = _toConsumableArray(people);

  var updatedCandidates = peopleClone.filter(function (item) {
    if (item.userID === person.userID) {
      item.name = person.name;
      item.age = person.name;
      item.email = person.email;
      item.address = person.address;
      item.image = person.image;
      item.stage = person.stage;
    }

    return item;
  });
  console.log(updatedCandidates);
  Object(_addCandidate__WEBPACK_IMPORTED_MODULE_0__["populateList"])(updatedCandidates, peopleList); //   localStorage.removeItem('people');

  localStorage.setItem('people', JSON.stringify(updatedCandidates));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZGRDYW5kaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZHJhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2R1bGV0ZXN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90ZXN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy91cGRhdGVDYW5kaWRhdGUuanMiXSwibmFtZXMiOlsiYWRkUGVyc29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGVvcGxlTGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJwZW9wbGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29udGFjdExpc3QiLCJjb250YWN0TGlzdF9jaGlsZE5vZGVzIiwiY2hpbGROb2RlcyIsImNvbnNvbGUiLCJsb2ciLCJkaWFsb2d1ZUxpc3QiLCJpbnRlcnZpZXdMaXN0Iiwib2ZmZXJMaXN0IiwidGVybWluYXRpb25MaXN0IiwiSUQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJhZGRDYW5kaWRhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidmFsdWUiLCJhZ2UiLCJlbWFpbCIsImFkZHJlc3MiLCJpbWFnZSIsInN0YWdlIiwidXNlcklEIiwicGVyc29uIiwicHVzaCIsInBvcHVsYXRlTGlzdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZXNldCIsImlubmVySFRNTCIsIm1hcCIsInAiLCJmaWx0ZXIiLCJpIiwiam9pbiIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZHJhZ3N0YXJ0X2hhbmRsZXIiLCJldiIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJpZCIsImRyb3BFZmZlY3QiLCJkcmFnb3Zlcl9oYW5kbGVyIiwiZHJvcF9oYW5kbGVyIiwiZWwiLCJkYXRhIiwiZ2V0RGF0YSIsImFwcGVuZENoaWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb2x1bW4iLCJidXR0b25zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJidXR0b25zQXJyYXkiLCJBcnJheSIsImZyb20iLCJlbGVtZW50IiwidXBkYXRlQ2FuZGlkYXRlIiwicGFyZW50Tm9kZSIsImRhdGFzZXQiLCJwZW9wbGVDbG9uZSIsInVwZGF0ZWRDYW5kaWRhdGVzIiwiaXRlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENB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QUNzQyxpQkFBRCxFQUFvQnhFLFVBQXBCLENBQVosQ0F2QzBCLENBd0MxQjs7QUFDQUssY0FBWSxDQUFDOEIsT0FBYixDQUFxQixRQUFyQixFQUErQmhDLElBQUksQ0FBQ2lDLFNBQUwsQ0FBZW9DLGlCQUFmLENBQS9CO0FBQ0QsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9kcmFnJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZENhbmRpZGF0ZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy91cGRhdGVDYW5kaWRhdGUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbW9kdWxldGVzdCc7XG4iLCJjb25zdCBhZGRQZXJzb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXBlcnNvbicpO1xuY29uc3QgcGVvcGxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGUnKTtcbmNvbnN0IHBlb3BsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZScpKSB8fCBbXTtcbmNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcbmNvbnN0IGNvbnRhY3RMaXN0X2NoaWxkTm9kZXMgPSBjb250YWN0TGlzdC5jaGlsZE5vZGVzO1xuY29uc29sZS5sb2coY29udGFjdExpc3RfY2hpbGROb2Rlcyk7XG5cbmNvbnN0IGRpYWxvZ3VlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2d1ZScpO1xuY29uc3QgaW50ZXJ2aWV3TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnRlcnZpZXcnKTtcbmNvbnN0IG9mZmVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvZmZlcicpO1xuY29uc3QgdGVybWluYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlcm1pbmF0aW9uJyk7XG5cbmNvbnN0IElEID0gZnVuY3Rpb24oKSB7XG4gIC8vIENyZWF0ZSBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBwZXJzb24gYXBwZW5kZWQgdG8gdGhlIERPTVxuICAvLyBNYXRoLnJhbmRvbSBzaG91bGQgYmUgdW5pcXVlIGJlY2F1c2Ugb2YgaXRzIHNlZWRpbmcgYWxnb3JpdGhtLlxuICAvLyBDb252ZXJ0IGl0IHRvIGJhc2UgMzYgKG51bWJlcnMgKyBsZXR0ZXJzKSwgYW5kIGdyYWIgdGhlIGZpcnN0IDkgY2hhcmFjdGVyc1xuICAvLyBhZnRlciB0aGUgZGVjaW1hbC5cbiAgcmV0dXJuIChcbiAgICAnXycgK1xuICAgIE1hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygzNilcbiAgICAgIC5zdWJzdHIoMiwgOSlcbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGFkZENhbmRpZGF0ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9bmFtZV0nKS52YWx1ZTtcbiAgY29uc3QgYWdlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZ2VdJykudmFsdWU7XG4gIGNvbnN0IGVtYWlsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1lbWFpbF0nKS52YWx1ZTtcbiAgY29uc3QgYWRkcmVzcyA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9YWRkcmVzc10nKS52YWx1ZTtcbiAgY29uc3QgaW1hZ2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWltYWdlXScpLnZhbHVlO1xuICBjb25zdCBzdGFnZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9c3RhZ2VdJykudmFsdWU7XG4gIGNvbnN0IHVzZXJJRCA9IElEKCk7XG5cbiAgY29uc3QgcGVyc29uID0ge1xuICAgIG5hbWUsXG4gICAgYWdlLFxuICAgIGVtYWlsLFxuICAgIGFkZHJlc3MsXG4gICAgaW1hZ2UsXG4gICAgc3RhZ2UsXG4gICAgdXNlcklEXG4gIH07XG5cbiAgY29uc29sZS5sb2cocGVyc29uKTtcblxuICBwZW9wbGUucHVzaChwZXJzb24pO1xuICBwb3B1bGF0ZUxpc3QocGVvcGxlLCBwZW9wbGVMaXN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHBlb3BsZSkpO1xuICB0aGlzLnJlc2V0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUxpc3QocGVvcGxlID0gW10sIHBlb3BsZUxpc3QpIHtcbiAgY29udGFjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGRpYWxvZ3VlTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgaW50ZXJ2aWV3TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgb2ZmZXJMaXN0LmlubmVySFRNTCA9ICcnO1xuICB0ZXJtaW5hdGlvbkxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIHBlb3BsZS5tYXAocCA9PiB7XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdLb250YWt0Jykge1xuICAgICAgY29udGFjdExpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0tvbnRha3QnKVxuICAgICAgICAubWFwKChwZXJzb24sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7cGVyc29uLnVzZXJJRH1cIiBkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgIHBlcnNvbi51c2VySURcbiAgICAgICAgICB9XCIgbmFtZT1cInBlcnNvbiR7aX1cIiBjbGFzcz1cInBlb3BsZS1saXN0XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG9uZHJhZ3N0YXJ0PVwiZHJhZ3N0YXJ0X2hhbmRsZXIoZXZlbnQpO1wiPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cIm5hbWVcIj4ke3BlcnNvbi5uYW1lfTwvcD5cbiAgICAgICAgPHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJhZ2VcIj4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImVtYWlsXCI+JHtwZXJzb24uZW1haWx9PC9wPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImFkZHJlc3NcIj4ke3BlcnNvbi5hZGRyZXNzfTwvcD5cbiAgICAgICAgPHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJpbWFnZVwiPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cInN0YWdlLXNlbGVjdFwiIG5hbWU9XCJzdGFnZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LVJla3J5dGVyaW5nc3N0ZWctPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLb250YWt0XCIgc2VsZWN0ZWQ+S29udGFrdDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGlhbG9nXCI+RGlhbG9nPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbnRlcnZqdVwiPkludGVydmp1PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFcmJqdWRhbmRlXCI+RXJianVkYW5kZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZzbHV0YWRcIiA+QXZzbHV0YWQ8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxwID4ke3BlcnNvbi51c2VySUR9PC9wPlxuICAgICAgICA8YnV0dG9uPsOEbmRyYTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAocC5zdGFnZSA9PT0gJ0RpYWxvZycpIHtcbiAgICAgIGRpYWxvZ3VlTGlzdC5pbm5lckhUTUwgPSBwZW9wbGVcbiAgICAgICAgLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnN0YWdlID09PSAnRGlhbG9nJylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgPHA+JHtwZXJzb24ubmFtZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHAgPiR7cGVyc29uLnN0YWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24udXNlcklEfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdJbnRlcnZqdScpIHtcbiAgICAgIGludGVydmlld0xpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0ludGVydmp1JylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgPHA+JHtwZXJzb24ubmFtZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uc3RhZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi51c2VySUR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAocC5zdGFnZSA9PT0gJ0VyYmp1ZGFuZGUnKSB7XG4gICAgICBvZmZlckxpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0VyYmp1ZGFuZGUnKVxuICAgICAgICAubWFwKChwZXJzb24sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7cGVyc29uLnVzZXJJRH1cIiBkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgIHBlcnNvbi51c2VySURcbiAgICAgICAgICB9XCIgbmFtZT1cInBlcnNvbiR7aX1cIiBjbGFzcz1cInBlb3BsZS1saXN0XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG9uZHJhZ3N0YXJ0PVwiZHJhZ3N0YXJ0X2hhbmRsZXIoZXZlbnQpO1wiPlxuICAgICAgICA8cD4ke3BlcnNvbi5uYW1lfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uZW1haWx9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZGRyZXNzfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uaW1hZ2V9PC9wPlxuICAgICAgICA8cCA+JHtwZXJzb24uc3RhZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi51c2VySUR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAocC5zdGFnZSA9PT0gJ0F2c2x1dGFkJykge1xuICAgICAgdGVybWluYXRpb25MaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdBdnNsdXRhZCcpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5pbWFnZX08L3A+XG4gICAgICAgIDxwID4ke3BlcnNvbi5zdGFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLnVzZXJJRH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICB9KTtcbn1cblxuYWRkUGVyc29uLmZvckVhY2gocGVyc29uID0+IHBlcnNvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRDYW5kaWRhdGUpKTtcblxucG9wdWxhdGVMaXN0KHBlb3BsZSwgcGVvcGxlTGlzdCk7XG53aW5kb3cucG9wdWxhdGVMaXN0ID0gcG9wdWxhdGVMaXN0O1xuIiwiZnVuY3Rpb24gZHJhZ3N0YXJ0X2hhbmRsZXIoZXYpIHtcbiAgY29uc29sZS5sb2coJ2RyYWdTdGFydCcpO1xuICAvLyBBZGQgdGhlIHRhcmdldCBlbGVtZW50J3MgaWQgdG8gdGhlIGRhdGEgdHJhbnNmZXIgb2JqZWN0XG4gIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZXYudGFyZ2V0LmlkKTtcbiAgZXYuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG59XG5cbmZ1bmN0aW9uIGRyYWdvdmVyX2hhbmRsZXIoZXYpIHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgLy8gU2V0IHRoZSBkcm9wRWZmZWN0IHRvIG1vdmVcbiAgZXYuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG59XG5cbmZ1bmN0aW9uIGRyb3BfaGFuZGxlcihldiwgZWwpIHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgdGFyZ2V0IGFuZCBhZGQgdGhlIG1vdmVkIGVsZW1lbnQgdG8gdGhlIHRhcmdldCdzIERPTVxuICB2YXIgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gIGNvbnNvbGUubG9nKHsgZGF0YSwgZWwgfSk7XG4gIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbn1cblxuLy8gQmluZCBmbiB0byB0aGUgd2luZG93XG4vLyB3aW5kb3cuZm9vID0gZm9vO1xuXG53aW5kb3cuZHJhZ3N0YXJ0X2hhbmRsZXIgPSBkcmFnc3RhcnRfaGFuZGxlcjtcbndpbmRvdy5kcmFnb3Zlcl9oYW5kbGVyID0gZHJhZ292ZXJfaGFuZGxlcjtcbndpbmRvdy5kcm9wX2hhbmRsZXIgPSBkcm9wX2hhbmRsZXI7XG4iLCJpbXBvcnQgeyByZXBlYXQsIHNob3V0IH0gZnJvbSAnLi90ZXN0JztcbmNvbnNvbGUubG9nKHJlcGVhdCgnaGVsbG8nKSk7XG4vLyDihpIgJ2hlbGxvIGhlbGxvJ1xuY29uc29sZS5sb2coc2hvdXQoJ01vZHVsZXMgaW4gYWN0aW9uJykpO1xuLy8g4oaSICdNT0RVTEVTIElOIEFDVElPTiEnXG4iLCJleHBvcnQgY29uc3QgcmVwZWF0ID0gc3RyaW5nID0+IGAke3N0cmluZ30gJHtzdHJpbmd9YDtcbmV4cG9ydCBmdW5jdGlvbiBzaG91dChzdHJpbmcpIHtcbiAgcmV0dXJuIGAke3N0cmluZy50b1VwcGVyQ2FzZSgpfSFgO1xufVxuIiwiaW1wb3J0IHsgcG9wdWxhdGVMaXN0IH0gZnJvbSAnLi9hZGRDYW5kaWRhdGUnO1xuXG5jb25zdCBjb2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWNhbnZhcycpO1xuY29uc3QgYnV0dG9ucyA9IGNvbHVtbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJyk7XG5jb25zdCBidXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKGJ1dHRvbnMpO1xuY29uc29sZS5sb2coYnV0dG9uc0FycmF5KTtcbmJ1dHRvbnNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUNhbmRpZGF0ZSlcbik7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShlKSB7XG4gIGNvbnNvbGUubG9nKCd3YXMgY2xpY2tlZCB5bycpO1xuICBjb25zb2xlLmxvZyhlKTtcbiAgY29uc3QgcGVvcGxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGUnKTtcbiAgY29uc3QgbmFtZSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1uYW1lXScpLmlubmVySFRNTDtcbiAgY29uc3QgYWdlID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWFnZV0nKS5pbm5lckhUTUw7XG4gIGNvbnN0IGVtYWlsID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWVtYWlsXScpLmlubmVySFRNTDtcbiAgY29uc3QgYWRkcmVzcyA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZGRyZXNzXScpLmlubmVySFRNTDtcbiAgY29uc3QgaW1hZ2UgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignW25hbWU9aW1hZ2VdJykuaW5uZXJIVE1MO1xuICBjb25zdCBzdGFnZSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1zdGFnZV0nKS52YWx1ZTtcbiAgY29uc3QgdXNlcklEID0gdGhpcy5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gIGNvbnN0IHBlb3BsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZScpKSB8fCBbXTtcblxuICBjb25zdCBwZXJzb24gPSB7XG4gICAgbmFtZSxcbiAgICBhZ2UsXG4gICAgZW1haWwsXG4gICAgYWRkcmVzcyxcbiAgICBpbWFnZSxcbiAgICBzdGFnZSxcbiAgICB1c2VySURcbiAgfTtcblxuICBsZXQgcGVvcGxlQ2xvbmUgPSBbLi4ucGVvcGxlXTtcblxuICBsZXQgdXBkYXRlZENhbmRpZGF0ZXMgPSBwZW9wbGVDbG9uZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0udXNlcklEID09PSBwZXJzb24udXNlcklEKSB7XG4gICAgICBpdGVtLm5hbWUgPSBwZXJzb24ubmFtZTtcbiAgICAgIGl0ZW0uYWdlID0gcGVyc29uLm5hbWU7XG4gICAgICBpdGVtLmVtYWlsID0gcGVyc29uLmVtYWlsO1xuICAgICAgaXRlbS5hZGRyZXNzID0gcGVyc29uLmFkZHJlc3M7XG4gICAgICBpdGVtLmltYWdlID0gcGVyc29uLmltYWdlO1xuICAgICAgaXRlbS5zdGFnZSA9IHBlcnNvbi5zdGFnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHVwZGF0ZWRDYW5kaWRhdGVzKTtcblxuICBwb3B1bGF0ZUxpc3QodXBkYXRlZENhbmRpZGF0ZXMsIHBlb3BsZUxpc3QpO1xuICAvLyAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZW9wbGUnKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9