class Utente {
  constructor(firstName, lastName, age, location) {
    this.name = firstName;
    this.surname = lastName;
    this.age = age;
    this.location = location;
  }
  static ageDiff(utente1, utente2) {
    if (utente1 > utente2) {
      console.log(utente1.name, "è più grande di", utente2.name);
    } else {
      console.log(utente2.name, "è più grande di", utente1.name);
    }
  }
}

const newUtente = new Utente("Fabrizio", "Pignatelli", 21, "Viterbo");
console.log(newUtente);
const newUtente2 = new Utente("Chiara", "Lombardi", 22, "Viterbo");
console.log(newUtente);
const newUtente3 = new Utente("Stefano", "Caio", 45, "Bolzano");
console.log(newUtente);
