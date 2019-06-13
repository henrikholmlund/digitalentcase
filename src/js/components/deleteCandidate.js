import { populateList } from './addCandidate';

function deleteCandidate(e) {
  console.log('deletecandidate was clicked', e);
  const peopleList = document.querySelector('.people');
  const userID = this.parentNode.dataset.id;

  const people = JSON.parse(localStorage.getItem('people')) || [];

  var index = people.findIndex(item => item.userID === userID);

  // Delete  the item by index.
  people.splice(index, 1);

  // To check.
  console.log(people);

  populateList(people, peopleList);

  localStorage.setItem('people', JSON.stringify(people));
}

window.deleteCandidate = deleteCandidate;
