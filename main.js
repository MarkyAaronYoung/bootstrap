
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
    const duck = duckCollection[i];

    domString += `
    <div class="duck card">
      <img src="${duck.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Temperament ${duck.temperament}
            Age: ${duck.age}
            Size: ${duck.size}
           </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div class="duck">
          <h2>${duck.name}</h2>
          <img src="${duck.imageUrl}">
          <p>Age: ${duck.age}</p>
          <p>${duck.size}</p>
          <p>Temperament: ${duck.temperament.toUpperCase()}</p>
        </div>
        `;
  }

  printToDom('#duck-pen', domString);
}

const filterDucksEvent = (event) => {
  console.log('filtered ducks?');
  const buttonId = event.target.id;
 
  const tempDuckCollection = [];

  for (let i = 0; i < ducks.length; i++) {
    if (ducks[i].size === buttonId) {
      tempDuckCollection.push(ducks[i]);
    }
  }

  buildDuckCards(tempDuckCollection);
}

const clickEvents = () => {
  document.querySelector('#small').addEventListener('click', filterDucksEvent);
  document.querySelector('#medium').addEventListener('click', filterDucksEvent);
  document.querySelector('#large').addEventListener('click', filterDucksEvent);
 }
 

const init = () => {
  buildDuckCards(ducks);
  clickEvents();
}

init();
