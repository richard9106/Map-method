  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums){
  results.push(num * 2);
}
console.log(results);
// Using map()
const multByTwo = (num)=>{
  return num *2;
}
let mapResults = nums.map(multByTwo);

console.log(mapResults);
// Simplified w/ map()
let mapResultsSimple1 = nums.map(function(num){return num * 2});
console.log(mapResultsSimple1);

// Simplfied w/ map() + arrow function
let mapResultsSimple2 = nums.map((num)=>num*2);
console.log(mapResultsSimple2);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map( student =>[{"id" : student.id, "name" : student.name}] );
console.log(studentsWithIds);
const studentsWithIds2 = students.map(student => student = students);
console.log(studentsWithIds2);