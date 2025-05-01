const role = prompt("What is your role? ");
// let isAuthorized = true;

if(role === "Employee"){
    console.log("Authorized to have Dietary services");
}else if(role === "Enrolled Member"){
    console.log("Authorized to have Dietary services and one-on-one interaction with a dietician.");
}else if(role === "Subscriber"){
    console.log("Authorized to have partial access to Dietary services");
}else if(role === "Non-Subscriber"){
    console.log("Enrollment required and need to subscribe for this facility to be availabel.");
}else{
    console.log("You are not Authorized to use this facility.");
}
