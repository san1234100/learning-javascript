//Task examples for different types of function

const emp_details = [
    { emp_id: 1, emp_name: "Vignesh", salary: 30000 },
    { emp_id: 2, emp_name: "Shriram", salary: 35000 },
    { emp_id: 3, emp_name: "Monish", salary: 40000 },
    { emp_id: 4, emp_name: "Karthik", salary: 45000 }];
//Function declaration
// getEmployeeDetails();
// function getEmployeeDetails(){
// emp_details.forEach(val=>{
//     console.log(` ID : ${val.emp_id} \n Name : ${val.emp_name} \n Salary : ₹${val.salary}`);
// })
// }

//Function expression

// const getEmployeeDetails=() =>{
// emp_details.forEach(val=>{
//     console.log(` ID : ${val.emp_id} \n Name : ${val.emp_name} \n Salary : ₹${val.salary}`);
// })
// }
// getEmployeeDetails();

// passing parameters 

// getEmployeeDetails(2);
// function getEmployeeDetails(empId){
// const val=emp_details.find(val=>{
//     return val.emp_id===empId;
// })
//     console.log(` ID : ${val.emp_id} \n Name : ${val.emp_name} \n Salary : ₹${val.salary}`);

// }

// return
// const getEmployeeDetails=(empId) =>{
//     const val=emp_details.find(val=>{
//             return val.emp_id===empId;
//         })
//             return ` ID : ${val.emp_id} \n Name : ${val.emp_name} \n Salary : ₹${val.salary}`;
// }
// const ans=getEmployeeDetails(1);
// console.log(ans);

// IIFE
(
    function getEmployeeDetails(){
        emp_details.forEach(val=>{
            console.log(` ID : ${val.emp_id} \n Name : ${val.emp_name} \n Salary : ₹${val.salary}`);
        })
        }
)();