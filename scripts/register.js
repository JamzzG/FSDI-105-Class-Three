//create the constructor with email, password, first name, last name, age, address, phone number, payment, color ()
function User(email, password,fname, lname, age, gender, phone, payment, color) {
    this.email = email;
    this.password = password;
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.gender = gender;
    this.phone = phone; 
    this.payment = payment;
    this.color = color;
}

function register() {
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFirstName = $("#txtFirstName").val();
    let inputLastName = $("#txtLastName").val();
    let inputAge = $("#numAge").val();
    let inputGender = $("#selGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPay").val();
    let inputColor = $("#selColor").val();

// validate items
if(!inputEmail||!inputPassword||inputFirstName||inputLastName){//&& and, || or, !not, == is equal, === is exactly equal
    console.error("Please enter Email, Password, First Name, and Last Name");
    return;

}
//javascript logical operators home work for today. 

let newUser = new User(inputEmail, inputPassword, inputFirstName, inputLastName, inputAge, inputGender, inputPhone, inputPayment, inputColor);
console.log  (newUser);

saveUser(newUser);
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




function init(){  //launchest beginning js
    console.log("Page Ready!");
    $("#btnSave").click(register);  //$=Jquery #=getbyID .=get by class ""get by name    

    //load data

    //assings events

}


window.onload=init;//mandatory delay of all js until window is fully loaded













//Single Responsibility Principal.  Ideally only one responsibility per language/file

   //$("txtAge").hide();  //hides the input 
   //$("#txtAge").val();  same as document.getElementById("txtAge").value; 