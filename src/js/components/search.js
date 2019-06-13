const inputField = document.querySelector('.search-box');
const input = document.querySelector('.search');
const peopleArray = JSON.parse(localStorage.getItem('people')) || [];
const suggestions = document.querySelector('.suggestions');

const handleClick = e => {
  const offClick = evt => {
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
  return peopleArray.filter(person => {
    const regex = new RegExp(inputValue, 'gi');

    return (
      person.name.match(regex) ||
      person.address.match(regex) ||
      person.stage.match(regex) ||
      person.age.match(regex)
    );
  });
}

function inputValue() {
  const matchedArray = searchCandidates(this.value, peopleArray);

  const html = matchedArray
    .map(matches => {
      const regex = new RegExp(this.value, 'gi');
      const personName = matches.name.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const addressName = matches.address.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
        <li>
        <span class="name">
        ${personName} ${addressName}
        </span>
        <span class="population">
        ${matches.email}</span>
        </li>`;
    })
    .join('');

  suggestions.innerHTML = html;
}

inputField.addEventListener('click', handleClick);
input.addEventListener('change', inputValue);
input.addEventListener('keyup', inputValue);
