import { populateList } from './addCandidate';

// const column = document.querySelector('.container-canvas');
// const buttons = column.getElementsByTagName('button');
// const buttonsArray = Array.from(buttons);
// console.log(buttonsArray);
// buttonsArray.forEach(element =>
//   element.addEventListener('click', updateCandidate)
// );

function updateCandidate(e) {
  console.log('was clicked yo');
  console.log(e);

  //get values from editable HTML
  const peopleList = document.querySelector('.people');
  const name = this.parentNode.parentNode.querySelector('[name=name]')
    .innerHTML;
  const age = this.parentNode.parentNode.querySelector('[name=age]').innerHTML;
  const email = this.parentNode.parentNode.querySelector('[name=email]')
    .innerHTML;
  const address = this.parentNode.parentNode.querySelector('[name=address]')
    .innerHTML;
  const image = this.parentNode.parentNode.querySelector('[name=image]')
    .innerHTML;
  const stage = this.parentNode.parentNode.querySelector('[name=stage]').value;
  const userID = this.parentNode.parentNode.dataset.id;
  const people = JSON.parse(localStorage.getItem('people')) || [];

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

  let peopleClone = [...people];

  //find the right person and update whats new

  let updatedCandidates = peopleClone.filter(item => {
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

  populateList(updatedCandidates, peopleList);
  localStorage.removeItem('people');
  localStorage.setItem('people', JSON.stringify(updatedCandidates));
}

window.updateCandidate = updateCandidate;
