class Industry {
  createPerson(name) {
    return new Person(name)
  }

  createToy(price) {
    return new Toy(price);
  }
}

function Person(name) {
  this.name = name;
}

function Toy(price) {
  this.price = price;
}

const industry = new Industry();

console.log(industry.createPerson('romeo'));
console.log(industry.createToy(300));