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
};

function addCandidate(e) {
  e.preventDefault();
  var people = JSON.parse(localStorage.getItem('people')) || [];
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
        return "\n      <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n          <span>Namn: </span><p contenteditable=\"true\" name=\"name\">").concat(person.name, "</p>\n        <span>\xC5lder: </span><p contenteditable=\"true\" name=\"age\">").concat(person.age, "</p>\n        <span>Email: </span><p contenteditable=\"true\" name=\"email\">").concat(person.email, "</p>\n        <span>Adress: </span><p contenteditable=\"true\" name=\"address\">").concat(person.address, "</p>\n        <span>Bild: </span><p contenteditable=\"true\" name=\"image\">").concat(person.image, "</p>\n       \n        <select class=\"stage-select\" name=\"stage\">\n              <option value=\"\">-Rekryteringssteg-</option>\n              <option value=\"Kontakt\" selected>Kontakt</option>\n              <option value=\"Dialog\">Dialog</option>\n              <option value=\"Intervju\">Intervju</option>\n              <option value=\"Erbjudande\">Erbjudande</option>\n              <option value=\"Avslutad\" >Avslutad</option>\n        </select>\n        <div class=\"button-container\">\n          <button class=\"change-button\">\xC4ndra</button>\n          <button class=\"delete-button\">Ta bort</button>\n        </div>\n        \n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Dialog') {
      dialogueList.innerHTML = people.filter(function (person) {
        return person.stage === 'Dialog';
      }).map(function (person, i) {
        return "\n          <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n          <span>Namn: </span><p contenteditable=\"true\" name=\"name\">").concat(person.name, "</p>\n        <span>\xC5lder: </span><p contenteditable=\"true\" name=\"age\">").concat(person.age, "</p>\n        <span>Email: </span><p contenteditable=\"true\" name=\"email\">").concat(person.email, "</p>\n        <span>Adress: </span><p contenteditable=\"true\" name=\"address\">").concat(person.address, "</p>\n        <span>Bild: </span><p contenteditable=\"true\" name=\"image\">").concat(person.image, "</p>\n       \n        <select class=\"stage-select\" name=\"stage\">\n              <option value=\"\">-Rekryteringssteg-</option>\n              <option value=\"Kontakt\" >Kontakt</option>\n              <option value=\"Dialog\" selected>Dialog</option>\n              <option value=\"Intervju\">Intervju</option>\n              <option value=\"Erbjudande\">Erbjudande</option>\n              <option value=\"Avslutad\" >Avslutad</option>\n        </select>\n        <div class=\"button-container\">\n          <button class=\"change-button\">\xC4ndra</button>\n          <button class=\"delete-button\">Ta bort</button>\n        </div>\n        \n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Intervju') {
      interviewList.innerHTML = people.filter(function (person) {
        return person.stage === 'Intervju';
      }).map(function (person, i) {
        return "\n          <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n          <span>Namn: </span><p contenteditable=\"true\" name=\"name\">").concat(person.name, "</p>\n        <span>\xC5lder: </span><p contenteditable=\"true\" name=\"age\">").concat(person.age, "</p>\n        <span>Email: </span><p contenteditable=\"true\" name=\"email\">").concat(person.email, "</p>\n        <span>Adress: </span><p contenteditable=\"true\" name=\"address\">").concat(person.address, "</p>\n        <span>Bild: </span><p contenteditable=\"true\" name=\"image\">").concat(person.image, "</p>\n       \n        <select class=\"stage-select\" name=\"stage\">\n              <option value=\"\">-Rekryteringssteg-</option>\n              <option value=\"Kontakt\" >Kontakt</option>\n              <option value=\"Dialog\">Dialog</option>\n              <option value=\"Intervju\" selected>Intervju</option>\n              <option value=\"Erbjudande\">Erbjudande</option>\n              <option value=\"Avslutad\" >Avslutad</option>\n        </select>\n        <div class=\"button-container\">\n          <button class=\"change-button\">\xC4ndra</button>\n          <button class=\"delete-button\">Ta bort</button>\n        </div>\n        \n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Erbjudande') {
      offerList.innerHTML = people.filter(function (person) {
        return person.stage === 'Erbjudande';
      }).map(function (person, i) {
        return "\n          <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n          <span>Namn: </span><p contenteditable=\"true\" name=\"name\">").concat(person.name, "</p>\n        <span>\xC5lder: </span><p contenteditable=\"true\" name=\"age\">").concat(person.age, "</p>\n        <span>Email: </span><p contenteditable=\"true\" name=\"email\">").concat(person.email, "</p>\n        <span>Adress: </span><p contenteditable=\"true\" name=\"address\">").concat(person.address, "</p>\n        <span>Bild: </span><p contenteditable=\"true\" name=\"image\">").concat(person.image, "</p>\n       \n        <select class=\"stage-select\" name=\"stage\">\n              <option value=\"\">-Rekryteringssteg-</option>\n              <option value=\"Kontakt\" >Kontakt</option>\n              <option value=\"Dialog\">Dialog</option>\n              <option value=\"Intervju\">Intervju</option>\n              <option value=\"Erbjudande\" selected>Erbjudande</option>\n              <option value=\"Avslutad\">Avslutad</option>\n        </select>\n        <div class=\"button-container\">\n          <button class=\"change-button\">\xC4ndra</button>\n          <button class=\"delete-button\">Ta bort</button>\n        </div>\n        \n      </div>\n    ");
      }).join('');
    }

    if (p.stage === 'Avslutad') {
      terminationList.innerHTML = people.filter(function (person) {
        return person.stage === 'Avslutad';
      }).map(function (person, i) {
        return "\n          <div id=\"".concat(person.userID, "\" data-id=\"").concat(person.userID, "\" name=\"person").concat(i, "\" class=\"people-list\" draggable=\"true\" ondragstart=\"dragstart_handler(event);\">\n          <span>Namn: </span><p contenteditable=\"true\" name=\"name\">").concat(person.name, "</p>\n        <span>\xC5lder: </span><p contenteditable=\"true\" name=\"age\">").concat(person.age, "</p>\n        <span>Email: </span><p contenteditable=\"true\" name=\"email\">").concat(person.email, "</p>\n        <span>Adress: </span><p contenteditable=\"true\" name=\"address\">").concat(person.address, "</p>\n        <span>Bild: </span><p contenteditable=\"true\" name=\"image\">").concat(person.image, "</p>\n       \n        <select class=\"stage-select\" name=\"stage\">\n              <option value=\"\">-Rekryteringssteg-</option>\n              <option value=\"Kontakt\" >Kontakt</option>\n              <option value=\"Dialog\">Dialog</option>\n              <option value=\"Intervju\">Intervju</option>\n              <option value=\"Erbjudande\">Erbjudande</option>\n              <option value=\"Avslutad\" selected>Avslutad</option>\n        </select>\n        <div class=\"button-container\">\n          <button class=\"change-button\">\xC4ndra</button>\n          <button class=\"delete-button\">Ta bort</button>\n        </div>\n        \n      </div>\n    ");
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
  var name = this.parentNode.parentNode.querySelector('[name=name]').innerHTML;
  var age = this.parentNode.parentNode.querySelector('[name=age]').innerHTML;
  var email = this.parentNode.parentNode.querySelector('[name=email]').innerHTML;
  var address = this.parentNode.parentNode.querySelector('[name=address]').innerHTML;
  var image = this.parentNode.parentNode.querySelector('[name=image]').innerHTML;
  var stage = this.parentNode.parentNode.querySelector('[name=stage]').value;
  var userID = this.parentNode.parentNode.dataset.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hZGRDYW5kaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGVsZXRlQ2FuZGlkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RyYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3VwZGF0ZUNhbmRpZGF0ZS5qcyJdLCJuYW1lcyI6WyJhZGRQZXJzb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwZW9wbGVMaXN0IiwicXVlcnlTZWxlY3RvciIsInBlb3BsZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb250YWN0TGlzdCIsImRpYWxvZ3VlTGlzdCIsImludGVydmlld0xpc3QiLCJvZmZlckxpc3QiLCJ0ZXJtaW5hdGlvbkxpc3QiLCJJRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImFkZENhbmRpZGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ2YWx1ZSIsImFnZSIsImVtYWlsIiwiYWRkcmVzcyIsImltYWdlIiwic3RhZ2UiLCJ1c2VySUQiLCJwZXJzb24iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBvcHVsYXRlTGlzdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZXNldCIsImlubmVySFRNTCIsIm1hcCIsInAiLCJmaWx0ZXIiLCJpIiwiam9pbiIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZGVsZXRlQ2FuZGlkYXRlIiwicGFyZW50Tm9kZSIsImRhdGFzZXQiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsImRyYWdzdGFydF9oYW5kbGVyIiwiZXYiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwidGFyZ2V0IiwiZHJvcEVmZmVjdCIsImRyYWdvdmVyX2hhbmRsZXIiLCJkcm9wX2hhbmRsZXIiLCJlbCIsImRhdGEiLCJnZXREYXRhIiwiYXBwZW5kQ2hpbGQiLCJnZXRFbGVtZW50QnlJZCIsInBlb3BsZUNsb25lIiwic3RyaW5nZWRFbCIsInN0cmluZyIsInVwZGF0ZWRDYW5kaWRhdGVzIiwicmVtb3ZlSXRlbSIsImlucHV0RmllbGQiLCJpbnB1dCIsInBlb3BsZUFycmF5Iiwic3VnZ2VzdGlvbnMiLCJoYW5kbGVDbGljayIsIm9mZkNsaWNrIiwiZXZ0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5zIiwic2VhcmNoQ2FuZGlkYXRlcyIsImlucHV0VmFsdWUiLCJyZWdleCIsIlJlZ0V4cCIsIm1hdGNoIiwibWF0Y2hlZEFycmF5IiwiaHRtbCIsIm1hdGNoZXMiLCJwZXJzb25OYW1lIiwicmVwbGFjZSIsImFkZHJlc3NOYW1lIiwidXBkYXRlQ2FuZGlkYXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QWFLLE1BQU0sQ0FBQ0wsS0FBcEI7QUFDQTRCLFVBQUksQ0FBQzNCLE9BQUwsR0FBZUksTUFBTSxDQUFDSixPQUF0QjtBQUNBMkIsVUFBSSxDQUFDMUIsS0FBTCxHQUFhRyxNQUFNLENBQUNILEtBQXBCO0FBQ0EwQixVQUFJLENBQUN6QixLQUFMLEdBQWFFLE1BQU0sQ0FBQ0YsS0FBcEI7QUFDRDs7QUFFRCxXQUFPeUIsSUFBUDtBQUNELEdBWHVCLENBQXhCO0FBWUF0QixTQUFPLENBQUNDLEdBQVIsQ0FBWXVDLGlCQUFaO0FBRUFyQyxvRUFBWSxDQUFDcUMsaUJBQUQsRUFBb0JyRSxVQUFwQixDQUFaO0FBQ0FLLGNBQVksQ0FBQ2lFLFVBQWIsQ0FBd0IsUUFBeEI7QUFDQWpFLGNBQVksQ0FBQzRCLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0I5QixJQUFJLENBQUMrQixTQUFMLENBQWVtQyxpQkFBZixDQUEvQjtBQUNEOztBQUVEekIsTUFBTSxDQUFDaUQsZUFBUCxHQUF5QkEsZUFBekIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9kcmFnJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZENhbmRpZGF0ZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy91cGRhdGVDYW5kaWRhdGUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVsZXRlQ2FuZGlkYXRlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlYXJjaCc7XG4iLCJjb25zdCBhZGRQZXJzb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkLXBlcnNvbicpO1xuY29uc3QgcGVvcGxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGUnKTtcbmNvbnN0IHBlb3BsZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZScpKSB8fCBbXTtcbmNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcbmNvbnN0IGRpYWxvZ3VlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2d1ZScpO1xuY29uc3QgaW50ZXJ2aWV3TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnRlcnZpZXcnKTtcbmNvbnN0IG9mZmVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvZmZlcicpO1xuY29uc3QgdGVybWluYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlcm1pbmF0aW9uJyk7XG5cbmNvbnN0IElEID0gZnVuY3Rpb24oKSB7XG4gIC8vIENyZWF0ZSBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBwZXJzb24gYXBwZW5kZWQgdG8gdGhlIERPTVxuICAvLyBNYXRoLnJhbmRvbSBzaG91bGQgYmUgdW5pcXVlIGJlY2F1c2Ugb2YgaXRzIHNlZWRpbmcgYWxnb3JpdGhtLlxuICAvLyBDb252ZXJ0IGl0IHRvIGJhc2UgMzYgKG51bWJlcnMgKyBsZXR0ZXJzKSwgYW5kIGdyYWIgdGhlIGZpcnN0IDkgY2hhcmFjdGVyc1xuICAvLyBhZnRlciB0aGUgZGVjaW1hbC5cbiAgcmV0dXJuIChcbiAgICAnXycgK1xuICAgIE1hdGgucmFuZG9tKClcbiAgICAgIC50b1N0cmluZygzNilcbiAgICAgIC5zdWJzdHIoMiwgOSlcbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGFkZENhbmRpZGF0ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcGVvcGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlJykpIHx8IFtdO1xuICBjb25zdCBuYW1lID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1uYW1lXScpLnZhbHVlO1xuICBjb25zdCBhZ2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWFnZV0nKS52YWx1ZTtcbiAgY29uc3QgZW1haWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWVtYWlsXScpLnZhbHVlO1xuICBjb25zdCBhZGRyZXNzID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZGRyZXNzXScpLnZhbHVlO1xuICBjb25zdCBpbWFnZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9aW1hZ2VdJykudmFsdWU7XG4gIGNvbnN0IHN0YWdlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1zdGFnZV0nKS52YWx1ZTtcbiAgY29uc3QgdXNlcklEID0gSUQoKTtcblxuICBjb25zdCBwZXJzb24gPSB7XG4gICAgbmFtZSxcbiAgICBhZ2UsXG4gICAgZW1haWwsXG4gICAgYWRkcmVzcyxcbiAgICBpbWFnZSxcbiAgICBzdGFnZSxcbiAgICB1c2VySURcbiAgfTtcblxuICBjb25zb2xlLmxvZyhwZXJzb24pO1xuXG4gIHBlb3BsZS5wdXNoKHBlcnNvbik7XG4gIHBvcHVsYXRlTGlzdChwZW9wbGUsIHBlb3BsZUxpc3QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkocGVvcGxlKSk7XG4gIHRoaXMucmVzZXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTGlzdChwZW9wbGUgPSBbXSwgcGVvcGxlTGlzdCkge1xuICBjb250YWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgZGlhbG9ndWVMaXN0LmlubmVySFRNTCA9ICcnO1xuICBpbnRlcnZpZXdMaXN0LmlubmVySFRNTCA9ICcnO1xuICBvZmZlckxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIHRlcm1pbmF0aW9uTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgcGVvcGxlLm1hcChwID0+IHtcbiAgICBpZiAocC5zdGFnZSA9PT0gJ0tvbnRha3QnKSB7XG4gICAgICBjb250YWN0TGlzdC5pbm5lckhUTUwgPSBwZW9wbGVcbiAgICAgICAgLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnN0YWdlID09PSAnS29udGFrdCcpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgICAgPHNwYW4+TmFtbjogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwibmFtZVwiPiR7XG4gICAgICAgICAgICBwZXJzb24ubmFtZVxuICAgICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPsOFbGRlcjogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiYWdlXCI+JHtcbiAgICAgICAgICBwZXJzb24uYWdlXG4gICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPkVtYWlsOiA8L3NwYW4+PHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJlbWFpbFwiPiR7XG4gICAgICAgICAgcGVyc29uLmVtYWlsXG4gICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPkFkcmVzczogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiYWRkcmVzc1wiPiR7XG4gICAgICAgICAgcGVyc29uLmFkZHJlc3NcbiAgICAgICAgfTwvcD5cbiAgICAgICAgPHNwYW4+QmlsZDogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiaW1hZ2VcIj4ke1xuICAgICAgICAgIHBlcnNvbi5pbWFnZVxuICAgICAgICB9PC9wPlxuICAgICAgIFxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3RhZ2Utc2VsZWN0XCIgbmFtZT1cInN0YWdlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tUmVrcnl0ZXJpbmdzc3RlZy08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktvbnRha3RcIiBzZWxlY3RlZD5Lb250YWt0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEaWFsb2dcIj5EaWFsb2c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkludGVydmp1XCI+SW50ZXJ2anU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVyYmp1ZGFuZGVcIj5FcmJqdWRhbmRlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBdnNsdXRhZFwiID5BdnNsdXRhZDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLWJ1dHRvblwiPsOEbmRyYTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+VGEgYm9ydDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICAgIGlmIChwLnN0YWdlID09PSAnRGlhbG9nJykge1xuICAgICAgZGlhbG9ndWVMaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdEaWFsb2cnKVxuICAgICAgICAubWFwKChwZXJzb24sIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIDxkaXYgaWQ9XCIke3BlcnNvbi51c2VySUR9XCIgZGF0YS1pZD1cIiR7XG4gICAgICAgICAgICBwZXJzb24udXNlcklEXG4gICAgICAgICAgfVwiIG5hbWU9XCJwZXJzb24ke2l9XCIgY2xhc3M9XCJwZW9wbGUtbGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBvbmRyYWdzdGFydD1cImRyYWdzdGFydF9oYW5kbGVyKGV2ZW50KTtcIj5cbiAgICAgICAgICA8c3Bhbj5OYW1uOiA8L3NwYW4+PHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJuYW1lXCI+JHtcbiAgICAgICAgICAgIHBlcnNvbi5uYW1lXG4gICAgICAgICAgfTwvcD5cbiAgICAgICAgPHNwYW4+w4VsZGVyOiA8L3NwYW4+PHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJhZ2VcIj4ke1xuICAgICAgICAgIHBlcnNvbi5hZ2VcbiAgICAgICAgfTwvcD5cbiAgICAgICAgPHNwYW4+RW1haWw6IDwvc3Bhbj48cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImVtYWlsXCI+JHtcbiAgICAgICAgICBwZXJzb24uZW1haWxcbiAgICAgICAgfTwvcD5cbiAgICAgICAgPHNwYW4+QWRyZXNzOiA8L3NwYW4+PHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJhZGRyZXNzXCI+JHtcbiAgICAgICAgICBwZXJzb24uYWRkcmVzc1xuICAgICAgICB9PC9wPlxuICAgICAgICA8c3Bhbj5CaWxkOiA8L3NwYW4+PHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJpbWFnZVwiPiR7XG4gICAgICAgICAgcGVyc29uLmltYWdlXG4gICAgICAgIH08L3A+XG4gICAgICAgXG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJzdGFnZS1zZWxlY3RcIiBuYW1lPVwic3RhZ2VcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi1SZWtyeXRlcmluZ3NzdGVnLTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS29udGFrdFwiID5Lb250YWt0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEaWFsb2dcIiBzZWxlY3RlZD5EaWFsb2c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkludGVydmp1XCI+SW50ZXJ2anU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVyYmp1ZGFuZGVcIj5FcmJqdWRhbmRlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBdnNsdXRhZFwiID5BdnNsdXRhZDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLWJ1dHRvblwiPsOEbmRyYTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+VGEgYm9ydDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICAgIGlmIChwLnN0YWdlID09PSAnSW50ZXJ2anUnKSB7XG4gICAgICBpbnRlcnZpZXdMaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdJbnRlcnZqdScpXG4gICAgICAgIC5tYXAoKHBlcnNvbiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgPGRpdiBpZD1cIiR7cGVyc29uLnVzZXJJRH1cIiBkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgIHBlcnNvbi51c2VySURcbiAgICAgICAgICB9XCIgbmFtZT1cInBlcnNvbiR7aX1cIiBjbGFzcz1cInBlb3BsZS1saXN0XCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG9uZHJhZ3N0YXJ0PVwiZHJhZ3N0YXJ0X2hhbmRsZXIoZXZlbnQpO1wiPlxuICAgICAgICAgIDxzcGFuPk5hbW46IDwvc3Bhbj48cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cIm5hbWVcIj4ke1xuICAgICAgICAgICAgcGVyc29uLm5hbWVcbiAgICAgICAgICB9PC9wPlxuICAgICAgICA8c3Bhbj7DhWxkZXI6IDwvc3Bhbj48cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImFnZVwiPiR7XG4gICAgICAgICAgcGVyc29uLmFnZVxuICAgICAgICB9PC9wPlxuICAgICAgICA8c3Bhbj5FbWFpbDogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiZW1haWxcIj4ke1xuICAgICAgICAgIHBlcnNvbi5lbWFpbFxuICAgICAgICB9PC9wPlxuICAgICAgICA8c3Bhbj5BZHJlc3M6IDwvc3Bhbj48cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImFkZHJlc3NcIj4ke1xuICAgICAgICAgIHBlcnNvbi5hZGRyZXNzXG4gICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPkJpbGQ6IDwvc3Bhbj48cCBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgbmFtZT1cImltYWdlXCI+JHtcbiAgICAgICAgICBwZXJzb24uaW1hZ2VcbiAgICAgICAgfTwvcD5cbiAgICAgICBcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cInN0YWdlLXNlbGVjdFwiIG5hbWU9XCJzdGFnZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LVJla3J5dGVyaW5nc3N0ZWctPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLb250YWt0XCIgPktvbnRha3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRpYWxvZ1wiPkRpYWxvZzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW50ZXJ2anVcIiBzZWxlY3RlZD5JbnRlcnZqdTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRXJianVkYW5kZVwiPkVyYmp1ZGFuZGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkF2c2x1dGFkXCIgPkF2c2x1dGFkPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2UtYnV0dG9uXCI+w4RuZHJhPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1idXR0b25cIj5UYSBib3J0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgaWYgKHAuc3RhZ2UgPT09ICdFcmJqdWRhbmRlJykge1xuICAgICAgb2ZmZXJMaXN0LmlubmVySFRNTCA9IHBlb3BsZVxuICAgICAgICAuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24uc3RhZ2UgPT09ICdFcmJqdWRhbmRlJylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgICAgPHNwYW4+TmFtbjogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwibmFtZVwiPiR7XG4gICAgICAgICAgICBwZXJzb24ubmFtZVxuICAgICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPsOFbGRlcjogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiYWdlXCI+JHtcbiAgICAgICAgICBwZXJzb24uYWdlXG4gICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPkVtYWlsOiA8L3NwYW4+PHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJlbWFpbFwiPiR7XG4gICAgICAgICAgcGVyc29uLmVtYWlsXG4gICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPkFkcmVzczogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiYWRkcmVzc1wiPiR7XG4gICAgICAgICAgcGVyc29uLmFkZHJlc3NcbiAgICAgICAgfTwvcD5cbiAgICAgICAgPHNwYW4+QmlsZDogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiaW1hZ2VcIj4ke1xuICAgICAgICAgIHBlcnNvbi5pbWFnZVxuICAgICAgICB9PC9wPlxuICAgICAgIFxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3RhZ2Utc2VsZWN0XCIgbmFtZT1cInN0YWdlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tUmVrcnl0ZXJpbmdzc3RlZy08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktvbnRha3RcIiA+S29udGFrdDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGlhbG9nXCI+RGlhbG9nPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbnRlcnZqdVwiPkludGVydmp1PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFcmJqdWRhbmRlXCIgc2VsZWN0ZWQ+RXJianVkYW5kZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZzbHV0YWRcIj5BdnNsdXRhZDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLWJ1dHRvblwiPsOEbmRyYTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+VGEgYm9ydDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICAgIGlmIChwLnN0YWdlID09PSAnQXZzbHV0YWQnKSB7XG4gICAgICB0ZXJtaW5hdGlvbkxpc3QuaW5uZXJIVE1MID0gcGVvcGxlXG4gICAgICAgIC5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5zdGFnZSA9PT0gJ0F2c2x1dGFkJylcbiAgICAgICAgLm1hcCgocGVyc29uLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICA8ZGl2IGlkPVwiJHtwZXJzb24udXNlcklEfVwiIGRhdGEtaWQ9XCIke1xuICAgICAgICAgICAgcGVyc29uLnVzZXJJRFxuICAgICAgICAgIH1cIiBuYW1lPVwicGVyc29uJHtpfVwiIGNsYXNzPVwicGVvcGxlLWxpc3RcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgb25kcmFnc3RhcnQ9XCJkcmFnc3RhcnRfaGFuZGxlcihldmVudCk7XCI+XG4gICAgICAgICAgPHNwYW4+TmFtbjogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwibmFtZVwiPiR7XG4gICAgICAgICAgICBwZXJzb24ubmFtZVxuICAgICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPsOFbGRlcjogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiYWdlXCI+JHtcbiAgICAgICAgICBwZXJzb24uYWdlXG4gICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPkVtYWlsOiA8L3NwYW4+PHAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIG5hbWU9XCJlbWFpbFwiPiR7XG4gICAgICAgICAgcGVyc29uLmVtYWlsXG4gICAgICAgIH08L3A+XG4gICAgICAgIDxzcGFuPkFkcmVzczogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiYWRkcmVzc1wiPiR7XG4gICAgICAgICAgcGVyc29uLmFkZHJlc3NcbiAgICAgICAgfTwvcD5cbiAgICAgICAgPHNwYW4+QmlsZDogPC9zcGFuPjxwIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBuYW1lPVwiaW1hZ2VcIj4ke1xuICAgICAgICAgIHBlcnNvbi5pbWFnZVxuICAgICAgICB9PC9wPlxuICAgICAgIFxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3RhZ2Utc2VsZWN0XCIgbmFtZT1cInN0YWdlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tUmVrcnl0ZXJpbmdzc3RlZy08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktvbnRha3RcIiA+S29udGFrdDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGlhbG9nXCI+RGlhbG9nPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbnRlcnZqdVwiPkludGVydmp1PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFcmJqdWRhbmRlXCI+RXJianVkYW5kZTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZzbHV0YWRcIiBzZWxlY3RlZD5BdnNsdXRhZDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLWJ1dHRvblwiPsOEbmRyYTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+VGEgYm9ydDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfVxuICB9KTtcbn1cblxuYWRkUGVyc29uLmZvckVhY2gocGVyc29uID0+IHBlcnNvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRDYW5kaWRhdGUpKTtcblxucG9wdWxhdGVMaXN0KHBlb3BsZSwgcGVvcGxlTGlzdCk7XG53aW5kb3cucG9wdWxhdGVMaXN0ID0gcG9wdWxhdGVMaXN0O1xuIiwiaW1wb3J0IHsgcG9wdWxhdGVMaXN0IH0gZnJvbSAnLi9hZGRDYW5kaWRhdGUnO1xuXG5mdW5jdGlvbiBkZWxldGVDYW5kaWRhdGUoZSkge1xuICBjb25zb2xlLmxvZygnZGVsZXRlY2FuZGlkYXRlIHdhcyBjbGlja2VkJywgZSk7XG4gIGNvbnN0IHBlb3BsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVvcGxlJyk7XG4gIC8vZ2V0IHRoZSB1c2VySURcbiAgY29uc3QgdXNlcklEID0gdGhpcy5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cbiAgY29uc3QgcGVvcGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlJykpIHx8IFtdO1xuXG4gIHZhciBpbmRleCA9IHBlb3BsZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnVzZXJJRCA9PT0gdXNlcklEKTtcblxuICAvLyBEZWxldGUgIHRoZSBpdGVtIGJ5IGluZGV4LlxuICBwZW9wbGUuc3BsaWNlKGluZGV4LCAxKTtcblxuICAvLyBUbyBjaGVjay5cbiAgY29uc29sZS5sb2cocGVvcGxlKTtcblxuICBwb3B1bGF0ZUxpc3QocGVvcGxlLCBwZW9wbGVMaXN0KTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkocGVvcGxlKSk7XG59XG5cbndpbmRvdy5kZWxldGVDYW5kaWRhdGUgPSBkZWxldGVDYW5kaWRhdGU7XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZUxpc3QgfSBmcm9tICcuL2FkZENhbmRpZGF0ZSc7XG5cbmZ1bmN0aW9uIGRyYWdzdGFydF9oYW5kbGVyKGV2KSB7XG4gIGNvbnNvbGUubG9nKCdkcmFnU3RhcnQnKTtcbiAgLy8gQWRkIHRoZSB0YXJnZXQgZWxlbWVudCdzIGlkIHRvIHRoZSBkYXRhIHRyYW5zZmVyIG9iamVjdFxuICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2LnRhcmdldC5pZCk7XG4gIGV2LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xufVxuXG5mdW5jdGlvbiBkcmFnb3Zlcl9oYW5kbGVyKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIFNldCB0aGUgZHJvcEVmZmVjdCB0byBtb3ZlXG4gIGV2LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xufVxuXG5mdW5jdGlvbiBkcm9wX2hhbmRsZXIoZXYsIGVsKSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIEdldCB0aGUgaWQgb2YgdGhlIHRhcmdldCBhbmQgYWRkIHRoZSBtb3ZlZCBlbGVtZW50IHRvIHRoZSB0YXJnZXQncyBET01cbiAgdmFyIGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICBjb25zb2xlLmxvZyh7IGRhdGEsIGVsIH0pO1xuICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKSk7XG5cbiAgY29uc3QgcGVvcGxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGUnKTtcbiAgY29uc3QgcGVvcGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlJykpIHx8IFtdO1xuICBsZXQgcGVvcGxlQ2xvbmUgPSBbLi4ucGVvcGxlXTtcblxuICBsZXQgc3RyaW5nZWRFbCA9IGVsO1xuICBjb25zb2xlLmxvZyhzdHJpbmdlZEVsKTtcbiAgbGV0IHN0cmluZyA9ICcnICsgZWw7XG4gIGNvbnNvbGUubG9nKHN0cmluZ2VkRWwuaWQpO1xuXG4gIC8vZmluZCB0aGUgcmlnaHQgcGVyc29uIGFuZCB1cGRhdGUgdGhlIHN0YWdlIGF0dHIgb24gZHJvcFxuXG4gIGlmIChzdHJpbmdlZEVsLmlkID09ICdjb250YWN0Jykge1xuICAgIGxldCB1cGRhdGVkQ2FuZGlkYXRlcyA9IHBlb3BsZUNsb25lLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnVzZXJJRCA9PT0gZGF0YSkge1xuICAgICAgICBpdGVtLnN0YWdlID0gJ0tvbnRha3QnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICBwb3B1bGF0ZUxpc3QodXBkYXRlZENhbmRpZGF0ZXMsIHBlb3BsZUxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZW9wbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhbmRpZGF0ZXMpKTtcbiAgfVxuICBpZiAoc3RyaW5nZWRFbC5pZCA9PSAnZGlhbG9ndWUnKSB7XG4gICAgbGV0IHVwZGF0ZWRDYW5kaWRhdGVzID0gcGVvcGxlQ2xvbmUuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udXNlcklEID09PSBkYXRhKSB7XG4gICAgICAgIGl0ZW0uc3RhZ2UgPSAnRGlhbG9nJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuXG4gICAgcG9wdWxhdGVMaXN0KHVwZGF0ZWRDYW5kaWRhdGVzLCBwZW9wbGVMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVvcGxlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG4gIH1cbiAgaWYgKHN0cmluZ2VkRWwuaWQgPT0gJ2ludGVydmlldycpIHtcbiAgICBsZXQgdXBkYXRlZENhbmRpZGF0ZXMgPSBwZW9wbGVDbG9uZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS51c2VySUQgPT09IGRhdGEpIHtcbiAgICAgICAgaXRlbS5zdGFnZSA9ICdJbnRlcnZqdSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcblxuICAgIHBvcHVsYXRlTGlzdCh1cGRhdGVkQ2FuZGlkYXRlcywgcGVvcGxlTGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG4gIH1cbiAgaWYgKHN0cmluZ2VkRWwuaWQgPT0gJ29mZmVyJykge1xuICAgIGxldCB1cGRhdGVkQ2FuZGlkYXRlcyA9IHBlb3BsZUNsb25lLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnVzZXJJRCA9PT0gZGF0YSkge1xuICAgICAgICBpdGVtLnN0YWdlID0gJ0VyYmp1ZGFuZGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICBwb3B1bGF0ZUxpc3QodXBkYXRlZENhbmRpZGF0ZXMsIHBlb3BsZUxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZW9wbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhbmRpZGF0ZXMpKTtcbiAgfVxuICBpZiAoc3RyaW5nZWRFbC5pZCA9PSAndGVybWluYXRpb24nKSB7XG4gICAgY29uc29sZS5sb2coJ2l0IGlzIHRlcm1pbmF0aXBuJyk7XG4gICAgbGV0IHVwZGF0ZWRDYW5kaWRhdGVzID0gcGVvcGxlQ2xvbmUuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udXNlcklEID09PSBkYXRhKSB7XG4gICAgICAgIGl0ZW0uc3RhZ2UgPSAnQXZzbHV0YWQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgICBwb3B1bGF0ZUxpc3QodXBkYXRlZENhbmRpZGF0ZXMsIHBlb3BsZUxpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZW9wbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVvcGxlJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZENhbmRpZGF0ZXMpKTtcbiAgfVxufVxuXG4vLyBCaW5kIGZuIHRvIHRoZSB3aW5kb3dcbi8vIHdpbmRvdy5mb28gPSBmb287XG5cbndpbmRvdy5kcmFnc3RhcnRfaGFuZGxlciA9IGRyYWdzdGFydF9oYW5kbGVyO1xud2luZG93LmRyYWdvdmVyX2hhbmRsZXIgPSBkcmFnb3Zlcl9oYW5kbGVyO1xud2luZG93LmRyb3BfaGFuZGxlciA9IGRyb3BfaGFuZGxlcjtcbiIsImNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCcpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XG5jb25zdCBwZW9wbGVBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Blb3BsZScpKSB8fCBbXTtcbmNvbnN0IHN1Z2dlc3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Z2dlc3Rpb25zJyk7XG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gIGNvbnN0IG9mZkNsaWNrID0gZXZ0ID0+IHtcbiAgICBpZiAoZSAhPT0gZXZ0KSB7XG4gICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ3NlYXJjaC1ib3hfX29wZW4nKTtcbiAgICAgIHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC50b2dnbGUoJ3N1Z2dlc3Rpb25zX29uJyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9mZkNsaWNrKTtcbiAgICB9XG4gIH07XG4gIGlmICghaW5wdXRGaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaC1ib3hfX29wZW4nKSkge1xuICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoLWJveF9fb3BlbicpO1xuICAgIHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC50b2dnbGUoJ3N1Z2dlc3Rpb25zX29uJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvZmZDbGljayk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHNlYXJjaENhbmRpZGF0ZXMoaW5wdXRWYWx1ZSwgcGVvcGxlQXJyYXkpIHtcbiAgcmV0dXJuIHBlb3BsZUFycmF5LmZpbHRlcihwZXJzb24gPT4ge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChpbnB1dFZhbHVlLCAnZ2knKTtcblxuICAgIHJldHVybiAoXG4gICAgICBwZXJzb24ubmFtZS5tYXRjaChyZWdleCkgfHxcbiAgICAgIHBlcnNvbi5hZGRyZXNzLm1hdGNoKHJlZ2V4KSB8fFxuICAgICAgcGVyc29uLnN0YWdlLm1hdGNoKHJlZ2V4KSB8fFxuICAgICAgcGVyc29uLmFnZS5tYXRjaChyZWdleClcbiAgICApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5wdXRWYWx1ZSgpIHtcbiAgY29uc3QgbWF0Y2hlZEFycmF5ID0gc2VhcmNoQ2FuZGlkYXRlcyh0aGlzLnZhbHVlLCBwZW9wbGVBcnJheSk7XG5cbiAgY29uc3QgaHRtbCA9IG1hdGNoZWRBcnJheVxuICAgIC5tYXAobWF0Y2hlcyA9PiB7XG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAodGhpcy52YWx1ZSwgJ2dpJyk7XG4gICAgICBjb25zdCBwZXJzb25OYW1lID0gbWF0Y2hlcy5uYW1lLnJlcGxhY2UoXG4gICAgICAgIHJlZ2V4LFxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJobFwiPiR7dGhpcy52YWx1ZX08L3NwYW4+YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFkZHJlc3NOYW1lID0gbWF0Y2hlcy5hZGRyZXNzLnJlcGxhY2UoXG4gICAgICAgIHJlZ2V4LFxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJobFwiPiR7dGhpcy52YWx1ZX08L3NwYW4+YFxuICAgICAgKTtcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxsaT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICR7cGVyc29uTmFtZX0gJHthZGRyZXNzTmFtZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInBvcHVsYXRpb25cIj5cbiAgICAgICAgJHttYXRjaGVzLmVtYWlsfTwvc3Bhbj5cbiAgICAgICAgPC9saT5gO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xuXG4gIHN1Z2dlc3Rpb25zLmlubmVySFRNTCA9IGh0bWw7XG59XG5cbmlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBpbnB1dFZhbHVlKTtcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaW5wdXRWYWx1ZSk7XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZUxpc3QgfSBmcm9tICcuL2FkZENhbmRpZGF0ZSc7XG5cbi8vIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItY2FudmFzJyk7XG4vLyBjb25zdCBidXR0b25zID0gY29sdW1uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKTtcbi8vIGNvbnN0IGJ1dHRvbnNBcnJheSA9IEFycmF5LmZyb20oYnV0dG9ucyk7XG4vLyBjb25zb2xlLmxvZyhidXR0b25zQXJyYXkpO1xuLy8gYnV0dG9uc0FycmF5LmZvckVhY2goZWxlbWVudCA9PlxuLy8gICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlQ2FuZGlkYXRlKVxuLy8gKTtcblxuZnVuY3Rpb24gdXBkYXRlQ2FuZGlkYXRlKGUpIHtcbiAgY29uc29sZS5sb2coJ3dhcyBjbGlja2VkIHlvJyk7XG4gIGNvbnNvbGUubG9nKGUpO1xuXG4gIC8vZ2V0IHZhbHVlcyBmcm9tIGVkaXRhYmxlIEhUTUxcbiAgY29uc3QgcGVvcGxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGUnKTtcbiAgY29uc3QgbmFtZSA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPW5hbWVdJylcbiAgICAuaW5uZXJIVE1MO1xuICBjb25zdCBhZ2UgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hZ2VdJykuaW5uZXJIVE1MO1xuICBjb25zdCBlbWFpbCA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWVtYWlsXScpXG4gICAgLmlubmVySFRNTDtcbiAgY29uc3QgYWRkcmVzcyA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWFkZHJlc3NdJylcbiAgICAuaW5uZXJIVE1MO1xuICBjb25zdCBpbWFnZSA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWltYWdlXScpXG4gICAgLmlubmVySFRNTDtcbiAgY29uc3Qgc3RhZ2UgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1zdGFnZV0nKS52YWx1ZTtcbiAgY29uc3QgdXNlcklEID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcbiAgY29uc3QgcGVvcGxlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVvcGxlJykpIHx8IFtdO1xuXG4gIGNvbnN0IHBlcnNvbiA9IHtcbiAgICBuYW1lLFxuICAgIGFnZSxcbiAgICBlbWFpbCxcbiAgICBhZGRyZXNzLFxuICAgIGltYWdlLFxuICAgIHN0YWdlLFxuICAgIHVzZXJJRFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKHBlcnNvbik7XG5cbiAgbGV0IHBlb3BsZUNsb25lID0gWy4uLnBlb3BsZV07XG5cbiAgLy9maW5kIHRoZSByaWdodCBwZXJzb24gYW5kIHVwZGF0ZSB3aGF0cyBuZXdcblxuICBsZXQgdXBkYXRlZENhbmRpZGF0ZXMgPSBwZW9wbGVDbG9uZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0udXNlcklEID09PSBwZXJzb24udXNlcklEKSB7XG4gICAgICBpdGVtLm5hbWUgPSBwZXJzb24ubmFtZTtcbiAgICAgIGl0ZW0uYWdlID0gcGVyc29uLmFnZTtcbiAgICAgIGl0ZW0uZW1haWwgPSBwZXJzb24uZW1haWw7XG4gICAgICBpdGVtLmFkZHJlc3MgPSBwZXJzb24uYWRkcmVzcztcbiAgICAgIGl0ZW0uaW1hZ2UgPSBwZXJzb24uaW1hZ2U7XG4gICAgICBpdGVtLnN0YWdlID0gcGVyc29uLnN0YWdlO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtO1xuICB9KTtcbiAgY29uc29sZS5sb2codXBkYXRlZENhbmRpZGF0ZXMpO1xuXG4gIHBvcHVsYXRlTGlzdCh1cGRhdGVkQ2FuZGlkYXRlcywgcGVvcGxlTGlzdCk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwZW9wbGUnKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Blb3BsZScsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRDYW5kaWRhdGVzKSk7XG59XG5cbndpbmRvdy51cGRhdGVDYW5kaWRhdGUgPSB1cGRhdGVDYW5kaWRhdGU7XG4iXSwic291cmNlUm9vdCI6IiJ9