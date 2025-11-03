alert("Welcome to the MTN Network");
let username =prompt("Please enter your name:");
let number  =parseInt(prompt("Enter Phone Number:"));
confirm("Do you want to continue?");
let plan =prompt("Data or Recharge");

if(username === "" || number === "" || plan === ""){
    alert("All fields are required!");
}else{
    const storage = [username, number, plan];
    if(plan === "Data"){
        let dataPlan = prompt("Select Data plan: 1GB for 100, 2GB for 200, 5GB for 500");
    }
    if(plan === "Recharge"){
        let rechargePlan = prompt("Select Recharge plan: #100,#200, #500");
    }
    alert("plan selected successfully");

}
