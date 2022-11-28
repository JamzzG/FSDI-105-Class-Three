//create the constructor with email, password, first name, last name, age, address, phone number, payment, color ()
function User(email, password,fname, lname, age, gender, phone, payment, color) {
    this.email = email;
    this.password = password;
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = gender;
    this.phone = phone; 
    this.payment = payment;
    this.color = color;
}

function register() {
    let inputEmail = $("#txtEmail").val();//$=Jquery #=getbyID .=get by class ""get by name    
    let inputPassword = $("#txtPassword").val();
    let inputFirstName = $("#txtFirstName").val();
    let inputLastName = $("#txtLastName").val();
    let inputAge = $("#numAge").val();
    let inputGender = $("#selGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPay").val();
    let inputColor = $("#selColor").val();

// validate items
if(!inputEmail||!inputPassword||!inputFirstName||!inputLastName){//&& and, || or, !not, == is equal, === is exactly equal
    console.error("Please enter Email, Password, First Name, and Last Name");
    return;//return ends the function here
}

let newUser = new User(inputEmail, inputPassword, inputFirstName, inputLastName, inputAge, inputGender, inputPhone, inputPayment, inputColor);
console.log  (newUser);

saveUser(newUser);
displayUser(newUser);
//this will show currently css that is defaulted at display:none
$("#pnlSuccess").show();
//Timeout function will re-hide message and set timer to 6 seconds in milliseconds.
setTimeout(function() {
    $("#pnlSuccess").hide();
}, 6000);
console.log ("User Saved!");

clearForm();

}

function clearForm() {
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtFirstName").val("");
    $("#txtLastName").val("");
    $("#numAge").val("");
    $("#selGender").val("");
    $("#txtPhone").val("");
    $("#selPay").val("");
    $("#selColor").val("#000000");
}


//***duplicate multiple lines (Alt+shift+down)***
function displayUser(user) {
    let syntax = `
    <tr>   
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        <td>${user.color}</td>
    </tr>
    `;

    $("#tblUser > tbody").append(syntax);
}



function loadUsers(){
    //get the data from localStorage
    let all = getAllUsers();//[x, x, x, x] need a for loop loacated inside storage.js 
    for(let i = 0; i < all.length; i++){
        let user = all[i]; 
        displayUser(user);//sending info to displayUser function
    // console.log(all);
}
}


function init(){  //launchest beginning js
    console.log("Page Ready!");
    $("#btnSave").click(register);  
    loadUsers();


    //load data


    //assings events

}


window.onload=init;//mandatory delay of all js until window is fully loaded








//[CTRL+P] skips to files




//Single Responsibility Principal.  Ideally only one responsibility per language/file

   //$("txtAge").hide();  //hides the input 
   //$("#txtAge").val();  same as document.getElementById("txtAge").value; 