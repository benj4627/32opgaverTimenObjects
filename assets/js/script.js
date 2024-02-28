// Lav et array der holder navnene på dem i din gruppe - log det
let group = ['Benjamin', 'Mathias', 'Trine', 'Jacob'];


// Lav et array med tre datoer: juleaften, nytåraften og langfredag (hvilken datatype vælger du mon?) - log det
let date = [24.12, 31.12, 29.03];


// Lav et array med 7 stykker data om en person (fiktiv eller ægte), f.eks. navn, alder, vægt, hårfarve, øjenfarve, yndlingscitat, motto, modersmål, antal øjne, proffession, er personen i live osv. - log det
let features = ['Brunt hår', '75kg', 'grønne øjne', '45 år', 'dansk', 'ramen'];


// Er arrays hensigtsmæssige i alle tre ovenstående tilfælde? Nej. Brug objects i stedet som nedenfor: 
let person = new Object();
person.name = 'Ben';
person.age = 26; 
person.hairColor = 'brown';
person.glassesColor = 'tortoise';
person.hobbies = ['Reading books', 'Listening to records']

let person1 = {
  name: 'Henrik',
  age: 32,
  hairColor: 'Light brown',
  glassesColor: 'None',
  hobbies: ['watching movies', 'running in the morning'],
  sayHi: function() {
    console.log(`Hi I'm ${this.name} and i enjoy ${this.hobbies[0]} and ${this.hobbies[1]}.`);
  }
};

let person2 = {
    name: 'Torben',
    age: 45,
    hairColor: 'Grey',
    glassesColor: 'Black',
    hobbies: ['reading books', 'listening to old soul records'],
    sayHi: function() {
      console.log(`Hi I'm ${this.name} and i enjoy ${this.hobbies[0]} and ${this.hobbies[1]}.`);
    }
  };

person1.sayHi();
person2.sayHi();
