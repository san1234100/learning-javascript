//Task examples for different types of for loop

const emp_details = [
    { emp_id: 1, emp_name: "Vignesh", salary: 30000 },
    { emp_id: 2, emp_name: "Shriram", salary: 35000 },
    { emp_id: 3, emp_name: "Monish", salary: 40000 },
    { emp_id: 4, emp_name: "Karthik", salary: 45000 }];

// for loop
// for(let i=0;i<emp_details.length;i++){
//     console.log(emp_details[i]);
// }
//for each
// emp_details.forEach(val=>console.log(`Name : ${val.emp_name}`));

//for of //Use it for array
// for(const val of emp_details){
//     console.log(val);
// }

//for in //Use it for objects
// for(const val in emp_details){
//     console.log(emp_details[val].emp_name);
// }

//while
// let i=0;
// while(i<emp_details.length){
// console.log(emp_details[i].emp_name);
// i++;
// }

//do while
// let i=0;
// do{
// console.log(emp_details[i].emp_name);
// i++;
// }while(i<emp_details.length)

//filter
const filterEmp=emp_details.filter(val=>val.salary>40000);
console.log(filterEmp);

//find
const findEmp=emp_details.find(val=>val.salary>40000);
console.log(findEmp);

//map
const mapEmp=emp_details.map(val=>{
    return {...val,salary:val.salary+5000}
});
console.log(mapEmp);