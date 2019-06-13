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
  var peopleList = document.querySelector('.people'); //get the userID

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addCandidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCandidate */ "./src/js/components/addCandidate.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



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
  var peopleList = document.querySelector('.people');
  var people = JSON.parse(localStorage.getItem('people')) || [];

  var peopleClone = _toConsumableArray(people);

  var stringedEl = el;
  console.log(stringedEl);
  var string = '' + el;
  console.log(stringedEl.id); //find the right person and update the stage attr on drop

  if (stringedEl.id == 'contact') {
    var updatedCandidates = peopleClone.filter(function (item) {
      if (item.userID === data) {
        item.stage = 'Kontakt';
      }

      return item;
    });
    Object(_addCandidate__WEBPACK_IMPORTED_MODULE_0__["populateList"])(updatedCandidates, peopleList);
    localStorage.removeItem('people');
    localStorage.setItem('people', JSON.stringify(updatedCandidates));
  }

  if (stringedEl.id == 'dialogue') {
    var _updatedCandidates = peopleClone.filter(function (item) {
      if (item.userID === data) {
        item.stage = 'Dialog';
      }

      return item;
    });

    Object(_addCandidate__WEBPACK_IMPORTED_MODULE_0__["populateList"])(_updatedCandidates, peopleList);
    localStorage.removeItem('people');
    localStorage.setItem('people', JSON.stringify(_updatedCandidates));
  }

  if (stringedEl.id == 'interview') {
    var _updatedCandidates2 = peopleClone.filter(function (item) {
      if (item.userID === data) {
        item.stage = 'Intervju';
      }

      return item;
    });

    Object(_addCandidate__WEBPACK_IMPORTED_MODULE_0__["populateList"])(_updatedCandidates2, peopleList);
    localStorage.setItem('people', JSON.stringify(_updatedCandidates2));
  }

  if (stringedEl.id == 'offer') {
    var _updatedCandidates3 = peopleClone.filter(function (item) {
      if (item.userID === data) {
        item.stage = 'Erbjudande';
      }

      return item;
    });

    Object(_addCandidate__WEBPACK_IMPORTED_MODULE_0__["populateList"])(_updatedCandidates3, peopleList);
    localStorage.removeItem('people');
    localStorage.setItem('people', JSON.stringify(_updatedCandidates3));
  }

  if (stringedEl.id == 'termination') {
    console.log('it is terminatipn');

    var _updatedCandidates4 = peopleClone.filter(function (item) {
      if (item.userID === data) {
        item.stage = 'Avslutad';
      }

      return item;
    });

    Object(_addCandidate__WEBPACK_IMPORTED_MODULE_0__["populateList"])(_updatedCandidates4, peopleList);
    localStorage.removeItem('people');
    localStorage.setItem('people', JSON.stringify(_updatedCandidates4));
  }
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
  Object(_addCandidate__WEBPACK_IMPORTED_MODULE_0__["populateList"])(updatedCandidates, peopleList);
  localStorage.removeItem('people');
  localStorage.setItem('people', JSON.stringify(updatedCandidates));
}

window.updateCandidate = updateCandidate;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZGRDYW5kaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGVsZXRlQ2FuZGlkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RyYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdXBkYXRlQ2FuZGlkYXRlLmpzIl0sIm5hbWVzIjpbImFkZFBlcnNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBlb3BsZUxpc3QiLCJxdWVyeVNlbGVjdG9yIiwicGVvcGxlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnRhY3RMaXN0IiwiZGlhbG9ndWVMaXN0IiwiaW50ZXJ2aWV3TGlzdCIsIm9mZmVyTGlzdCIsInRlcm1pbmF0aW9uTGlzdCIsIklEIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiYWRkQ2FuZGlkYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInZhbHVlIiwiYWdlIiwiZW1haWwiLCJhZGRyZXNzIiwiaW1hZ2UiLCJzdGFnZSIsInVzZXJJRCIsInBlcnNvbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicG9wdWxhdGVMaXN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlc2V0IiwiaW5uZXJIVE1MIiwibWFwIiwicCIsImZpbHRlciIsImkiLCJqb2luIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJkZWxldGVDYW5kaWRhdGUiLCJwYXJlbnROb2RlIiwiZGF0YXNldCIsImlkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwic3BsaWNlIiwiZHJhZ3N0YXJ0X2hhbmRsZXIiLCJldiIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJkcm9wRWZmZWN0IiwiZHJhZ292ZXJfaGFuZGxlciIsImRyb3BfaGFuZGxlciIsImVsIiwiZGF0YSIsImdldERhdGEiLCJhcHBlbmRDaGlsZCIsImdldEVsZW1lbnRCeUlkIiwicGVvcGxlQ2xvbmUiLCJzdHJpbmdlZEVsIiwic3RyaW5nIiwidXBkYXRlZENhbmRpZGF0ZXMiLCJyZW1vdmVJdGVtIiwidXBkYXRlQ2FuZGlkYXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLENBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbkI7QUFDQSxJQUFN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QUwsQ0FBZW1DLGlCQUFmLENBQS9CO0FBQ0Q7O0FBRUR6QixNQUFNLENBQUMyQixlQUFQLEdBQXlCQSxlQUF6QixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL2RyYWcnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkQ2FuZGlkYXRlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3VwZGF0ZUNhbmRpZGF0ZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWxldGVDYW5kaWRhdGUnO1xuIiwiY29uc3QgYWRkUGVyc29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC1wZXJzb24nKTtcbmNvbnN0IHBlb3BsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVvcGxlJyk7XG5jb25zdCBwZW9wbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZW9wbGUnKSkgfHwgW107XG5jb25zdCBjb250YWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG5jb25zdCBkaWFsb2d1ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9ndWUnKTtcbmNvbnN0IGludGVydmlld0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW50ZXJ2aWV3Jyk7XG5jb25zdCBvZmZlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb2ZmZXInKTtcbmNvbnN0IHRlcm1pbmF0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXJtaW5hdGlvbicpO1xuXG5jb25zdCBJRCA9IGZ1bmN0aW9uKCkge1xuICAvLyBDcmVhdGUgYSB1bmlxdWUgaWQgZm9yIGVhY2ggcGVyc29uIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgLy8gTWF0aC5yYW5kb20gc2hvdWxkIGJlIHVuaXF1ZSBiZWNhdXNlIG9mIGl0cyBzZWVkaW5nIGFsZ29yaXRobS5cbiAgLy8gQ29udmVydCBpdCB0byBiYXNlIDM2IChudW1iZXJzICsgbGV0dGVycyksIGFuZCBncmFiIHRoZSBmaXJzdCA5IGNoYXJhY3RlcnNcbiAgLy8gYWZ0ZXIgdGhlIGRlY2ltYWwuXG4gIHJldHVybiAoXG4gICAgJ18nICtcbiAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAuc3Vic3RyKDIsIDkpXG4gICk7XG59O1xuXG4vLyBmdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGlkKSB7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XG5cbi8vICAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCd3YXMgY2xpY2tlZCcsIHRoaXMpO1xuLy8gICB9KTtcbi8vIH1cblxuZnVuY3Rpb24gYWRkQ2FuZGlkYXRlKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuYW1lID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1uYW1lXScpLnZhbHVlO1xuICBjb25zdCBhZ2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWFnZV0nKS52YWx1ZTtcbiAgY29uc3QgZW1haWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWVtYWlsXScpLnZhbHVlO1xuICBjb25zdCBhZGRyZXNzID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZGRyZXNzXScpLnZhbHVlO1xuICBjb25zdCBpbWFnZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9aW1hZ2VdJykudmFsdWU7XG4gIGNvbnN0IHN0YWdlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1zdGFnZV0nKS52YWx1ZTtcbiAgY29uc3QgdXNlcklEID0gSUQoKTtcblxuICBjb25zdCBwZXJzb24gPSB7XG4gICAgbmFtZSxcbiAgICBhZ2UsXG4gICAgZW1haWwsXG4gICAgYWRkcmVzcyxcbiAgICBpbWFnZSxcbiAgICBzdGFnZSxcbiAgICB1c2VySURcbiAgfTtcblxuICBjb25zb2xlLmxvZyhwZXJzb24pO1xuXG4gIHBlb3BsZS5wdXNoKHBlcnNvbik7XG4gIHBvcHVsYXRlTGlzdChwZW9wbGUsIHBlb3BsZUxpc3QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkocGVvcGxlKSk7XG4gIHRoaXMucmVzZXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTGlzdChwZW9wbGUgPSBbXSwgcGVvcGxlTGlzdCkge1xuICBjb250YWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgZGlhbG9ndWVMaXN0LmlubmVySFRNTCA9ICcnO1xuICBpbnRlcnZpZXdMaXN0LmlubmVySFRNTCA9ICcnO1xuICBvZmZlckxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIHRlcm1pbmF0aW9uTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgcGVvcGxlLm1hcChwID0+IHtcbiAgICBpZiAocC5zdGFnZSA9PT0gJ0tvbnRha3QnKSB7XG4gICAgICBjb250YWN0TGlzdC5pbm5lckhUTUwgPSBwZW9wbGVcbiAgICAgICAgLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnN0YWdlID09PSAnS29udGFrdCcpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwibmFtZVwiPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImFnZVwiPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiZW1haWxcIj4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiYWRkcmVzc1wiPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImltYWdlXCI+JHtwZXJzb24uaW1hZ2V9PC9wPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3RhZ2Utc2VsZWN0XCIgbmFtZT1cInN0YWdlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tUmVrcnl0ZXJpbmdzc3RlZy08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktvbnRha3RcIiBzZWxlY3RlZD5Lb250YWt0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEaWFsb2dcIj5EaWFsb2c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkludGVydmp1XCI+SW50ZXJ2anU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVyYmp1ZGFuZGVcIj5FcmJqdWRhbmRlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBdnNsdXRhZFwiID5BdnNsdXRhZDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPHAgPiR7cGVyc29uLnVzZXJJRH08L3A+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2UtYnV0dG9uXCI+w4RuZHJhPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+VGEgYm9ydDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAocC5zdGFnZSA9PT0gJ0RpYWxvZycpIHtcbiAgICAgIGRpYWxvZ3VlTGlzdC5pbm5lckhUTUwgPSBwZW9wbGVcbiAgICAgICAgLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnN0YWdlID09PSAnRGlhbG9nJylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgPHA+JHtwZXJzb24ubmFtZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHAgPiR7cGVyc29uLnN0YWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24udXNlcklEfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdJbnRlcnZqdScpIHtcbiAgICAgIGludGVydmlld0xpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0ludGVydmp1JylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgPHA+JHtwZXJzb24ubmFtZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uc3RhZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi51c2VySUR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAocC5zdGFnZSA9PT0gJ0VyYmp1ZGFuZGUnKSB7XG4gICAgICBvZmZlckxpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0VyYmp1ZGFuZGUnKVxuICAgICAgICAubWFwKChwZXJzb24sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7cGVyc29uLnVzZXJJRH1cIiBkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgIHBlcnNvbi51c2VySURcbiAgICAgICAgICB9XCIgbmFtZT1cInBlcnNvbiR7aX1cIiBjbGFzcz1cInBlb3BsZS1saXN0XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG9uZHJhZ3N0YXJ0PVwiZHJhZ3N0YXJ0X2hhbmRsZXIoZXZlbnQpO1wiPlxuICAgICAgICA8cD4ke3BlcnNvbi5uYW1lfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uZW1haWx9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZGRyZXNzfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uaW1hZ2V9PC9wPlxuICAgICAgICA8cCA+JHtwZXJzb24uc3RhZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi51c2VySUR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICBpZiAocC5zdGFnZSA9PT0gJ0F2c2x1dGFkJykge1xuICAgICAgdGVybWluYXRpb25MaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdBdnNsdXRhZCcpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5pbWFnZX08L3A+XG4gICAgICAgIDxwID4ke3BlcnNvbi5zdGFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLnVzZXJJRH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICB9KTtcbn1cblxuYWRkUGVyc29uLmZvckVhY2gocGVyc29uID0+IHBlcnNvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRDYW5kaWRhdGUpKTtcblxucG9wdWxhdGVMaXN0KHBlb3BsZSwgcGVvcGxlTGlzdCk7XG53aW5kb3cucG9wdWxhdGVMaXN0ID0gcG9wdWxhdGVMaXN0O1xuIiwiaW1wb3J0IHsgcG9wdWxhdGVMaXN0IH0gZnJvbSAnLi9hZGRDYW5kaWRhdGUnO1xuXG5mdW5jdGlvbiBkZWxldGVDYW5kaWRhdGUoZSkge1xuICBjb25zb2xlLmxvZygnZGVsZXRlY2FuZGlkYXRlIHdhcyBjbGlja2VkJywgZSk7XG4gIGNvbnN0IHBlb3BsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVvcGxlJyk7XG4gIC8vZ2V0IHRoZSB1c2VySURcbiAgY29uc3QgdXNlcklEID0gdGhpcy5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cbiAgY29uc3QgcGVvcGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlJykpIHx8IFtdO1xuXG4gIHZhciBpbmRleCA9IHBlb3BsZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnVzZXJJRCA9PT0gdXNlcklEKTtcblxuICAvLyBEZWxldGUgIHRoZSBpdGVtIGJ5IGluZGV4LlxuICBwZW9wbGUuc3BsaWNlKGluZGV4LCAxKTtcblxuICAvLyBUbyBjaGVjay5cbiAgY29uc29sZS5sb2cocGVvcGxlKTtcblxuICBwb3B1bGF0ZUxpc3QocGVvcGxlLCBwZW9wbGVMaXN0KTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkocGVvcGxlKSk7XG59XG5cbndpbmRvdy5kZWxldGVDYW5kaWRhdGUgPSBkZWxldGVDYW5kaWRhdGU7XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZUxpc3QgfSBmcm9tICcuL2FkZENhbmRpZGF0ZSc7XG5cbmZ1bmN0aW9uIGRyYWdzdGFydF9oYW5kbGVyKGV2KSB7XG4gIGNvbnNvbGUubG9nKCdkcmFnU3RhcnQnKTtcbiAgLy8gQWRkIHRoZSB0YXJnZXQgZWxlbWVudCdzIGlkIHRvIHRoZSBkYXRhIHRyYW5zZmVyIG9iamVjdFxuICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2LnRhcmdldC5pZCk7XG4gIGV2LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xufVxuXG5mdW5jdGlvbiBkcmFnb3Zlcl9oYW5kbGVyKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIFNldCB0aGUgZHJvcEVmZmVjdCB0byBtb3ZlXG4gIGV2LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xufVxuXG5mdW5jdGlvbiBkcm9wX2hhbmRsZXIoZXYsIGVsKSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIEdldCB0aGUgaWQgb2YgdGhlIHRhcmdldCBhbmQgYWRkIHRoZSBtb3ZlZCBlbGVtZW50IHRvIHRoZSB0YXJnZXQncyBET01cbiAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICBjb25zb2xlLmxvZyh7IGRhdGEsIGVsIH0pO1xuICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKSk7XG5cbiAgY29uc3QgcGVvcGxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGUnKTtcbiAgY29uc3QgcGVvcGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlJykpIHx8IFtdO1xuICBsZXQgcGVvcGxlQ2xvbmUgPSBbLi4ucGVvcGxlXTtcblxuICBsZXQgc3RyaW5nZWRFbCA9IGVsO1xuICBjb25zb2xlLmxvZyhzdHJpbmdlZEVsKTtcbiAgbGV0IHN0cmluZyA9ICcnICsgZWw7XG4gIGNvbnNvbGUubG9nKHN0cmluZ2VkRWwuaWQpO1xuXG4gIC8vZmluZCB0aGUgcmlnaHQgcGVyc29uIGFuZCB1cGRhdGUgdGhlIHN0YWdlIGF0dHIgb24gZHJvcFxuXG4gIGlmIChzdHJpbmdlZEVsLmlkID09ICdjb250YWN0Jykge1xuICAgIGxldCB1cGRhdGVkQ2FuZGlkYXRlcyA9IHBlb3BsZUNsb25lLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnVzZXJJRCA9PT0gZGF0YSkge1xuICAgICAgICBpdGVtLnN0YWdlID0gJ0tvbnRha3QnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICBwb3B1bGF0ZUxpc3QodXBkYXRlZENhbmRpZGF0ZXMsIHBlb3BsZUxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZW9wbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhbmRpZGF0ZXMpKTtcbiAgfVxuICBpZiAoc3RyaW5nZWRFbC5pZCA9PSAnZGlhbG9ndWUnKSB7XG4gICAgbGV0IHVwZGF0ZWRDYW5kaWRhdGVzID0gcGVvcGxlQ2xvbmUuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udXNlcklEID09PSBkYXRhKSB7XG4gICAgICAgIGl0ZW0uc3RhZ2UgPSAnRGlhbG9nJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuXG4gICAgcG9wdWxhdGVMaXN0KHVwZGF0ZWRDYW5kaWRhdGVzLCBwZW9wbGVMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVvcGxlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG4gIH1cbiAgaWYgKHN0cmluZ2VkRWwuaWQgPT0gJ2ludGVydmlldycpIHtcbiAgICBsZXQgdXBkYXRlZENhbmRpZGF0ZXMgPSBwZW9wbGVDbG9uZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS51c2VySUQgPT09IGRhdGEpIHtcbiAgICAgICAgaXRlbS5zdGFnZSA9ICdJbnRlcnZqdSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcblxuICAgIHBvcHVsYXRlTGlzdCh1cGRhdGVkQ2FuZGlkYXRlcywgcGVvcGxlTGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG4gIH1cbiAgaWYgKHN0cmluZ2VkRWwuaWQgPT0gJ29mZmVyJykge1xuICAgIGxldCB1cGRhdGVkQ2FuZGlkYXRlcyA9IHBlb3BsZUNsb25lLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnVzZXJJRCA9PT0gZGF0YSkge1xuICAgICAgICBpdGVtLnN0YWdlID0gJ0VyYmp1ZGFuZGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICBwb3B1bGF0ZUxpc3QodXBkYXRlZENhbmRpZGF0ZXMsIHBlb3BsZUxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZW9wbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhbmRpZGF0ZXMpKTtcbiAgfVxuICBpZiAoc3RyaW5nZWRFbC5pZCA9PSAndGVybWluYXRpb24nKSB7XG4gICAgY29uc29sZS5sb2coJ2l0IGlzIHRlcm1pbmF0aXBuJyk7XG4gICAgbGV0IHVwZGF0ZWRDYW5kaWRhdGVzID0gcGVvcGxlQ2xvbmUuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udXNlcklEID09PSBkYXRhKSB7XG4gICAgICAgIGl0ZW0uc3RhZ2UgPSAnQXZzbHV0YWQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICBwb3B1bGF0ZUxpc3QodXBkYXRlZENhbmRpZGF0ZXMsIHBlb3BsZUxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZW9wbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhbmRpZGF0ZXMpKTtcbiAgfVxufVxuXG4vLyBCaW5kIGZuIHRvIHRoZSB3aW5kb3dcbi8vIHdpbmRvdy5mb28gPSBmb287XG5cbndpbmRvdy5kcmFnc3RhcnRfaGFuZGxlciA9IGRyYWdzdGFydF9oYW5kbGVyO1xud2luZG93LmRyYWdvdmVyX2hhbmRsZXIgPSBkcmFnb3Zlcl9oYW5kbGVyO1xud2luZG93LmRyb3BfaGFuZGxlciA9IGRyb3BfaGFuZGxlcjtcbiIsImltcG9ydCB7IHBvcHVsYXRlTGlzdCB9IGZyb20gJy4vYWRkQ2FuZGlkYXRlJztcblxuLy8gY29uc3QgY29sdW1uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1jYW52YXMnKTtcbi8vIGNvbnN0IGJ1dHRvbnMgPSBjb2x1bW4uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpO1xuLy8gY29uc3QgYnV0dG9uc0FycmF5ID0gQXJyYXkuZnJvbShidXR0b25zKTtcbi8vIGNvbnNvbGUubG9nKGJ1dHRvbnNBcnJheSk7XG4vLyBidXR0b25zQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+XG4vLyAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVDYW5kaWRhdGUpXG4vLyApO1xuXG5mdW5jdGlvbiB1cGRhdGVDYW5kaWRhdGUoZSkge1xuICBjb25zb2xlLmxvZygnd2FzIGNsaWNrZWQgeW8nKTtcbiAgY29uc29sZS5sb2coZSk7XG5cbiAgLy9nZXQgdmFsdWVzIGZyb20gZWRpdGFibGUgSFRNTFxuICBjb25zdCBwZW9wbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlb3BsZScpO1xuICBjb25zdCBuYW1lID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPW5hbWVdJykuaW5uZXJIVE1MO1xuICBjb25zdCBhZ2UgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignW25hbWU9YWdlXScpLmlubmVySFRNTDtcbiAgY29uc3QgZW1haWwgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignW25hbWU9ZW1haWxdJykuaW5uZXJIVE1MO1xuICBjb25zdCBhZGRyZXNzID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWFkZHJlc3NdJykuaW5uZXJIVE1MO1xuICBjb25zdCBpbWFnZSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1pbWFnZV0nKS5pbm5lckhUTUw7XG4gIGNvbnN0IHN0YWdlID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPXN0YWdlXScpLnZhbHVlO1xuICBjb25zdCB1c2VySUQgPSB0aGlzLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcbiAgY29uc3QgcGVvcGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlJykpIHx8IFtdO1xuXG4gIGNvbnN0IHBlcnNvbiA9IHtcbiAgICBuYW1lLFxuICAgIGFnZSxcbiAgICBlbWFpbCxcbiAgICBhZGRyZXNzLFxuICAgIGltYWdlLFxuICAgIHN0YWdlLFxuICAgIHVzZXJJRFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKHBlcnNvbik7XG5cbiAgbGV0IHBlb3BsZUNsb25lID0gWy4uLnBlb3BsZV07XG5cbiAgLy9maW5kIHRoZSByaWdodCBwZXJzb24gYW5kIHVwZGF0ZSB3aGF0cyBuZXdcblxuICBsZXQgdXBkYXRlZENhbmRpZGF0ZXMgPSBwZW9wbGVDbG9uZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0udXNlcklEID09PSBwZXJzb24udXNlcklEKSB7XG4gICAgICBpdGVtLm5hbWUgPSBwZXJzb24ubmFtZTtcbiAgICAgIGl0ZW0uYWdlID0gcGVyc29uLmFnZTtcbiAgICAgIGl0ZW0uZW1haWwgPSBwZXJzb24uZW1haWw7XG4gICAgICBpdGVtLmFkZHJlc3MgPSBwZXJzb24uYWRkcmVzcztcbiAgICAgIGl0ZW0uaW1hZ2UgPSBwZXJzb24uaW1hZ2U7XG4gICAgICBpdGVtLnN0YWdlID0gcGVyc29uLnN0YWdlO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtO1xuICB9KTtcbiAgY29uc29sZS5sb2codXBkYXRlZENhbmRpZGF0ZXMpO1xuXG4gIHBvcHVsYXRlTGlzdCh1cGRhdGVkQ2FuZGlkYXRlcywgcGVvcGxlTGlzdCk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZW9wbGUnKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG59XG5cbndpbmRvdy51cGRhdGVDYW5kaWRhdGUgPSB1cGRhdGVDYW5kaWRhdGU7XG4iXSwic291cmNlUm9vdCI6IiJ9