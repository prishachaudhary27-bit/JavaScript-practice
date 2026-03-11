let runagain= true;
function canDrive(age) {
    return age >= 18 ? "True" : "False";
}


while(runagain){
    let age=prompt("Enter your age: ");
    age=Number.parseInt(age);
    
    if (canDrive(age)== "False") {
    alert("You cannot Drive");
    }
    else{
        alert("You can Drive");
    }
    
    runagain = confirm("Do you want to run the program again?");

}
