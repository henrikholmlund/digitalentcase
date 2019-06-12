const addPerson = document.querySelectorAll('.add-person');
const peopleList = document.querySelector('.people');
const people = JSON.parse(localStorage.getItem('people')) || [];
const contactList = document.querySelector('#contact');
const dialogueList = document.querySelector('#dialogue');
const interviewList = document.querySelector('#interview');
const offerList = document.querySelector('#offer');
const terminationList = document.querySelector('#termination');

const ID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

function addCandidate(e) {
  e.preventDefault();
  const name = this.querySelector('[name=name]').value;
  const age = this.querySelector('[name=age]').value;
  const email = this.querySelector('[name=email]').value;
  const address = this.querySelector('[name=address]').value;
  const image = this.querySelector('[name=image]').value;
  const stage = this.querySelector('[name=stage]').value;
  const userID = ID();

  const person = {
    name,
    age,
    email,
    address,
    image,
    stage,
    userID
  };

  console.log(person);

  people.push(person);
  populateList(people, peopleList);
  localStorage.setItem('people', JSON.stringify(people));
  this.reset();
}

function populateList(people = [], peopleList) {
  people.map(p => {
    if (p.stage === 'Kontakt') {
      contactList.innerHTML = people
        .filter(person => person.stage === 'Kontakt')
        .map((person, i) => {
          return `
      <div id="${person.userID}" data-id="${
            person.userID
          }" name="person${i}" class="people-list" draggable="true" ondragstart="dragstart_handler(event);">
        <p>${person.name}</p>
        <p>${person.age}</p>
        <p>${person.email}</p>
        <p>${person.address}</p>
        <p>${person.image}</p>
        <p >${person.stage}</span>
        <p>${person.userID}</p>
      </div>
    `;
        })
        .join('');
    }
    if (p.stage === 'Dialog') {
      dialogueList.innerHTML = people
        .filter(person => person.stage === 'Dialog')
        .map((person, i) => {
          return `
      <div id="${person.userID}" data-id="${
            person.userID
          }" name="person${i}" class="people-list" draggable="true" ondragstart="dragstart_handler(event);">
        <p>${person.name}</p>
        <p>${person.age}</p>
        <p>${person.email}</p>
        <p>${person.address}</p>
        <p>${person.image}</p>
        <p >${person.stage}</span>
        <p>${person.userID}</p>
      </div>
    `;
        })
        .join('');
    }
    if (p.stage === 'Intervju') {
      interviewList.innerHTML = people
        .filter(person => person.stage === 'Intervju')
        .map((person, i) => {
          return `
      <div id="${person.userID}" data-id="${
            person.userID
          }" name="person${i}" class="people-list" draggable="true" ondragstart="dragstart_handler(event);">
        <p>${person.name}</p>
        <p>${person.age}</p>
        <p>${person.email}</p>
        <p>${person.address}</p>
        <p>${person.image}</p>
        <p >${person.stage}</span>
        <p>${person.userID}</p>
      </div>
    `;
        })
        .join('');
    }
    if (p.stage === 'Erbjudande') {
      offerList.innerHTML = people
        .filter(person => person.stage === 'Erbjudande')
        .map((person, i) => {
          return `
      <div id="${person.userID}" data-id="${
            person.userID
          }" name="person${i}" class="people-list" draggable="true" ondragstart="dragstart_handler(event);">
        <p>${person.name}</p>
        <p>${person.age}</p>
        <p>${person.email}</p>
        <p>${person.address}</p>
        <p>${person.image}</p>
        <p >${person.stage}</span>
        <p>${person.userID}</p>
      </div>
    `;
        })
        .join('');
    }
    if (p.stage === 'Avslutad') {
      terminationList.innerHTML = people
        .filter(person => person.stage === 'Avslutad')
        .map((person, i) => {
          return `
      <div id="${person.userID}" data-id="${
            person.userID
          }" name="person${i}" class="people-list" draggable="true" ondragstart="dragstart_handler(event);">
        <p>${person.name}</p>
        <p>${person.age}</p>
        <p>${person.email}</p>
        <p>${person.address}</p>
        <p>${person.image}</p>
        <p >${person.stage}</span>
        <p>${person.userID}</p>
      </div>
    `;
        })
        .join('');
    }
  });
}

addPerson.forEach(person => person.addEventListener('submit', addCandidate));

populateList(people, peopleList);
