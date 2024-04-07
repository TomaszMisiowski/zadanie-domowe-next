function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

const numbers = [5, 3, 3, 5];
console.log(numbers);
console.log(numbers.map((number) => number * 2));

const students = [
  { name: "Paweł", lastName: "Kowalski" },
  { name: "Michał", lastName: "Kowalski" },
  { name: "Jacek", lastName: "Kowalski" },
  { name: "Marta", lastName: "Kowalski" },
  { name: "Łukasz", lastName: "Kowalski" },
];

const names = students.map((student) => student.name);
console.log(students);
console.log(names);
