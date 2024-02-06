let userProfile={
        name:"Ram",
        age:22,
        subscriptionStatus:'Active'
}
console.log(userProfile["name"]);
console.log(userProfile["age"]);
console.log(userProfile["subscriptionStatus"]);

if (userProfile.subscriptionStatus=='Active') {
    console.log("Access granted to primium");
    
} else {

    console.log("Access Denied");
}