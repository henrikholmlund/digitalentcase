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
/* harmony import */ var _components_deleteCandidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/deleteCandidate */ "./src/js/components/deleteCandidate.js");





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
}; // function createEventListener(id) {
//   const element = document.querySelector(`[data-id="${id}"]`);
//   return element.addEventListener('click', function(event) {
//     console.log('was clicked', this);
//   });
// }


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
  populateList(people, peopleList); // createEventListener(userID);

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
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n        <p contenteditable=\"true\" name=\"name\">").concat(person.name, "</p>\n        <p contenteditable=\"true\" name=\"age\">").concat(person.age, "</p>\n        <p contenteditable=\"true\" name=\"email\">").concat(person.email, "</p>\n        <p contenteditable=\"true\" name=\"address\">").concat(person.address, "</p>\n        <p contenteditable=\"true\" name=\"image\">").concat(person.image, "</p>\n        <select class=\"stage-select\" name=\"stage\">\n              <option value=\"\">-Rekryteringssteg-</option>\n              <option value=\"Kontakt\" selected>Kontakt</option>\n              <option value=\"Dialog\">Dialog</option>\n              <option value=\"Intervju\">Intervju</option>\n              <option value=\"Erbjudande\">Erbjudande</option>\n              <option value=\"Avslutad\" >Avslutad</option>\n        </select>\n        <p >").concat(person.userID, "</p>\n        <button class=\"change-button\">\xC4ndra</button>\n        <button class=\"delete-button\">Ta bort</button>\n      </div>\n    ");
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

/***/ "./src/js/components/deleteCandidate.js":
/*!**********************************************!*\
  !*** ./src/js/components/deleteCandidate.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addCandidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCandidate */ "./src/js/components/addCandidate.js");


function deleteCandidate(e) {
  console.log('deletecandidate was clicked', e);
  var peopleList = document.querySelector('.people');
  var userID = this.parentNode.dataset.id;
  var people = JSON.parse(localStorage.getItem('people')) || [];
  var index = people.findIndex(function (item) {
    return item.userID === userID;
  }); // Delete  the item by index.

  people.splice(index, 1); // To check.

  console.log(people);
  Object(_addCandidate__WEBPACK_IMPORTED_MODULE_0__["populateList"])(people, peopleList);
  localStorage.setItem('people', JSON.stringify(people));
}

window.deleteCandidate = deleteCandidate;

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

 // const column = document.querySelector('.container-canvas');
// const buttons = column.getElementsByTagName('button');
// const buttonsArray = Array.from(buttons);
// console.log(buttonsArray);
// buttonsArray.forEach(element =>
//   element.addEventListener('click', updateCandidate)
// );

function updateCandidate(e) {
  console.log('was clicked yo');
  console.log(e); //get values from editable HTML

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
  console.log(person);

  var peopleClone = _toConsumableArray(people); //find the right person and update whats new


  var updatedCandidates = peopleClone.filter(function (item) {
    if (item.userID === person.userID) {
      item.name = person.name;
      item.age = person.age;
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

window.updateCandidate = updateCandidate;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZGRDYW5kaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGVsZXRlQ2FuZGlkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RyYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdXBkYXRlQ2FuZGlkYXRlLmpzIl0sIm5hbWVzIjpbImFkZFBlcnNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBlb3BsZUxpc3QiLCJxdWVyeVNlbGVjdG9yIiwicGVvcGxlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnRhY3RMaXN0IiwiZGlhbG9ndWVMaXN0IiwiaW50ZXJ2aWV3TGlzdCIsIm9mZmVyTGlzdCIsInRlcm1pbmF0aW9uTGlzdCIsIklEIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiYWRkQ2FuZGlkYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInZhbHVlIiwiYWdlIiwiZW1haWwiLCJhZGRyZXNzIiwiaW1hZ2UiLCJzdGFnZSIsInVzZXJJRCIsInBlcnNvbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicG9wdWxhdGVMaXN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlc2V0IiwiaW5uZXJIVE1MIiwibWFwIiwicCIsImZpbHRlciIsImkiLCJqb2luIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJkZWxldGVDYW5kaWRhdGUiLCJwYXJlbnROb2RlIiwiZGF0YXNldCIsImlkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwiZHJhZ3N0YXJ0X2hhbmRsZXIiLCJldiIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJkcm9wRWZmZWN0IiwiZHJhZ292ZXJfaGFuZGxlciIsImRyb3BfaGFuZGxlciIsImVsIiwiZGF0YSIsImdldERhdGEiLCJhcHBlbmRDaGlsZCIsImdldEVsZW1lbnRCeUlkIiwidXBkYXRlQ2FuZGlkYXRlIiwicGVvcGxlQ2xvbmUiLCJ1cGRhdGVkQ2FuZGlkYXRlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLENBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbkI7QUFDQSxJQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxD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VUFBSSxDQUFDMUIsS0FBTCxHQUFhRyxNQUFNLENBQUNILEtBQXBCO0FBQ0EwQixVQUFJLENBQUN6QixLQUFMLEdBQWFFLE1BQU0sQ0FBQ0YsS0FBcEI7QUFDRDs7QUFFRCxXQUFPeUIsSUFBUDtBQUNELEdBWHVCLENBQXhCO0FBWUF0QixTQUFPLENBQUNDLEdBQVIsQ0FBWXNDLGlCQUFaO0FBRUFwQyxvRUFBWSxDQUFDb0MsaUJBQUQsRUFBb0JwRSxVQUFwQixDQUFaLENBN0MwQixDQThDMUI7O0FBQ0FLLGNBQVksQ0FBQzRCLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0I5QixJQUFJLENBQUMrQixTQUFMLENBQWVrQyxpQkFBZixDQUEvQjtBQUNEOztBQUVEeEIsTUFBTSxDQUFDc0IsZUFBUCxHQUF5QkEsZUFBekIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9kcmFnJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZENhbmRpZGF0ZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy91cGRhdGVDYW5kaWRhdGUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVsZXRlQ2FuZGlkYXRlJztcbiIsImNvbnN0IGFkZFBlcnNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtcGVyc29uJyk7XG5jb25zdCBwZW9wbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlb3BsZScpO1xuY29uc3QgcGVvcGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlJykpIHx8IFtdO1xuY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuY29uc3QgZGlhbG9ndWVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlJyk7XG5jb25zdCBpbnRlcnZpZXdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludGVydmlldycpO1xuY29uc3Qgb2ZmZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29mZmVyJyk7XG5jb25zdCB0ZXJtaW5hdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVybWluYXRpb24nKTtcblxuY29uc3QgSUQgPSBmdW5jdGlvbigpIHtcbiAgLy8gQ3JlYXRlIGEgdW5pcXVlIGlkIGZvciBlYWNoIHBlcnNvbiBhcHBlbmRlZCB0byB0aGUgRE9NXG4gIC8vIE1hdGgucmFuZG9tIHNob3VsZCBiZSB1bmlxdWUgYmVjYXVzZSBvZiBpdHMgc2VlZGluZyBhbGdvcml0aG0uXG4gIC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG4gIC8vIGFmdGVyIHRoZSBkZWNpbWFsLlxuICByZXR1cm4gKFxuICAgICdfJyArXG4gICAgTWF0aC5yYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgLnN1YnN0cigyLCA5KVxuICApO1xufTtcblxuLy8gZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihpZCkge1xuLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuXG4vLyAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBjb25zb2xlLmxvZygnd2FzIGNsaWNrZWQnLCB0aGlzKTtcbi8vICAgfSk7XG4vLyB9XG5cbmZ1bmN0aW9uIGFkZENhbmRpZGF0ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9bmFtZV0nKS52YWx1ZTtcbiAgY29uc3QgYWdlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZ2VdJykudmFsdWU7XG4gIGNvbnN0IGVtYWlsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1lbWFpbF0nKS52YWx1ZTtcbiAgY29uc3QgYWRkcmVzcyA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9YWRkcmVzc10nKS52YWx1ZTtcbiAgY29uc3QgaW1hZ2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWltYWdlXScpLnZhbHVlO1xuICBjb25zdCBzdGFnZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9c3RhZ2VdJykudmFsdWU7XG4gIGNvbnN0IHVzZXJJRCA9IElEKCk7XG5cbiAgY29uc3QgcGVyc29uID0ge1xuICAgIG5hbWUsXG4gICAgYWdlLFxuICAgIGVtYWlsLFxuICAgIGFkZHJlc3MsXG4gICAgaW1hZ2UsXG4gICAgc3RhZ2UsXG4gICAgdXNlcklEXG4gIH07XG5cbiAgY29uc29sZS5sb2cocGVyc29uKTtcblxuICBwZW9wbGUucHVzaChwZXJzb24pO1xuICBwb3B1bGF0ZUxpc3QocGVvcGxlLCBwZW9wbGVMaXN0KTtcbiAgLy8gY3JlYXRlRXZlbnRMaXN0ZW5lcih1c2VySUQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkocGVvcGxlKSk7XG4gIHRoaXMucmVzZXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTGlzdChwZW9wbGUgPSBbXSwgcGVvcGxlTGlzdCkge1xuICBjb250YWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgZGlhbG9ndWVMaXN0LmlubmVySFRNTCA9ICcnO1xuICBpbnRlcnZpZXdMaXN0LmlubmVySFRNTCA9ICcnO1xuICBvZmZlckxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIHRlcm1pbmF0aW9uTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgcGVvcGxlLm1hcChwID0+IHtcbiAgICBpZiAocC5zdGFnZSA9PT0gJ0tvbnRha3QnKSB7XG4gICAgICBjb250YWN0TGlzdC5pbm5lckhUTUwgPSBwZW9wbGVcbiAgICAgICAgLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnN0YWdlID09PSAnS29udGFrdCcpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwibmFtZVwiPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImFnZVwiPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiZW1haWxcIj4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiYWRkcmVzc1wiPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImltYWdlXCI+JHtwZXJzb24uaW1hZ2V9PC9wPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3RhZ2Utc2VsZWN0XCIgbmFtZT1cInN0YWdlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tUmVrcnl0ZXJpbmdzc3RlZy08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktvbnRha3RcIiBzZWxlY3RlZD5Lb250YWt0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEaWFsb2dcIj5EaWFsb2c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkludGVydmp1XCI+SW50ZXJ2anU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVyYmp1ZGFuZGVcIj5FcmJqdWRhbmRlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBdnNsdXRhZFwiID5BdnNsdXRhZDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPHAgPiR7cGVyc29uLnVzZXJJRH08L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2UtYnV0dG9uXCI+w4RuZHJhPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+VGEgYm9ydDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAocC5zdGFnZSA9PT0gJ0RpYWxvZycpIHtcbiAgICAgIGRpYWxvZ3VlTGlzdC5pbm5lckhUTUwgPSBwZW9wbGVcbiAgICAgICAgLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnN0YWdlID09PSAnRGlhbG9nJylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgPHA+JHtwZXJzb24ubmFtZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHAgPiR7cGVyc29uLnN0YWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24udXNlcklEfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdJbnRlcnZqdScpIHtcbiAgICAgIGludGVydmlld0xpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0ludGVydmp1JylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgPHA+JHtwZXJzb24ubmFtZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uc3RhZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi51c2VySUR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAocC5zdGFnZSA9PT0gJ0VyYmp1ZGFuZGUnKSB7XG4gICAgICBvZmZlckxpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0VyYmp1ZGFuZGUnKVxuICAgICAgICAubWFwKChwZXJzb24sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7cGVyc29uLnVzZXJJRH1cIiBkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgIHBlcnNvbi51c2VySURcbiAgICAgICAgICB9XCIgbmFtZT1cInBlcnNvbiR7aX1cIiBjbGFzcz1cInBlb3BsZS1saXN0XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG9uZHJhZ3N0YXJ0PVwiZHJhZ3N0YXJ0X2hhbmRsZXIoZXZlbnQpO1wiPlxuICAgICAgICA8cD4ke3BlcnNvbi5uYW1lfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uZW1haWx9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZGRyZXNzfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uaW1hZ2V9PC9wPlxuICAgICAgICA8cCA+JHtwZXJzb24uc3RhZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi51c2VySUR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAocC5zdGFnZSA9PT0gJ0F2c2x1dGFkJykge1xuICAgICAgdGVybWluYXRpb25MaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdBdnNsdXRhZCcpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5pbWFnZX08L3A+XG4gICAgICAgIDxwID4ke3BlcnNvbi5zdGFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLnVzZXJJRH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICB9KTtcbn1cblxuYWRkUGVyc29uLmZvckVhY2gocGVyc29uID0+IHBlcnNvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRDYW5kaWRhdGUpKTtcblxucG9wdWxhdGVMaXN0KHBlb3BsZSwgcGVvcGxlTGlzdCk7XG53aW5kb3cucG9wdWxhdGVMaXN0ID0gcG9wdWxhdGVMaXN0O1xuIiwiaW1wb3J0IHsgcG9wdWxhdGVMaXN0IH0gZnJvbSAnLi9hZGRDYW5kaWRhdGUnO1xuXG5mdW5jdGlvbiBkZWxldGVDYW5kaWRhdGUoZSkge1xuICBjb25zb2xlLmxvZygnZGVsZXRlY2FuZGlkYXRlIHdhcyBjbGlja2VkJywgZSk7XG4gIGNvbnN0IHBlb3BsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVvcGxlJyk7XG4gIGNvbnN0IHVzZXJJRCA9IHRoaXMucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuXG4gIGNvbnN0IHBlb3BsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZScpKSB8fCBbXTtcblxuICB2YXIgaW5kZXggPSBwZW9wbGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51c2VySUQgPT09IHVzZXJJRCk7XG5cbiAgLy8gRGVsZXRlICB0aGUgaXRlbSBieSBpbmRleC5cbiAgcGVvcGxlLnNwbGljZShpbmRleCwgMSk7XG5cbiAgLy8gVG8gY2hlY2suXG4gIGNvbnNvbGUubG9nKHBlb3BsZSk7XG5cbiAgcG9wdWxhdGVMaXN0KHBlb3BsZSwgcGVvcGxlTGlzdCk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHBlb3BsZSkpO1xufVxuXG53aW5kb3cuZGVsZXRlQ2FuZGlkYXRlID0gZGVsZXRlQ2FuZGlkYXRlO1xuIiwiZnVuY3Rpb24gZHJhZ3N0YXJ0X2hhbmRsZXIoZXYpIHtcbiAgY29uc29sZS5sb2coJ2RyYWdTdGFydCcpO1xuICAvLyBBZGQgdGhlIHRhcmdldCBlbGVtZW50J3MgaWQgdG8gdGhlIGRhdGEgdHJhbnNmZXIgb2JqZWN0XG4gIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZXYudGFyZ2V0LmlkKTtcbiAgZXYuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG59XG5cbmZ1bmN0aW9uIGRyYWdvdmVyX2hhbmRsZXIoZXYpIHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgLy8gU2V0IHRoZSBkcm9wRWZmZWN0IHRvIG1vdmVcbiAgZXYuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG59XG5cbmZ1bmN0aW9uIGRyb3BfaGFuZGxlcihldiwgZWwpIHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgdGFyZ2V0IGFuZCBhZGQgdGhlIG1vdmVkIGVsZW1lbnQgdG8gdGhlIHRhcmdldCdzIERPTVxuICB2YXIgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gIGNvbnNvbGUubG9nKHsgZGF0YSwgZWwgfSk7XG4gIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbn1cblxuLy8gQmluZCBmbiB0byB0aGUgd2luZG93XG4vLyB3aW5kb3cuZm9vID0gZm9vO1xuXG53aW5kb3cuZHJhZ3N0YXJ0X2hhbmRsZXIgPSBkcmFnc3RhcnRfaGFuZGxlcjtcbndpbmRvdy5kcmFnb3Zlcl9oYW5kbGVyID0gZHJhZ292ZXJfaGFuZGxlcjtcbndpbmRvdy5kcm9wX2hhbmRsZXIgPSBkcm9wX2hhbmRsZXI7XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZUxpc3QgfSBmcm9tICcuL2FkZENhbmRpZGF0ZSc7XG5cbi8vIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItY2FudmFzJyk7XG4vLyBjb25zdCBidXR0b25zID0gY29sdW1uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKTtcbi8vIGNvbnN0IGJ1dHRvbnNBcnJheSA9IEFycmF5LmZyb20oYnV0dG9ucyk7XG4vLyBjb25zb2xlLmxvZyhidXR0b25zQXJyYXkpO1xuLy8gYnV0dG9uc0FycmF5LmZvckVhY2goZWxlbWVudCA9PlxuLy8gICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ2FuZGlkYXRlKVxuLy8gKTtcblxuZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlKGUpIHtcbiAgY29uc29sZS5sb2coJ3dhcyBjbGlja2VkIHlvJyk7XG4gIGNvbnNvbGUubG9nKGUpO1xuXG4gIC8vZ2V0IHZhbHVlcyBmcm9tIGVkaXRhYmxlIEhUTUxcbiAgY29uc3QgcGVvcGxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGUnKTtcbiAgY29uc3QgbmFtZSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1uYW1lXScpLmlubmVySFRNTDtcbiAgY29uc3QgYWdlID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWFnZV0nKS5pbm5lckhUTUw7XG4gIGNvbnN0IGVtYWlsID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWVtYWlsXScpLmlubmVySFRNTDtcbiAgY29uc3QgYWRkcmVzcyA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZGRyZXNzXScpLmlubmVySFRNTDtcbiAgY29uc3QgaW1hZ2UgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignW25hbWU9aW1hZ2VdJykuaW5uZXJIVE1MO1xuICBjb25zdCBzdGFnZSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1zdGFnZV0nKS52YWx1ZTtcbiAgY29uc3QgdXNlcklEID0gdGhpcy5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG4gIGNvbnN0IHBlb3BsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZScpKSB8fCBbXTtcblxuICBjb25zdCBwZXJzb24gPSB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBhZ2U6IGFnZSxcbiAgICBlbWFpbDogZW1haWwsXG4gICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICBpbWFnZTogaW1hZ2UsXG4gICAgc3RhZ2U6IHN0YWdlLFxuICAgIHVzZXJJRDogdXNlcklEXG4gIH07XG5cbiAgY29uc29sZS5sb2cocGVyc29uKTtcblxuICBsZXQgcGVvcGxlQ2xvbmUgPSBbLi4ucGVvcGxlXTtcblxuICAvL2ZpbmQgdGhlIHJpZ2h0IHBlcnNvbiBhbmQgdXBkYXRlIHdoYXRzIG5ld1xuXG4gIGxldCB1cGRhdGVkQ2FuZGlkYXRlcyA9IHBlb3BsZUNsb25lLmZpbHRlcihpdGVtID0+IHtcbiAgICBpZiAoaXRlbS51c2VySUQgPT09IHBlcnNvbi51c2VySUQpIHtcbiAgICAgIGl0ZW0ubmFtZSA9IHBlcnNvbi5uYW1lO1xuICAgICAgaXRlbS5hZ2UgPSBwZXJzb24uYWdlO1xuICAgICAgaXRlbS5lbWFpbCA9IHBlcnNvbi5lbWFpbDtcbiAgICAgIGl0ZW0uYWRkcmVzcyA9IHBlcnNvbi5hZGRyZXNzO1xuICAgICAgaXRlbS5pbWFnZSA9IHBlcnNvbi5pbWFnZTtcbiAgICAgIGl0ZW0uc3RhZ2UgPSBwZXJzb24uc3RhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pO1xuICBjb25zb2xlLmxvZyh1cGRhdGVkQ2FuZGlkYXRlcyk7XG5cbiAgcG9wdWxhdGVMaXN0KHVwZGF0ZWRDYW5kaWRhdGVzLCBwZW9wbGVMaXN0KTtcbiAgLy8gICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVvcGxlJyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwZW9wbGUnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkQ2FuZGlkYXRlcykpO1xufVxuXG53aW5kb3cudXBkYXRlQ2FuZGlkYXRlID0gdXBkYXRlQ2FuZGlkYXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==