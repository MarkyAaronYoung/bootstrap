
const ducks = [
  {
    color: 'blue',
    name: 'George',
    breed: 'funny',
    size: 'small', 
    temperament: 'mean',
    imageUrl: 'https://backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/03/backyard-poultry-duck-breeds.jpg',
    gender: 'male',
    age: 4,
    isRubber: true,
  },
  {
    color: 'orange',
    name: 'Karen',
    breed: 'smelly',
    size: 'medium', 
    temperament: 'nice',
    imageUrl: 'https://backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/03/backyard-poultry-duck-breeds.jpg',
    gender: 'male',
    age: 0,
    isRubber: true,
  },
  {
    color: 'blue',
    name: 'George',
    breed: 'funny',
    size: 'small', 
    temperament: 'mean',
    imageUrl: 'https://backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/03/backyard-poultry-duck-breeds.jpg',
    gender: 'male',
    age: 0,
    isRubber: true,
  },
  {
    color: 'blue',
    name: 'George',
    breed: 'funny',
    size: 'small', 
    temperament: 'mean',
    imageUrl: 'https://backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/03/backyard-poultry-duck-breeds.jpg',
    gender: 'male',
    age: 0,
    isRubber: true,
  },
  {
    color: 'blue',
    name: 'George',
    breed: 'funny',
    size: 'small', 
    temperament: 'mean',
    imageUrl: 'https://backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/03/backyard-poultry-duck-breeds.jpg',
    gender: 'female',
    age: 0,
    isRubber: true,
  },
  {
    color: 'blue',
    name: 'George3',
    breed: 'funny',
    size: 'small', 
    temperament: 'mean',
    imageUrl: 'https://backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/03/backyard-poultry-duck-breeds.jpg',
    gender: 'male',
    age: 0,
    isRubber: false,
  },
  {
    color: 'blue',
    name: 'George2',
    breed: 'funny',
    size: 'small', 
    temperament: 'mean',
    imageUrl: 'https://backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/03/backyard-poultry-duck-breeds.jpg',
    gender: 'male',
    age: 0,
    isRubber: false,
  },
  {
    color: 'blue',
    name: 'George',
    breed: 'funny',
    size: 'small', 
    temperament: 'mean',
    imageUrl: 'https://backyardpoultry.iamcountryside.com/wp-content/uploads/sites/3/2019/03/backyard-poultry-duck-breeds.jpg',
    gender: 'female',
    age: 0,
    isRubber: true,
  },
]

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildDuckCards = (duckCollection) => {
  let domString = '<div class="row">';

  for (let i =0; i < duckCollection.length; i++) {
    domString += '<div id="duck-pen" class="col-4 mt-2">';
    domString += `<img src="${duckCollection[i].imageUrl}">`
    domString += `<h2>${duckCollection[i].color}</h2>`
    domString += `<h3>${duckCollection[i].name}<h3>`
    domString += `<h4>${duckCollection[i].size}<h4>`
    domString += `<p> This ${duckCollection[i].temperament} duck is a ${duckCollection[i].gender} aged ${duckCollection[i].age} and is a ${duckCollection[i].isRubber}`
    domString += '</div>'
  }
  printToDom('#duck-pen', domString);
}

const init = () => {
  buildDuckCards(ducks);
}

init();
