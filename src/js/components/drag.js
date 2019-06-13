import { populateList } from './addCandidate';

function dragstart_handler(ev) {
  console.log('dragStart');
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData('text/plain', ev.target.id);
  ev.dataTransfer.dropEffect = 'move';
}

function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = 'move';
}

function drop_handler(ev, el) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData('text/plain');
  console.log({ data, el });
  el.appendChild(document.getElementById(data));

  const peopleList = document.querySelector('.people');
  const people = JSON.parse(localStorage.getItem('people')) || [];
  let peopleClone = [...people];

  let stringedEl = el;
  console.log(stringedEl);
  let string = '' + el;
  console.log(stringedEl.id);

  //find the right person and update the stage attr on drop

  if (stringedEl.id == 'contact') {
    let updatedCandidates = peopleClone.filter(item => {
      if (item.userID === data) {
        item.stage = 'Kontakt';
      }
      return item;
    });

    populateList(updatedCandidates, peopleList);
    localStorage.removeItem('people');
    localStorage.setItem('people', JSON.stringify(updatedCandidates));
  }
  if (stringedEl.id == 'dialogue') {
    let updatedCandidates = peopleClone.filter(item => {
      if (item.userID === data) {
        item.stage = 'Dialog';
      }
      return item;
    });

    populateList(updatedCandidates, peopleList);
    localStorage.removeItem('people');
    localStorage.setItem('people', JSON.stringify(updatedCandidates));
  }
  if (stringedEl.id == 'interview') {
    let updatedCandidates = peopleClone.filter(item => {
      if (item.userID === data) {
        item.stage = 'Intervju';
      }
      return item;
    });

    populateList(updatedCandidates, peopleList);
    localStorage.setItem('people', JSON.stringify(updatedCandidates));
  }
  if (stringedEl.id == 'offer') {
    let updatedCandidates = peopleClone.filter(item => {
      if (item.userID === data) {
        item.stage = 'Erbjudande';
      }
      return item;
    });

    populateList(updatedCandidates, peopleList);
    localStorage.removeItem('people');
    localStorage.setItem('people', JSON.stringify(updatedCandidates));
  }
  if (stringedEl.id == 'termination') {
    console.log('it is terminatipn');
    let updatedCandidates = peopleClone.filter(item => {
      if (item.userID === data) {
        item.stage = 'Avslutad';
      }
      return item;
    });

    populateList(updatedCandidates, peopleList);
    localStorage.removeItem('people');
    localStorage.setItem('people', JSON.stringify(updatedCandidates));
  }
}

// Bind fn to the window
// window.foo = foo;

window.dragstart_handler = dragstart_handler;
window.dragover_handler = dragover_handler;
window.drop_handler = drop_handler;
