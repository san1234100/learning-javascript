//Task
//If we need to check employee details we can get through empId

const empId = +prompt("Enter Your Id Number");

switch (empId) {
  case 1:
    console.log(`Hi Vignesh
        Salary : 4,00,000
        Dept : AWS
        Experience: 4yrs`);
    break;
  case 2:
    console.log(`Hi Shriram
            Salary : 4,30,000
            Dept : Network Engineer
            Experience: 5yrs`);
    break;
  case 3:
    console.log(`Hi Monish
                Salary : 6,00,000
                Dept : Backend Developer
                Experience: 6yrs`);
    break;
  case 4:
    console.log(`Hi Karthik
                Salary : 9,00,000
                Dept : Java Developer
                Experience: 10yrs`);
    break;
  default:
    console.log('Enter the valid ID ');
}
