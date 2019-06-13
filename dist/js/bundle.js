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
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search */ "./src/js/components/search.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_search__WEBPACK_IMPORTED_MODULE_4__);






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

/***/ "./src/js/components/search.js":
/*!*************************************!*\
  !*** ./src/js/components/search.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var inputField = document.querySelector('.search-box');
var input = document.querySelector('.search');
var peopleArray = JSON.parse(localStorage.getItem('people')) || [];
var suggestions = document.querySelector('.suggestions');

var handleClick = function handleClick(e) {
  var offClick = function offClick(evt) {
    if (e !== evt) {
      inputField.classList.toggle('search-box__open');
      suggestions.classList.toggle('suggestions_on');
      document.removeEventListener('click', offClick);
    }
  };

  if (!inputField.classList.contains('search-box__open')) {
    inputField.classList.toggle('search-box__open');
    suggestions.classList.toggle('suggestions_on');
    document.addEventListener('click', offClick);
  }
};

function searchCandidates(inputValue, peopleArray) {
  return peopleArray.filter(function (person) {
    var regex = new RegExp(inputValue, 'gi');
    return person.name.match(regex) || person.address.match(regex) || person.stage.match(regex) || person.age.match(regex);
  });
}

function inputValue() {
  var _this = this;

  var matchedArray = searchCandidates(this.value, peopleArray);
  var html = matchedArray.map(function (matches) {
    var regex = new RegExp(_this.value, 'gi');
    var personName = matches.name.replace(regex, "<span class=\"hl\">".concat(_this.value, "</span>"));
    var addressName = matches.address.replace(regex, "<span class=\"hl\">".concat(_this.value, "</span>"));
    return "\n        <li>\n        <span class=\"name\">\n        ".concat(personName, " ").concat(addressName, "\n        </span>\n        <span class=\"population\">\n        ").concat(matches.email, "</span>\n        </li>");
  }).join('');
  suggestions.innerHTML = html;
}

inputField.addEventListener('click', handleClick);
input.addEventListener('change', inputValue);
input.addEventListener('keyup', inputValue);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZGRDYW5kaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGVsZXRlQ2FuZGlkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RyYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3VwZGF0ZUNhbmRpZGF0ZS5qcyJdLCJuYW1lcyI6WyJhZGRQZXJzb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwZW9wbGVMaXN0IiwicXVlcnlTZWxlY3RvciIsInBlb3BsZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb250YWN0TGlzdCIsImRpYWxvZ3VlTGlzdCIsImludGVydmlld0xpc3QiLCJvZmZlckxpc3QiLCJ0ZXJtaW5hdGlvbkxpc3QiLCJJRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImFkZENhbmRpZGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ2YWx1ZSIsImFnZSIsImVtYWlsIiwiYWRkcmVzcyIsImltYWdlIiwic3RhZ2UiLCJ1c2VySUQiLCJwZXJzb24iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBvcHVsYXRlTGlzdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZXNldCIsImlubmVySFRNTCIsIm1hcCIsInAiLCJmaWx0ZXIiLCJpIiwiam9pbiIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZGVsZXRlQ2FuZGlkYXRlIiwicGFyZW50Tm9kZSIsImRhdGFzZXQiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsImRyYWdzdGFydF9oYW5kbGVyIiwiZXYiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiZHJvcEVmZmVjdCIsImRyYWdvdmVyX2hhbmRsZXIiLCJkcm9wX2hhbmRsZXIiLCJlbCIsImRhdGEiLCJnZXREYXRhIiwiYXBwZW5kQ2hpbGQiLCJnZXRFbGVtZW50QnlJZCIsInBlb3BsZUNsb25lIiwic3RyaW5nZWRFbCIsInN0cmluZyIsInVwZGF0ZWRDYW5kaWRhdGVzIiwicmVtb3ZlSXRlbSIsImlucHV0RmllbGQiLCJpbnB1dCIsInBlb3BsZUFycmF5Iiwic3VnZ2VzdGlvbnMiLCJoYW5kbGVDbGljayIsIm9mZkNsaWNrIiwiZXZ0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5zIiwic2VhcmNoQ2FuZGlkYXRlcyIsImlucHV0VmFsdWUiLCJyZWdleCIsIlJlZ0V4cCIsIm1hdGNoIiwibWF0Y2hlZEFycmF5IiwiaHRtbCIsIm1hdGNoZXMiLCJwZXJzb25OYW1lIiwicmVwbGFjZSIsImFkZHJlc3NOYW1lIiwidXBkYXRlQ2FuZGlkYXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLENBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbkI7QUFDQSxJQUFNQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBWCxLQUE4QyxFQUE3RDtBQUNBLElBQU1DLFdBQVcsR0FBR1QsUUFBUSxDQUFDRyxhQUFULENBQXVCLFVBQXZCLENBQXBCO0FBQ0EsSUFBTU8sWUFBWSxHQUFHVixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBckI7QUFDQSxJQUFNUSxhQUFhLEdBQUdYLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixZQUF2QixDQUF0QjtBQUNBLElBQU1TLFNBQVMsR0FBR1osUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQWxCO0FBQ0EsSUFBTVUsZUFBZSxHQUFHYixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBeEI7O0FBRUEsSUFBTVcsRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBVztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQ0UsTUFDQUMsSUFBSSxDQUFDQyxNQUFMLEdBQ0dDLFFBREgsQ0FDWSxFQURaLEVBRUdDLE1BRkgsQ0FFVSxDQUZWLEVBRWEsQ0FGYixDQUZGO0FBTUQsQ0FYRCxDLENBYUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUN2QkEsR0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLEtBQUtuQixhQUFMLENBQW1CLGFBQW5CLEVBQWtDb0IsS0FBL0M7QUFDQSxNQUFNQyxHQUFHLEdBQUcsS0FBS3JCLGFBQUwsQ0FBbUIsWUFBbkIsRUFBaUNvQixLQUE3QztBQUNBLE1BQU1FLEtBQUssR0FBRyxLQUFLdEIsYUFBTCxDQUFtQixjQUFuQixFQUFtQ29CLEtBQWpEO0FBQ0EsTUFBTUcsT0FBTyxHQUFHLEtBQUt2QixhQUFMLENBQW1CLGdCQUFuQixFQUFxQ29CLEtBQXJEO0FBQ0EsTUFBTUksS0FBSyxHQUFHLEtBQUt4QixhQUFMLENBQW1CLGNBQW5CLEVBQW1Db0IsS0FBakQ7QUFDQSxNQUFNSyxLQUFLLEdBQUcsS0FBS3pCLGFBQUwsQ0FBbUIsY0FBbkIsRUFBbUNvQixLQUFqRDtBQUNBLE1BQU1NLE1BQU0sR0FBR2YsRUFBRSxFQUFqQjtBQUVBLE1BQU1nQixNQUFNLEdBQUc7QUFDYlIsUUFBSSxFQUFKQSxJQURhO0FBRWJFLE9BQUcsRUFBSEEsR0FGYTtBQUdiQyxTQUFLLEVBQUxBLEtBSGE7QUFJYkMsV0FBTyxFQUFQQSxPQUphO0FBS2JDLFNBQUssRUFBTEEsS0FMYTtBQU1iQyxTQUFLLEVBQUxBLEtBTmE7QUFPYkMsVUFBTSxFQUFOQTtBQVBhLEdBQWY7QUFVQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFFQTFCLFFBQU0sQ0FBQzZCLElBQVAsQ0FBWUgsTUFBWjtBQUNBSSxjQUFZLENBQUM5QixNQUFELEVBQVNGLFVBQVQsQ0FBWjtBQUNBSyxjQUFZLENBQUM0QixPQUFiLENBQXFCLFFBQXJCLEVBQStCOUIsSUFBSSxDQUFDK0IsU0FBTCxDQUFlaEMsTUFBZixDQUEvQjtBQUNBLE9BQUtpQyxLQUFMO0FBQ0Q7O0FBRU0sU0FBU0gsWUFBVCxHQUErQztBQUFBLE1BQXpCOUIsTUFBeUIsdUVBQWhCLEVBQWdCO0FBQUEsTUFBWkYsVUFBWTtBQUNwRE8sYUFBVyxDQUFDNkIsU0FBWixHQUF3QixFQUF4QjtBQUNBNUIsY0FBWSxDQUFDNEIsU0FBYixHQUF5QixFQUF6QjtBQUNBM0IsZUFBYSxDQUFDMkIsU0FBZCxHQUEwQixFQUExQjtBQUNBMUIsV0FBUyxDQUFDMEIsU0FBVixHQUFzQixFQUF0QjtBQUNBekIsaUJBQWUsQ0FBQ3lCLFNBQWhCLEdBQTRCLEVBQTVCO0FBQ0FsQyxRQUFNLENBQUNtQyxHQUFQLENBQVcsVUFBQUMsQ0FBQyxFQUFJO0FBQ2QsUUFBSUEsQ0FBQyxDQUFDWixLQUFGLEtBQVksU0FBaEIsRUFBMkI7QUFDekJuQixpQkFBVyxDQUFDNkIsU0FBWixHQUF3QmxDLE1BQU0sQ0FDM0JxQyxNQURxQixDQUNkLFVBQUFYLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNGLEtBQVAsS0FBaUIsU0FBckI7QUFBQSxPQURRLEVBRXJCVyxHQUZxQixDQUVqQixVQUFDVCxNQUFELEVBQVNZLENBQVQsRUFBZTtBQUNsQiwyQ0FDT1osTUFBTSxDQUFDRCxNQURkLDBCQUVFQyxNQUFNLENBQUNELE1BRlQsNkJBR2lCYSxDQUhqQix1SkFJc0NaLE1BQU0sQ0FBQ1IsSUFKN0Msb0VBS3FDUSxNQUFNLENBQUNOLEdBTDVDLHNFQU11Q00sTUFBTSxDQUFDTCxLQU45Qyx3RUFPeUNLLE1BQU0sQ0FBQ0osT0FQaEQsc0VBUXVDSSxNQUFNLENBQUNILEtBUjlDLDRkQWlCSUcsTUFBTSxDQUFDRCxNQWpCWDtBQXNCRCxPQXpCcUIsRUEwQnJCYyxJQTFCcUIsQ0EwQmhCLEVBMUJnQixDQUF4QjtBQTJCRDs7QUFDRCxRQUFJSCxDQUFDLENBQUNaLEtBQUYsS0FBWSxRQUFoQixFQUEwQjtBQUN4QmxCLGtCQUFZLENBQUM0QixTQUFiLEdBQXlCbEMsTUFBTSxDQUM1QnFDLE1BRHNCLENBQ2YsVUFBQVgsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ0YsS0FBUCxLQUFpQixRQUFyQjtBQUFBLE9BRFMsRUFFdEJXLEdBRnNCLENBRWxCLFVBQUNULE1BQUQsRUFBU1ksQ0FBVCxFQUFlO0FBQ2xCLDJDQUNPWixNQUFNLENBQUNELE1BRGQsMEJBRUVDLE1BQU0sQ0FBQ0QsTUFGVCw2QkFHaUJhLENBSGpCLGdIQUlHWixNQUFNLENBQUNSLElBSlYsOEJBS0dRLE1BQU0sQ0FBQ04sR0FMViw4QkFNR00sTUFBTSxDQUFDTCxLQU5WLDhCQU9HSyxNQUFNLENBQUNKLE9BUFYsOEJBUUdJLE1BQU0sQ0FBQ0gsS0FSViwrQkFTSUcsTUFBTSxDQUFDRixLQVRYLDhCQVVHRSxNQUFNLENBQUNELE1BVlY7QUFhRCxPQWhCc0IsRUFpQnRCYyxJQWpCc0IsQ0FpQmpCLEVBakJpQixDQUF6QjtBQWtCRDs7QUFDRCxRQUFJSCxDQUFDLENBQUNaLEtBQUYsS0FBWSxVQUFoQixFQUE0QjtBQUMxQmpCLG1CQUFhLENBQUMyQixTQUFkLEdBQTBCbEMsTUFBTSxDQUM3QnFDLE1BRHVCLENBQ2hCLFVBQUFYLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNGLEtBQVAsS0FBaUIsVUFBckI7QUFBQSxPQURVLEVBRXZCVyxHQUZ1QixDQUVuQixVQUFDVCxNQUFELEVBQVNZLENBQVQsRUFBZTtBQUNsQiwyQ0FDT1osTUFBTSxDQUFDRCxNQURkLDBCQUVFQyxNQUFNLENBQUNELE1BRlQsNkJBR2lCYSxDQUhqQixnSEFJR1osTUFBTSxDQUFDUixJQUpWLDhCQUtHUSxNQUFNLENBQUNOLEdBTFYsOEJBTUdNLE1BQU0sQ0FBQ0wsS0FOViw4QkFPR0ssTUFBTSxDQUFDSixPQVBWLDhCQVFHSSxNQUFNLENBQUNILEtBUlYsOEJBU0dHLE1BQU0sQ0FBQ0YsS0FUViw4QkFVR0UsTUFBTSxDQUFDRCxNQVZWO0FBYUQsT0FoQnVCLEVBaUJ2QmMsSUFqQnVCLENBaUJsQixFQWpCa0IsQ0FBMUI7QUFrQkQ7O0FBQ0QsUUFBSUgsQ0FBQyxDQUFDWixLQUFGLEtBQVksWUFBaEIsRUFBOEI7QUFDNUJoQixlQUFTLENBQUMwQixTQUFWLEdBQXNCbEMsTUFBTSxDQUN6QnFDLE1BRG1CLENBQ1osVUFBQVgsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ0YsS0FBUCxLQUFpQixZQUFyQjtBQUFBLE9BRE0sRUFFbkJXLEdBRm1CLENBRWYsVUFBQ1QsTUFBRCxFQUFTWSxDQUFULEVBQWU7QUFDbEIsMkNBQ09aLE1BQU0sQ0FBQ0QsTUFEZCwwQkFFRUMsTUFBTSxDQUFDRCxNQUZULDZCQUdpQmEsQ0FIakIsZ0hBSUdaLE1BQU0sQ0FBQ1IsSUFKViw4QkFLR1EsTUFBTSxDQUFDTixHQUxWLDhCQU1HTSxNQUFNLENBQUNMLEtBTlYsOEJBT0dLLE1BQU0sQ0FBQ0osT0FQViw4QkFRR0ksTUFBTSxDQUFDSCxLQVJWLCtCQVNJRyxNQUFNLENBQUNGLEtBVFgsOEJBVUdFLE1BQU0sQ0FBQ0QsTUFWVjtBQWFELE9BaEJtQixFQWlCbkJjLElBakJtQixDQWlCZCxFQWpCYyxDQUF0QjtBQWtCRDs7QUFDRCxRQUFJSCxDQUFDLENBQUNaLEtBQUYsS0FBWSxVQUFoQixFQUE0QjtBQUMxQmYscUJBQWUsQ0FBQ3lCLFNBQWhCLEdBQTRCbEMsTUFBTSxDQUMvQnFDLE1BRHlCLENBQ2xCLFVBQUFYLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNGLEtBQVAsS0FBaUIsVUFBckI7QUFBQSxPQURZLEVBRXpCVyxHQUZ5QixDQUVyQixVQUFDVCxNQUFELEVBQVNZLENBQVQsRUFBZTtBQUNsQiwyQ0FDT1osTUFBTSxDQUFDRCxNQURkLDBCQUVFQyxNQUFNLENBQUNELE1BRlQsNkJBR2lCYSxDQUhqQixnSEFJR1osTUFBTSxDQUFDUixJQUpWLDhCQUtHUSxNQUFNLENBQUNOLEdBTFYsOEJBTUdNLE1BQU0sQ0FBQ0wsS0FOViw4QkFPR0ssTUFBTSxDQUFDSixPQVBWLDhCQVFHSSxNQUFNLENBQUNILEtBUlYsK0JBU0lHLE1BQU0sQ0FBQ0YsS0FUWCw4QkFVR0UsTUFBTSxDQUFDRCxNQVZWO0FBYUQsT0FoQnlCLEVBaUJ6QmMsSUFqQnlCLENBaUJwQixFQWpCb0IsQ0FBNUI7QUFrQkQ7QUFDRixHQTlHRDtBQStHRDtBQUVENUMsU0FBUyxDQUFDNkMsT0FBVixDQUFrQixVQUFBZCxNQUFNO0FBQUEsU0FBSUEsTUFBTSxDQUFDZSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQzFCLFlBQWxDLENBQUo7QUFBQSxDQUF4QjtBQUVBZSxZQUFZLENBQUM5QixNQUFELEVBQVNGLFVBQVQsQ0FBWjtBQUNBNEMsTUFBTSxDQUFDWixZQUFQLEdBQXNCQSxZQUF0QixDOzs7Ozs7Ozs7Ozs7QUNwTEE7QUFBQTtBQUFBOztBQUVBLFNBQVNhLGVBQVQsQ0FBeUIzQixDQUF6QixFQUE0QjtBQUMxQlcsU0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFBMkNaLENBQTNDO0FBQ0EsTUFBTWxCLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLENBQW5CLENBRjBCLENBRzFCOztBQUNBLE1BQU0wQixNQUFNLEdBQUcsS0FBS21CLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCQyxFQUF2QztBQUVBLE1BQU05QyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBWCxLQUE4QyxFQUE3RDtBQUVBLE1BQUkyQyxLQUFLLEdBQUcvQyxNQUFNLENBQUNnRCxTQUFQLENBQWlCLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUN4QixNQUFMLEtBQWdCQSxNQUFwQjtBQUFBLEdBQXJCLENBQVosQ0FSMEIsQ0FVMUI7O0FBQ0F6QixRQUFNLENBQUNrRCxNQUFQLENBQWNILEtBQWQsRUFBcUIsQ0FBckIsRUFYMEIsQ0FhMUI7O0FBQ0FwQixTQUFPLENBQUNDLEdBQVIsQ0FBWTVCLE1BQVo7QUFFQThCLG9FQUFZLENBQUM5QixNQUFELEVBQVNGLFVBQVQsQ0FBWjtBQUVBSyxjQUFZLENBQUM0QixPQUFiLENBQXFCLFFBQXJCLEVBQStCOUIsSUFBSSxDQUFDK0IsU0FBTCxDQUFlaEMsTUFBZixDQUEvQjtBQUNEOztBQUVEMEMsTUFBTSxDQUFDQyxlQUFQLEdBQXlCQSxlQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBOztBQUVBLFNBQVNRLGlCQUFULENBQTJCQyxFQUEzQixFQUErQjtBQUM3QnpCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFENkIsQ0FFN0I7O0FBQ0F3QixJQUFFLENBQUNDLFlBQUgsQ0FBZ0JDLE9BQWhCLENBQXdCLFlBQXhCLEVBQXNDRixFQUFFLENBQUNHLE1BQUgsQ0FBVVQsRUFBaEQ7QUFDQU0sSUFBRSxDQUFDQyxZQUFILENBQWdCRyxVQUFoQixHQUE2QixNQUE3QjtBQUNEOztBQUVELFNBQVNDLGdCQUFULENBQTBCTCxFQUExQixFQUE4QjtBQUM1QkEsSUFBRSxDQUFDbkMsY0FBSCxHQUQ0QixDQUU1Qjs7QUFDQW1DLElBQUUsQ0FBQ0MsWUFBSCxDQUFnQkcsVUFBaEIsR0FBNkIsTUFBN0I7QUFDRDs7QUFFRCxTQUFTRSxZQUFULENBQXNCTixFQUF0QixFQUEwQk8sRUFBMUIsRUFBOEI7QUFDNUJQLElBQUUsQ0FBQ25DLGNBQUgsR0FENEIsQ0FFNUI7O0FBQ0EsTUFBSTJDLElBQUksR0FBR1IsRUFBRSxDQUFDQyxZQUFILENBQWdCUSxPQUFoQixDQUF3QixZQUF4QixDQUFYO0FBQ0FsQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFZ0MsUUFBSSxFQUFKQSxJQUFGO0FBQVFELE1BQUUsRUFBRkE7QUFBUixHQUFaO0FBQ0FBLElBQUUsQ0FBQ0csV0FBSCxDQUFlbEUsUUFBUSxDQUFDbUUsY0FBVCxDQUF3QkgsSUFBeEIsQ0FBZjtBQUVBLE1BQU05RCxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixTQUF2QixDQUFuQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFYLEtBQThDLEVBQTdEOztBQUNBLE1BQUk0RCxXQUFXLHNCQUFPaEUsTUFBUCxDQUFmOztBQUVBLE1BQUlpRSxVQUFVLEdBQUdOLEVBQWpCO0FBQ0FoQyxTQUFPLENBQUNDLEdBQVIsQ0FBWXFDLFVBQVo7QUFDQSxNQUFJQyxNQUFNLEdBQUcsS0FBS1AsRUFBbEI7QUFDQWhDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZcUMsVUFBVSxDQUFDbkIsRUFBdkIsRUFkNEIsQ0FnQjVCOztBQUVBLE1BQUltQixVQUFVLENBQUNuQixFQUFYLElBQWlCLFNBQXJCLEVBQWdDO0FBQzlCLFFBQUlxQixpQkFBaUIsR0FBR0gsV0FBVyxDQUFDM0IsTUFBWixDQUFtQixVQUFBWSxJQUFJLEVBQUk7QUFDakQsVUFBSUEsSUFBSSxDQUFDeEIsTUFBTCxLQUFnQm1DLElBQXBCLEVBQTBCO0FBQ3hCWCxZQUFJLENBQUN6QixLQUFMLEdBQWEsU0FBYjtBQUNEOztBQUNELGFBQU95QixJQUFQO0FBQ0QsS0FMdUIsQ0FBeEI7QUFPQW5CLHNFQUFZLENBQUNxQyxpQkFBRCxFQUFvQnJFLFVBQXBCLENBQVo7QUFDQUssZ0JBQVksQ0FBQ2lFLFVBQWIsQ0FBd0IsUUFBeEI7QUFDQWpFLGdCQUFZLENBQUM0QixPQUFiLENBQXFCLFFBQXJCLEVBQStCOUIsSUFBSSxDQUFDK0IsU0FBTCxDQUFlbUMsaUJBQWYsQ0FBL0I7QUFDRDs7QUFDRCxNQUFJRixVQUFVLENBQUNuQixFQUFYLElBQWlCLFVBQXJCLEVBQWlDO0FBQy9CLFFBQUlxQixrQkFBaUIsR0FBR0gsV0FBVyxDQUFDM0IsTUFBWixDQUFtQixVQUFBWSxJQUFJLEVBQUk7QUFDakQsVUFBSUEsSUFBSSxDQUFDeEIsTUFBTCxLQUFnQm1DLElBQXBCLEVBQTBCO0FBQ3hCWCxZQUFJLENBQUN6QixLQUFMLEdBQWEsUUFBYjtBQUNEOztBQUNELGFBQU95QixJQUFQO0FBQ0QsS0FMdUIsQ0FBeEI7O0FBT0FuQixzRUFBWSxDQUFDcUMsa0JBQUQsRUFBb0JyRSxVQUFwQixDQUFaO0FBQ0FLLGdCQUFZLENBQUNpRSxVQUFiLENBQXdCLFFBQXhCO0FBQ0FqRSxnQkFBWSxDQUFDNEIsT0FBYixDQUFxQixRQUFyQixFQUErQjlCLElBQUksQ0FBQytCLFNBQUwsQ0FBZW1DLGtCQUFmLENBQS9CO0FBQ0Q7O0FBQ0QsTUFBSUYsVUFBVSxDQUFDbkIsRUFBWCxJQUFpQixXQUFyQixFQUFrQztBQUNoQyxRQUFJcUIsbUJBQWlCLEdBQUdILFdBQVcsQ0FBQzNCLE1BQVosQ0FBbUIsVUFBQVksSUFBSSxFQUFJO0FBQ2pELFVBQUlBLElBQUksQ0FBQ3hCLE1BQUwsS0FBZ0JtQyxJQUFwQixFQUEwQjtBQUN4QlgsWUFBSSxDQUFDekIsS0FBTCxHQUFhLFVBQWI7QUFDRDs7QUFDRCxhQUFPeUIsSUFBUDtBQUNELEtBTHVCLENBQXhCOztBQU9BbkIsc0VBQVksQ0FBQ3FDLG1CQUFELEVBQW9CckUsVUFBcEIsQ0FBWjtBQUNBSyxnQkFBWSxDQUFDNEIsT0FBYixDQUFxQixRQUFyQixFQUErQjlCLElBQUksQ0FBQytCLFNBQUwsQ0FBZW1DLG1CQUFmLENBQS9CO0FBQ0Q7O0FBQ0QsTUFBSUYsVUFBVSxDQUFDbkIsRUFBWCxJQUFpQixPQUFyQixFQUE4QjtBQUM1QixRQUFJcUIsbUJBQWlCLEdBQUdILFdBQVcsQ0FBQzNCLE1BQVosQ0FBbUIsVUFBQVksSUFBSSxFQUFJO0FBQ2pELFVBQUlBLElBQUksQ0FBQ3hCLE1BQUwsS0FBZ0JtQyxJQUFwQixFQUEwQjtBQUN4QlgsWUFBSSxDQUFDekIsS0FBTCxHQUFhLFlBQWI7QUFDRDs7QUFDRCxhQUFPeUIsSUFBUDtBQUNELEtBTHVCLENBQXhCOztBQU9BbkIsc0VBQVksQ0FBQ3FDLG1CQUFELEVBQW9CckUsVUFBcEIsQ0FBWjtBQUNBSyxnQkFBWSxDQUFDaUUsVUFBYixDQUF3QixRQUF4QjtBQUNBakUsZ0JBQVksQ0FBQzRCLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0I5QixJQUFJLENBQUMrQixTQUFMLENBQWVtQyxtQkFBZixDQUEvQjtBQUNEOztBQUNELE1BQUlGLFVBQVUsQ0FBQ25CLEVBQVgsSUFBaUIsYUFBckIsRUFBb0M7QUFDbENuQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjs7QUFDQSxRQUFJdUMsbUJBQWlCLEdBQUdILFdBQVcsQ0FBQzNCLE1BQVosQ0FBbUIsVUFBQVksSUFBSSxFQUFJO0FBQ2pELFVBQUlBLElBQUksQ0FBQ3hCLE1BQUwsS0FBZ0JtQyxJQUFwQixFQUEwQjtBQUN4QlgsWUFBSSxDQUFDekIsS0FBTCxHQUFhLFVBQWI7QUFDRDs7QUFDRCxhQUFPeUIsSUFBUDtBQUNELEtBTHVCLENBQXhCOztBQU9BbkIsc0VBQVksQ0FBQ3FDLG1CQUFELEVBQW9CckUsVUFBcEIsQ0FBWjtBQUNBSyxnQkFBWSxDQUFDaUUsVUFBYixDQUF3QixRQUF4QjtBQUNBakUsZ0JBQVksQ0FBQzRCLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0I5QixJQUFJLENBQUMrQixTQUFMLENBQWVtQyxtQkFBZixDQUEvQjtBQUNEO0FBQ0YsQyxDQUVEO0FBQ0E7OztBQUVBekIsTUFBTSxDQUFDUyxpQkFBUCxHQUEyQkEsaUJBQTNCO0FBQ0FULE1BQU0sQ0FBQ2UsZ0JBQVAsR0FBMEJBLGdCQUExQjtBQUNBZixNQUFNLENBQUNnQixZQUFQLEdBQXNCQSxZQUF0QixDOzs7Ozs7Ozs7OztBQ3BHQSxJQUFNVyxVQUFVLEdBQUd6RSxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFDQSxJQUFNdUUsS0FBSyxHQUFHMUUsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLENBQWQ7QUFDQSxJQUFNd0UsV0FBVyxHQUFHdEUsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFYLEtBQThDLEVBQWxFO0FBQ0EsSUFBTW9FLFdBQVcsR0FBRzVFLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixjQUF2QixDQUFwQjs7QUFFQSxJQUFNMEUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQXpELENBQUMsRUFBSTtBQUN2QixNQUFNMEQsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsR0FBRyxFQUFJO0FBQ3RCLFFBQUkzRCxDQUFDLEtBQUsyRCxHQUFWLEVBQWU7QUFDYk4sZ0JBQVUsQ0FBQ08sU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsa0JBQTVCO0FBQ0FMLGlCQUFXLENBQUNJLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLGdCQUE3QjtBQUNBakYsY0FBUSxDQUFDa0YsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0NKLFFBQXRDO0FBQ0Q7QUFDRixHQU5EOztBQU9BLE1BQUksQ0FBQ0wsVUFBVSxDQUFDTyxTQUFYLENBQXFCRyxRQUFyQixDQUE4QixrQkFBOUIsQ0FBTCxFQUF3RDtBQUN0RFYsY0FBVSxDQUFDTyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixrQkFBNUI7QUFDQUwsZUFBVyxDQUFDSSxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixnQkFBN0I7QUFDQWpGLFlBQVEsQ0FBQzZDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DaUMsUUFBbkM7QUFDRDtBQUNGLENBYkQ7O0FBZUEsU0FBU00sZ0JBQVQsQ0FBMEJDLFVBQTFCLEVBQXNDVixXQUF0QyxFQUFtRDtBQUNqRCxTQUFPQSxXQUFXLENBQUNsQyxNQUFaLENBQW1CLFVBQUFYLE1BQU0sRUFBSTtBQUNsQyxRQUFNd0QsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBV0YsVUFBWCxFQUF1QixJQUF2QixDQUFkO0FBRUEsV0FDRXZELE1BQU0sQ0FBQ1IsSUFBUCxDQUFZa0UsS0FBWixDQUFrQkYsS0FBbEIsS0FDQXhELE1BQU0sQ0FBQ0osT0FBUCxDQUFlOEQsS0FBZixDQUFxQkYsS0FBckIsQ0FEQSxJQUVBeEQsTUFBTSxDQUFDRixLQUFQLENBQWE0RCxLQUFiLENBQW1CRixLQUFuQixDQUZBLElBR0F4RCxNQUFNLENBQUNOLEdBQVAsQ0FBV2dFLEtBQVgsQ0FBaUJGLEtBQWpCLENBSkY7QUFNRCxHQVRNLENBQVA7QUFVRDs7QUFFRCxTQUFTRCxVQUFULEdBQXNCO0FBQUE7O0FBQ3BCLE1BQU1JLFlBQVksR0FBR0wsZ0JBQWdCLENBQUMsS0FBSzdELEtBQU4sRUFBYW9ELFdBQWIsQ0FBckM7QUFFQSxNQUFNZSxJQUFJLEdBQUdELFlBQVksQ0FDdEJsRCxHQURVLENBQ04sVUFBQW9ELE9BQU8sRUFBSTtBQUNkLFFBQU1MLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsS0FBSSxDQUFDaEUsS0FBaEIsRUFBdUIsSUFBdkIsQ0FBZDtBQUNBLFFBQU1xRSxVQUFVLEdBQUdELE9BQU8sQ0FBQ3JFLElBQVIsQ0FBYXVFLE9BQWIsQ0FDakJQLEtBRGlCLCtCQUVHLEtBQUksQ0FBQy9ELEtBRlIsYUFBbkI7QUFJQSxRQUFNdUUsV0FBVyxHQUFHSCxPQUFPLENBQUNqRSxPQUFSLENBQWdCbUUsT0FBaEIsQ0FDbEJQLEtBRGtCLCtCQUVFLEtBQUksQ0FBQy9ELEtBRlAsYUFBcEI7QUFJQSw0RUFHSXFFLFVBSEosY0FHa0JFLFdBSGxCLDZFQU1JSCxPQUFPLENBQUNsRSxLQU5aO0FBUUQsR0FuQlUsRUFvQlZrQixJQXBCVSxDQW9CTCxFQXBCSyxDQUFiO0FBc0JBaUMsYUFBVyxDQUFDdEMsU0FBWixHQUF3Qm9ELElBQXhCO0FBQ0Q7O0FBRURqQixVQUFVLENBQUM1QixnQkFBWCxDQUE0QixPQUE1QixFQUFxQ2dDLFdBQXJDO0FBQ0FILEtBQUssQ0FBQzdCLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDd0MsVUFBakM7QUFDQVgsS0FBSyxDQUFDN0IsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0N3QyxVQUFoQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNVLGVBQVQsQ0FBeUIzRSxDQUF6QixFQUE0QjtBQUMxQlcsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlaLENBQVosRUFGMEIsQ0FJMUI7O0FBQ0EsTUFBTWxCLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFNBQXZCLENBQW5CO0FBQ0EsTUFBTW1CLElBQUksR0FBRyxLQUFLMEIsVUFBTCxDQUFnQjdDLGFBQWhCLENBQThCLGFBQTlCLEVBQTZDbUMsU0FBMUQ7QUFDQSxNQUFNZCxHQUFHLEdBQUcsS0FBS3dCLFVBQUwsQ0FBZ0I3QyxhQUFoQixDQUE4QixZQUE5QixFQUE0Q21DLFNBQXhEO0FBQ0EsTUFBTWIsS0FBSyxHQUFHLEtBQUt1QixVQUFMLENBQWdCN0MsYUFBaEIsQ0FBOEIsY0FBOUIsRUFBOENtQyxTQUE1RDtBQUNBLE1BQU1aLE9BQU8sR0FBRyxLQUFLc0IsVUFBTCxDQUFnQjdDLGFBQWhCLENBQThCLGdCQUE5QixFQUFnRG1DLFNBQWhFO0FBQ0EsTUFBTVgsS0FBSyxHQUFHLEtBQUtxQixVQUFMLENBQWdCN0MsYUFBaEIsQ0FBOEIsY0FBOUIsRUFBOENtQyxTQUE1RDtBQUNBLE1BQU1WLEtBQUssR0FBRyxLQUFLb0IsVUFBTCxDQUFnQjdDLGFBQWhCLENBQThCLGNBQTlCLEVBQThDb0IsS0FBNUQ7QUFDQSxNQUFNTSxNQUFNLEdBQUcsS0FBS21CLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCQyxFQUF2QztBQUNBLE1BQU05QyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBWCxLQUE4QyxFQUE3RDtBQUVBLE1BQU1zQixNQUFNLEdBQUc7QUFDYlIsUUFBSSxFQUFKQSxJQURhO0FBRWJFLE9BQUcsRUFBSEEsR0FGYTtBQUdiQyxTQUFLLEVBQUxBLEtBSGE7QUFJYkMsV0FBTyxFQUFQQSxPQUphO0FBS2JDLFNBQUssRUFBTEEsS0FMYTtBQU1iQyxTQUFLLEVBQUxBLEtBTmE7QUFPYkMsVUFBTSxFQUFOQTtBQVBhLEdBQWY7QUFVQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7O0FBRUEsTUFBSXNDLFdBQVcsc0JBQU9oRSxNQUFQLENBQWYsQ0EzQjBCLENBNkIxQjs7O0FBRUEsTUFBSW1FLGlCQUFpQixHQUFHSCxXQUFXLENBQUMzQixNQUFaLENBQW1CLFVBQUFZLElBQUksRUFBSTtBQUNqRCxRQUFJQSxJQUFJLENBQUN4QixNQUFMLEtBQWdCQyxNQUFNLENBQUNELE1BQTNCLEVBQW1DO0FBQ2pDd0IsVUFBSSxDQUFDL0IsSUFBTCxHQUFZUSxNQUFNLENBQUNSLElBQW5CO0FBQ0ErQixVQUFJLENBQUM3QixHQUFMLEdBQVdNLE1BQU0sQ0FBQ04sR0FBbEI7QUFDQTZCLFVBQUksQ0FBQzVCLEtBQUwsR0FBYUssTUFBTSxDQUFDTCxLQUFwQjtBQUNBNEIsVUFBSSxDQUFDM0IsT0FBTCxHQUFlSSxNQUFNLENBQUNKLE9BQXRCO0FBQ0EyQixVQUFJLENBQUMxQixLQUFMLEdBQWFHLE1BQU0sQ0FBQ0gsS0FBcEI7QUFDQTBCLFVBQUksQ0FBQ3pCLEtBQUwsR0FBYUUsTUFBTSxDQUFDRixLQUFwQjtBQUNEOztBQUVELFdBQU95QixJQUFQO0FBQ0QsR0FYdUIsQ0FBeEI7QUFZQXRCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZdUMsaUJBQVo7QUFFQXJDLG9FQUFZLENBQUNxQyxpQkFBRCxFQUFvQnJFLFVBQXBCLENBQVo7QUFDQUssY0FBWSxDQUFDaUUsVUFBYixDQUF3QixRQUF4QjtBQUNBakUsY0FBWSxDQUFDNEIsT0FBYixDQUFxQixRQUFyQixFQUErQjlCLElBQUksQ0FBQytCLFNBQUwsQ0FBZW1DLGlCQUFmLENBQS9CO0FBQ0Q7O0FBRUR6QixNQUFNLENBQUNpRCxlQUFQLEdBQXlCQSxlQUF6QixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL2RyYWcnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkQ2FuZGlkYXRlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3VwZGF0ZUNhbmRpZGF0ZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWxldGVDYW5kaWRhdGUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VhcmNoJztcbiIsImNvbnN0IGFkZFBlcnNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtcGVyc29uJyk7XG5jb25zdCBwZW9wbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlb3BsZScpO1xuY29uc3QgcGVvcGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlJykpIHx8IFtdO1xuY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuY29uc3QgZGlhbG9ndWVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlJyk7XG5jb25zdCBpbnRlcnZpZXdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludGVydmlldycpO1xuY29uc3Qgb2ZmZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29mZmVyJyk7XG5jb25zdCB0ZXJtaW5hdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVybWluYXRpb24nKTtcblxuY29uc3QgSUQgPSBmdW5jdGlvbigpIHtcbiAgLy8gQ3JlYXRlIGEgdW5pcXVlIGlkIGZvciBlYWNoIHBlcnNvbiBhcHBlbmRlZCB0byB0aGUgRE9NXG4gIC8vIE1hdGgucmFuZG9tIHNob3VsZCBiZSB1bmlxdWUgYmVjYXVzZSBvZiBpdHMgc2VlZGluZyBhbGdvcml0aG0uXG4gIC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG4gIC8vIGFmdGVyIHRoZSBkZWNpbWFsLlxuICByZXR1cm4gKFxuICAgICdfJyArXG4gICAgTWF0aC5yYW5kb20oKVxuICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgLnN1YnN0cigyLCA5KVxuICApO1xufTtcblxuLy8gZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihpZCkge1xuLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xuXG4vLyAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBjb25zb2xlLmxvZygnd2FzIGNsaWNrZWQnLCB0aGlzKTtcbi8vICAgfSk7XG4vLyB9XG5cbmZ1bmN0aW9uIGFkZENhbmRpZGF0ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9bmFtZV0nKS52YWx1ZTtcbiAgY29uc3QgYWdlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZ2VdJykudmFsdWU7XG4gIGNvbnN0IGVtYWlsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1lbWFpbF0nKS52YWx1ZTtcbiAgY29uc3QgYWRkcmVzcyA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9YWRkcmVzc10nKS52YWx1ZTtcbiAgY29uc3QgaW1hZ2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWltYWdlXScpLnZhbHVlO1xuICBjb25zdCBzdGFnZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9c3RhZ2VdJykudmFsdWU7XG4gIGNvbnN0IHVzZXJJRCA9IElEKCk7XG5cbiAgY29uc3QgcGVyc29uID0ge1xuICAgIG5hbWUsXG4gICAgYWdlLFxuICAgIGVtYWlsLFxuICAgIGFkZHJlc3MsXG4gICAgaW1hZ2UsXG4gICAgc3RhZ2UsXG4gICAgdXNlcklEXG4gIH07XG5cbiAgY29uc29sZS5sb2cocGVyc29uKTtcblxuICBwZW9wbGUucHVzaChwZXJzb24pO1xuICBwb3B1bGF0ZUxpc3QocGVvcGxlLCBwZW9wbGVMaXN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHBlb3BsZSkpO1xuICB0aGlzLnJlc2V0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUxpc3QocGVvcGxlID0gW10sIHBlb3BsZUxpc3QpIHtcbiAgY29udGFjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGRpYWxvZ3VlTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgaW50ZXJ2aWV3TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgb2ZmZXJMaXN0LmlubmVySFRNTCA9ICcnO1xuICB0ZXJtaW5hdGlvbkxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIHBlb3BsZS5tYXAocCA9PiB7XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdLb250YWt0Jykge1xuICAgICAgY29udGFjdExpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0tvbnRha3QnKVxuICAgICAgICAubWFwKChwZXJzb24sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7cGVyc29uLnVzZXJJRH1cIiBkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgIHBlcnNvbi51c2VySURcbiAgICAgICAgICB9XCIgbmFtZT1cInBlcnNvbiR7aX1cIiBjbGFzcz1cInBlb3BsZS1saXN0XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG9uZHJhZ3N0YXJ0PVwiZHJhZ3N0YXJ0X2hhbmRsZXIoZXZlbnQpO1wiPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cIm5hbWVcIj4ke3BlcnNvbi5uYW1lfTwvcD5cbiAgICAgICAgPHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJhZ2VcIj4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImVtYWlsXCI+JHtwZXJzb24uZW1haWx9PC9wPlxuICAgICAgICA8cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImFkZHJlc3NcIj4ke3BlcnNvbi5hZGRyZXNzfTwvcD5cbiAgICAgICAgPHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJpbWFnZVwiPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cInN0YWdlLXNlbGVjdFwiIG5hbWU9XCJzdGFnZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LVJla3J5dGVyaW5nc3N0ZWctPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLb250YWt0XCIgc2VsZWN0ZWQ+S29udGFrdDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGlhbG9nXCI+RGlhbG9nPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbnRlcnZqdVwiPkludGVydmp1PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFcmJqdWRhbmRlXCI+RXJianVkYW5kZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZzbHV0YWRcIiA+QXZzbHV0YWQ8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxwID4ke3BlcnNvbi51c2VySUR9PC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLWJ1dHRvblwiPsOEbmRyYTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ1dHRvblwiPlRhIGJvcnQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdEaWFsb2cnKSB7XG4gICAgICBkaWFsb2d1ZUxpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0RpYWxvZycpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5pbWFnZX08L3A+XG4gICAgICAgIDxwID4ke3BlcnNvbi5zdGFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLnVzZXJJRH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICAgIGlmIChwLnN0YWdlID09PSAnSW50ZXJ2anUnKSB7XG4gICAgICBpbnRlcnZpZXdMaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdJbnRlcnZqdScpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgIDxwPiR7cGVyc29uLm5hbWV9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFkZHJlc3N9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5pbWFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLnN0YWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24udXNlcklEfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdFcmJqdWRhbmRlJykge1xuICAgICAgb2ZmZXJMaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdFcmJqdWRhbmRlJylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgPHA+JHtwZXJzb24ubmFtZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmFnZX08L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmVtYWlsfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWRkcmVzc308L3A+XG4gICAgICAgIDxwPiR7cGVyc29uLmltYWdlfTwvcD5cbiAgICAgICAgPHAgPiR7cGVyc29uLnN0YWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24udXNlcklEfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdBdnNsdXRhZCcpIHtcbiAgICAgIHRlcm1pbmF0aW9uTGlzdC5pbm5lckhUTUwgPSBwZW9wbGVcbiAgICAgICAgLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnN0YWdlID09PSAnQXZzbHV0YWQnKVxuICAgICAgICAubWFwKChwZXJzb24sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBpZD1cIiR7cGVyc29uLnVzZXJJRH1cIiBkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgIHBlcnNvbi51c2VySURcbiAgICAgICAgICB9XCIgbmFtZT1cInBlcnNvbiR7aX1cIiBjbGFzcz1cInBlb3BsZS1saXN0XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG9uZHJhZ3N0YXJ0PVwiZHJhZ3N0YXJ0X2hhbmRsZXIoZXZlbnQpO1wiPlxuICAgICAgICA8cD4ke3BlcnNvbi5uYW1lfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uYWdlfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uZW1haWx9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi5hZGRyZXNzfTwvcD5cbiAgICAgICAgPHA+JHtwZXJzb24uaW1hZ2V9PC9wPlxuICAgICAgICA8cCA+JHtwZXJzb24uc3RhZ2V9PC9wPlxuICAgICAgICA8cD4ke3BlcnNvbi51c2VySUR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgfSk7XG59XG5cbmFkZFBlcnNvbi5mb3JFYWNoKHBlcnNvbiA9PiBwZXJzb24uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkQ2FuZGlkYXRlKSk7XG5cbnBvcHVsYXRlTGlzdChwZW9wbGUsIHBlb3BsZUxpc3QpO1xud2luZG93LnBvcHVsYXRlTGlzdCA9IHBvcHVsYXRlTGlzdDtcbiIsImltcG9ydCB7IHBvcHVsYXRlTGlzdCB9IGZyb20gJy4vYWRkQ2FuZGlkYXRlJztcblxuZnVuY3Rpb24gZGVsZXRlQ2FuZGlkYXRlKGUpIHtcbiAgY29uc29sZS5sb2coJ2RlbGV0ZWNhbmRpZGF0ZSB3YXMgY2xpY2tlZCcsIGUpO1xuICBjb25zdCBwZW9wbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlb3BsZScpO1xuICAvL2dldCB0aGUgdXNlcklEXG4gIGNvbnN0IHVzZXJJRCA9IHRoaXMucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuXG4gIGNvbnN0IHBlb3BsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZScpKSB8fCBbXTtcblxuICB2YXIgaW5kZXggPSBwZW9wbGUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS51c2VySUQgPT09IHVzZXJJRCk7XG5cbiAgLy8gRGVsZXRlICB0aGUgaXRlbSBieSBpbmRleC5cbiAgcGVvcGxlLnNwbGljZShpbmRleCwgMSk7XG5cbiAgLy8gVG8gY2hlY2suXG4gIGNvbnNvbGUubG9nKHBlb3BsZSk7XG5cbiAgcG9wdWxhdGVMaXN0KHBlb3BsZSwgcGVvcGxlTGlzdCk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHBlb3BsZSkpO1xufVxuXG53aW5kb3cuZGVsZXRlQ2FuZGlkYXRlID0gZGVsZXRlQ2FuZGlkYXRlO1xuIiwiaW1wb3J0IHsgcG9wdWxhdGVMaXN0IH0gZnJvbSAnLi9hZGRDYW5kaWRhdGUnO1xuXG5mdW5jdGlvbiBkcmFnc3RhcnRfaGFuZGxlcihldikge1xuICBjb25zb2xlLmxvZygnZHJhZ1N0YXJ0Jyk7XG4gIC8vIEFkZCB0aGUgdGFyZ2V0IGVsZW1lbnQncyBpZCB0byB0aGUgZGF0YSB0cmFuc2ZlciBvYmplY3RcbiAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldi50YXJnZXQuaWQpO1xuICBldi5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbn1cblxuZnVuY3Rpb24gZHJhZ292ZXJfaGFuZGxlcihldikge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBTZXQgdGhlIGRyb3BFZmZlY3QgdG8gbW92ZVxuICBldi5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbn1cblxuZnVuY3Rpb24gZHJvcF9oYW5kbGVyKGV2LCBlbCkge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBHZXQgdGhlIGlkIG9mIHRoZSB0YXJnZXQgYW5kIGFkZCB0aGUgbW92ZWQgZWxlbWVudCB0byB0aGUgdGFyZ2V0J3MgRE9NXG4gIHZhciBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgY29uc29sZS5sb2coeyBkYXRhLCBlbCB9KTtcbiAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSkpO1xuXG4gIGNvbnN0IHBlb3BsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVvcGxlJyk7XG4gIGNvbnN0IHBlb3BsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZScpKSB8fCBbXTtcbiAgbGV0IHBlb3BsZUNsb25lID0gWy4uLnBlb3BsZV07XG5cbiAgbGV0IHN0cmluZ2VkRWwgPSBlbDtcbiAgY29uc29sZS5sb2coc3RyaW5nZWRFbCk7XG4gIGxldCBzdHJpbmcgPSAnJyArIGVsO1xuICBjb25zb2xlLmxvZyhzdHJpbmdlZEVsLmlkKTtcblxuICAvL2ZpbmQgdGhlIHJpZ2h0IHBlcnNvbiBhbmQgdXBkYXRlIHRoZSBzdGFnZSBhdHRyIG9uIGRyb3BcblxuICBpZiAoc3RyaW5nZWRFbC5pZCA9PSAnY29udGFjdCcpIHtcbiAgICBsZXQgdXBkYXRlZENhbmRpZGF0ZXMgPSBwZW9wbGVDbG9uZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS51c2VySUQgPT09IGRhdGEpIHtcbiAgICAgICAgaXRlbS5zdGFnZSA9ICdLb250YWt0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuXG4gICAgcG9wdWxhdGVMaXN0KHVwZGF0ZWRDYW5kaWRhdGVzLCBwZW9wbGVMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVvcGxlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG4gIH1cbiAgaWYgKHN0cmluZ2VkRWwuaWQgPT0gJ2RpYWxvZ3VlJykge1xuICAgIGxldCB1cGRhdGVkQ2FuZGlkYXRlcyA9IHBlb3BsZUNsb25lLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnVzZXJJRCA9PT0gZGF0YSkge1xuICAgICAgICBpdGVtLnN0YWdlID0gJ0RpYWxvZyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcblxuICAgIHBvcHVsYXRlTGlzdCh1cGRhdGVkQ2FuZGlkYXRlcywgcGVvcGxlTGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Blb3BsZScpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwZW9wbGUnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkQ2FuZGlkYXRlcykpO1xuICB9XG4gIGlmIChzdHJpbmdlZEVsLmlkID09ICdpbnRlcnZpZXcnKSB7XG4gICAgbGV0IHVwZGF0ZWRDYW5kaWRhdGVzID0gcGVvcGxlQ2xvbmUuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udXNlcklEID09PSBkYXRhKSB7XG4gICAgICAgIGl0ZW0uc3RhZ2UgPSAnSW50ZXJ2anUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICBwb3B1bGF0ZUxpc3QodXBkYXRlZENhbmRpZGF0ZXMsIHBlb3BsZUxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwZW9wbGUnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkQ2FuZGlkYXRlcykpO1xuICB9XG4gIGlmIChzdHJpbmdlZEVsLmlkID09ICdvZmZlcicpIHtcbiAgICBsZXQgdXBkYXRlZENhbmRpZGF0ZXMgPSBwZW9wbGVDbG9uZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS51c2VySUQgPT09IGRhdGEpIHtcbiAgICAgICAgaXRlbS5zdGFnZSA9ICdFcmJqdWRhbmRlJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuXG4gICAgcG9wdWxhdGVMaXN0KHVwZGF0ZWRDYW5kaWRhdGVzLCBwZW9wbGVMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVvcGxlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG4gIH1cbiAgaWYgKHN0cmluZ2VkRWwuaWQgPT0gJ3Rlcm1pbmF0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKCdpdCBpcyB0ZXJtaW5hdGlwbicpO1xuICAgIGxldCB1cGRhdGVkQ2FuZGlkYXRlcyA9IHBlb3BsZUNsb25lLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnVzZXJJRCA9PT0gZGF0YSkge1xuICAgICAgICBpdGVtLnN0YWdlID0gJ0F2c2x1dGFkJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuXG4gICAgcG9wdWxhdGVMaXN0KHVwZGF0ZWRDYW5kaWRhdGVzLCBwZW9wbGVMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVvcGxlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG4gIH1cbn1cblxuLy8gQmluZCBmbiB0byB0aGUgd2luZG93XG4vLyB3aW5kb3cuZm9vID0gZm9vO1xuXG53aW5kb3cuZHJhZ3N0YXJ0X2hhbmRsZXIgPSBkcmFnc3RhcnRfaGFuZGxlcjtcbndpbmRvdy5kcmFnb3Zlcl9oYW5kbGVyID0gZHJhZ292ZXJfaGFuZGxlcjtcbndpbmRvdy5kcm9wX2hhbmRsZXIgPSBkcm9wX2hhbmRsZXI7XG4iLCJjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3gnKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xuY29uc3QgcGVvcGxlQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZW9wbGUnKSkgfHwgW107XG5jb25zdCBzdWdnZXN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWdnZXN0aW9ucycpO1xuXG5jb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICBjb25zdCBvZmZDbGljayA9IGV2dCA9PiB7XG4gICAgaWYgKGUgIT09IGV2dCkge1xuICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QudG9nZ2xlKCdzZWFyY2gtYm94X19vcGVuJyk7XG4gICAgICBzdWdnZXN0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdzdWdnZXN0aW9uc19vbicpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvZmZDbGljayk7XG4gICAgfVxuICB9O1xuICBpZiAoIWlucHV0RmllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtYm94X19vcGVuJykpIHtcbiAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ3NlYXJjaC1ib3hfX29wZW4nKTtcbiAgICBzdWdnZXN0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdzdWdnZXN0aW9uc19vbicpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb2ZmQ2xpY2spO1xuICB9XG59O1xuXG5mdW5jdGlvbiBzZWFyY2hDYW5kaWRhdGVzKGlucHV0VmFsdWUsIHBlb3BsZUFycmF5KSB7XG4gIHJldHVybiBwZW9wbGVBcnJheS5maWx0ZXIocGVyc29uID0+IHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoaW5wdXRWYWx1ZSwgJ2dpJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgcGVyc29uLm5hbWUubWF0Y2gocmVnZXgpIHx8XG4gICAgICBwZXJzb24uYWRkcmVzcy5tYXRjaChyZWdleCkgfHxcbiAgICAgIHBlcnNvbi5zdGFnZS5tYXRjaChyZWdleCkgfHxcbiAgICAgIHBlcnNvbi5hZ2UubWF0Y2gocmVnZXgpXG4gICAgKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlucHV0VmFsdWUoKSB7XG4gIGNvbnN0IG1hdGNoZWRBcnJheSA9IHNlYXJjaENhbmRpZGF0ZXModGhpcy52YWx1ZSwgcGVvcGxlQXJyYXkpO1xuXG4gIGNvbnN0IGh0bWwgPSBtYXRjaGVkQXJyYXlcbiAgICAubWFwKG1hdGNoZXMgPT4ge1xuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHRoaXMudmFsdWUsICdnaScpO1xuICAgICAgY29uc3QgcGVyc29uTmFtZSA9IG1hdGNoZXMubmFtZS5yZXBsYWNlKFxuICAgICAgICByZWdleCxcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwiaGxcIj4ke3RoaXMudmFsdWV9PC9zcGFuPmBcbiAgICAgICk7XG4gICAgICBjb25zdCBhZGRyZXNzTmFtZSA9IG1hdGNoZXMuYWRkcmVzcy5yZXBsYWNlKFxuICAgICAgICByZWdleCxcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwiaGxcIj4ke3RoaXMudmFsdWV9PC9zcGFuPmBcbiAgICAgICk7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8bGk+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPlxuICAgICAgICAke3BlcnNvbk5hbWV9ICR7YWRkcmVzc05hbWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1bGF0aW9uXCI+XG4gICAgICAgICR7bWF0Y2hlcy5lbWFpbH08L3NwYW4+XG4gICAgICAgIDwvbGk+YDtcbiAgICB9KVxuICAgIC5qb2luKCcnKTtcblxuICBzdWdnZXN0aW9ucy5pbm5lckhUTUwgPSBodG1sO1xufVxuXG5pbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaW5wdXRWYWx1ZSk7XG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGlucHV0VmFsdWUpO1xuIiwiaW1wb3J0IHsgcG9wdWxhdGVMaXN0IH0gZnJvbSAnLi9hZGRDYW5kaWRhdGUnO1xuXG4vLyBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWNhbnZhcycpO1xuLy8gY29uc3QgYnV0dG9ucyA9IGNvbHVtbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJyk7XG4vLyBjb25zdCBidXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKGJ1dHRvbnMpO1xuLy8gY29uc29sZS5sb2coYnV0dG9uc0FycmF5KTtcbi8vIGJ1dHRvbnNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT5cbi8vICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUNhbmRpZGF0ZSlcbi8vICk7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhbmRpZGF0ZShlKSB7XG4gIGNvbnNvbGUubG9nKCd3YXMgY2xpY2tlZCB5bycpO1xuICBjb25zb2xlLmxvZyhlKTtcblxuICAvL2dldCB2YWx1ZXMgZnJvbSBlZGl0YWJsZSBIVE1MXG4gIGNvbnN0IHBlb3BsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVvcGxlJyk7XG4gIGNvbnN0IG5hbWUgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignW25hbWU9bmFtZV0nKS5pbm5lckhUTUw7XG4gIGNvbnN0IGFnZSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZ2VdJykuaW5uZXJIVE1MO1xuICBjb25zdCBlbWFpbCA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1lbWFpbF0nKS5pbm5lckhUTUw7XG4gIGNvbnN0IGFkZHJlc3MgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignW25hbWU9YWRkcmVzc10nKS5pbm5lckhUTUw7XG4gIGNvbnN0IGltYWdlID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWltYWdlXScpLmlubmVySFRNTDtcbiAgY29uc3Qgc3RhZ2UgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignW25hbWU9c3RhZ2VdJykudmFsdWU7XG4gIGNvbnN0IHVzZXJJRCA9IHRoaXMucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuICBjb25zdCBwZW9wbGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZW9wbGUnKSkgfHwgW107XG5cbiAgY29uc3QgcGVyc29uID0ge1xuICAgIG5hbWUsXG4gICAgYWdlLFxuICAgIGVtYWlsLFxuICAgIGFkZHJlc3MsXG4gICAgaW1hZ2UsXG4gICAgc3RhZ2UsXG4gICAgdXNlcklEXG4gIH07XG5cbiAgY29uc29sZS5sb2cocGVyc29uKTtcblxuICBsZXQgcGVvcGxlQ2xvbmUgPSBbLi4ucGVvcGxlXTtcblxuICAvL2ZpbmQgdGhlIHJpZ2h0IHBlcnNvbiBhbmQgdXBkYXRlIHdoYXRzIG5ld1xuXG4gIGxldCB1cGRhdGVkQ2FuZGlkYXRlcyA9IHBlb3BsZUNsb25lLmZpbHRlcihpdGVtID0+IHtcbiAgICBpZiAoaXRlbS51c2VySUQgPT09IHBlcnNvbi51c2VySUQpIHtcbiAgICAgIGl0ZW0ubmFtZSA9IHBlcnNvbi5uYW1lO1xuICAgICAgaXRlbS5hZ2UgPSBwZXJzb24uYWdlO1xuICAgICAgaXRlbS5lbWFpbCA9IHBlcnNvbi5lbWFpbDtcbiAgICAgIGl0ZW0uYWRkcmVzcyA9IHBlcnNvbi5hZGRyZXNzO1xuICAgICAgaXRlbS5pbWFnZSA9IHBlcnNvbi5pbWFnZTtcbiAgICAgIGl0ZW0uc3RhZ2UgPSBwZXJzb24uc3RhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pO1xuICBjb25zb2xlLmxvZyh1cGRhdGVkQ2FuZGlkYXRlcyk7XG5cbiAgcG9wdWxhdGVMaXN0KHVwZGF0ZWRDYW5kaWRhdGVzLCBwZW9wbGVMaXN0KTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Blb3BsZScpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhbmRpZGF0ZXMpKTtcbn1cblxud2luZG93LnVwZGF0ZUNhbmRpZGF0ZSA9IHVwZGF0ZUNhbmRpZGF0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=