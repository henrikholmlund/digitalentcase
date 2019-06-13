const addPerson = document.querySelectorAll('.add-person');
const peopleList = document.querySelector('.people');
const people = JSON.parse(localStorage.getItem('people')) || [];
const contactList = document.querySelector('#contact');
const dialogueList = document.querySelector('#dialogue');
const interviewList = document.querySelector('#interview');
const offerList = document.querySelector('#offer');
const terminationList = document.querySelector('#termination');

const ID = function() {
  // Create a unique id for each person appended to the DOM
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
  const people = JSON.parse(localStorage.getItem('people')) || [];
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

export function populateList(people = [], peopleList) {
  contactList.innerHTML = '';
  dialogueList.innerHTML = '';
  interviewList.innerHTML = '';
  offerList.innerHTML = '';
  terminationList.innerHTML = '';
  people.map(p => {
    if (p.stage === 'Kontakt') {
      contactList.innerHTML = people
        .filter(person => person.stage === 'Kontakt')
        .map((person, i) => {
          return `
      <div id="${person.userID}" data-id="${
            person.userID
          }" name="person${i}" class="people-list" draggable="true" ondragstart="dragstart_handler(event);">
          <span>Namn: </span><p contenteditable="true" name="name">${
            person.name
          }</p>
        <span>Ålder: </span><p contenteditable="true" name="age">${
          person.age
        }</p>
        <span>Email: </span><p contenteditable="true" name="email">${
          person.email
        }</p>
        <span>Adress: </span><p contenteditable="true" name="address">${
          person.address
        }</p>
        <span>Bild: </span><p contenteditable="true" name="image">${
          person.image
        }</p>
       
        <select class="stage-select" name="stage">
              <option value="">-Rekryteringssteg-</option>
              <option value="Kontakt" selected>Kontakt</option>
              <option value="Dialog">Dialog</option>
              <option value="Intervju">Intervju</option>
              <option value="Erbjudande">Erbjudande</option>
              <option value="Avslutad" >Avslutad</option>
        </select>
        <div class="button-container">
          <button class="change-button">Ändra</button>
          <button class="delete-button">Ta bort</button>
        </div>
        
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
          <span>Namn: </span><p contenteditable="true" name="name">${
            person.name
          }</p>
        <span>Ålder: </span><p contenteditable="true" name="age">${
          person.age
        }</p>
        <span>Email: </span><p contenteditable="true" name="email">${
          person.email
        }</p>
        <span>Adress: </span><p contenteditable="true" name="address">${
          person.address
        }</p>
        <span>Bild: </span><p contenteditable="true" name="image">${
          person.image
        }</p>
       
        <select class="stage-select" name="stage">
              <option value="">-Rekryteringssteg-</option>
              <option value="Kontakt" >Kontakt</option>
              <option value="Dialog" selected>Dialog</option>
              <option value="Intervju">Intervju</option>
              <option value="Erbjudande">Erbjudande</option>
              <option value="Avslutad" >Avslutad</option>
        </select>
        <div class="button-container">
          <button class="change-button">Ändra</button>
          <button class="delete-button">Ta bort</button>
        </div>
        
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
          <span>Namn: </span><p contenteditable="true" name="name">${
            person.name
          }</p>
        <span>Ålder: </span><p contenteditable="true" name="age">${
          person.age
        }</p>
        <span>Email: </span><p contenteditable="true" name="email">${
          person.email
        }</p>
        <span>Adress: </span><p contenteditable="true" name="address">${
          person.address
        }</p>
        <span>Bild: </span><p contenteditable="true" name="image">${
          person.image
        }</p>
       
        <select class="stage-select" name="stage">
              <option value="">-Rekryteringssteg-</option>
              <option value="Kontakt" >Kontakt</option>
              <option value="Dialog">Dialog</option>
              <option value="Intervju" selected>Intervju</option>
              <option value="Erbjudande">Erbjudande</option>
              <option value="Avslutad" >Avslutad</option>
        </select>
        <div class="button-container">
          <button class="change-button">Ändra</button>
          <button class="delete-button">Ta bort</button>
        </div>
        
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
          <span>Namn: </span><p contenteditable="true" name="name">${
            person.name
          }</p>
        <span>Ålder: </span><p contenteditable="true" name="age">${
          person.age
        }</p>
        <span>Email: </span><p contenteditable="true" name="email">${
          person.email
        }</p>
        <span>Adress: </span><p contenteditable="true" name="address">${
          person.address
        }</p>
        <span>Bild: </span><p contenteditable="true" name="image">${
          person.image
        }</p>
       
        <select class="stage-select" name="stage">
              <option value="">-Rekryteringssteg-</option>
              <option value="Kontakt" >Kontakt</option>
              <option value="Dialog">Dialog</option>
              <option value="Intervju">Intervju</option>
              <option value="Erbjudande" selected>Erbjudande</option>
              <option value="Avslutad">Avslutad</option>
        </select>
        <div class="button-container">
          <button class="change-button">Ändra</button>
          <button class="delete-button">Ta bort</button>
        </div>
        
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
          <span>Namn: </span><p contenteditable="true" name="name">${
            person.name
          }</p>
        <span>Ålder: </span><p contenteditable="true" name="age">${
          person.age
        }</p>
        <span>Email: </span><p contenteditable="true" name="email">${
          person.email
        }</p>
        <span>Adress: </span><p contenteditable="true" name="address">${
          person.address
        }</p>
        <span>Bild: </span><p contenteditable="true" name="image">${
          person.image
        }</p>
       
        <select class="stage-select" name="stage">
              <option value="">-Rekryteringssteg-</option>
              <option value="Kontakt" >Kontakt</option>
              <option value="Dialog">Dialog</option>
              <option value="Intervju">Intervju</option>
              <option value="Erbjudande">Erbjudande</option>
              <option value="Avslutad" selected>Avslutad</option>
        </select>
        <div class="button-container">
          <button class="change-button">Ändra</button>
          <button class="delete-button">Ta bort</button>
        </div>
        
      </div>
    `;
        })
        .join('');
    }
  });
}

addPerson.forEach(person => person.addEventListener('submit', addCandidate));

populateList(people, peopleList);
window.populateList = populateList;
