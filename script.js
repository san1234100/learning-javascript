const student = {
  studentName: "Vignesh",
  rollNo: 1,
  isPassed: true,
  greet() {
    console.log(`Welcome ${this.studentName}`);
  },
};
// delete student.isPassed;
console.log(student.studentName, student.rollNo, student.isPassed);
student.greet();

const vignesh = { ...student };
vignesh.rollNo = 2;
console.log(vignesh);

const titleEl = document.querySelector(".title");
console.log(titleEl);

const foods = ["Sambar", "Vada", "Dosa"];
const foodsEl = document.getElementById("foods");
foods.forEach((val) => (foodsEl.innerHTML += `<li>${val}</li>`));

const age = 25;
if (age >= 16) {
  console.log("above 16");
} else if (age > 21) {
  console.log("above 21");
} else if (age > 30) {
  console.log("above 30");
} else if (age > 60) {
  console.log("above 60");
}

// const chocolate = prompt("enter the chocolate name").toLowerCase();
console.log(chocolate);
if (chocolate === "diarymilk") {
  console.log("Have your Diary Milk");
} else if (chocolate === "fivestar") {
  console.log("Have your Five Star");
} else if (chocolate === "milkybar") {
  console.log("Have your Milky Bar");
} else {
  console.log("I Don't have those chocolates Try Some other");
}

'use strict'
console.log(globalThis);