// import functions
import { people } from './data.js';

console.log(people, 'people');
// grab DOM elements
const selectElement = document.querySelector('.select');

const divContainer = document.querySelector('.contain');
const name = document.getElementById('.name');

const pronouns = document.querySelector('.pronouns');
const favPlace = document.querySelector('.favorite_place'); 
const hobbies = document.querySelector('.hobbies'); 

// set event listeners 
selectElement.addEventListener('change', (e) => {
    const selected = e.target.value;
    hobbies.innerHTML = ' ';
    divContainer.classList.remove('Delaney', 'Chris');
    if (selected === 'one') {
        renderPerson(0);
    } else {
        renderPerson(1);
    }
});
function renderPerson(index){
    divContainer.classList.add(`${people[index].name}`);	
    name.textContent = 'Name: ' + people[index].name;
    pronouns.textContent = 'Pronouns: ' + people[index].pronouns;
    favPlace.textContent = 'Favorite Place: ' + people[index].favorite_place;
	
    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbies.appendChild(li);
    }



    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
}