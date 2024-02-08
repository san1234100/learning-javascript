//Simple login page 
//Greet the user if he/she enter the valid username and password

const loginData=[
    {userName:'vignesh', password:1234},
    {userName:'shriram', password:4321},
    {userName:'monish', password:5678},
    {userName:'karthik', password:2431},
]

//To get the username and password
// const userName=prompt('Enter the userName').toLowerCase();
// const password=+prompt('Enter the password');


//To greet the user for login successful
// function greet(username){
//     console.log(`Welcome, ${username}`);
// }

//To find the index of the user in loginData
const validData=loginData.findIndex(val=>val.userName===userName);

if(validData===-1){
    console.log(`Your Data is Invalid`);
}
else{
//Condition to check the user is valid or not
if(userName===loginData[validData].userName&&password===loginData[validData].password){
    greet(userName);
}
else{
    console.log(`Sorry ${userName} enter the valid password`);
}

}
