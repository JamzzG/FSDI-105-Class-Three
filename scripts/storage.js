

function saveUser(user){
    let existing = getAllUsers();
    existing.push(user);//add new user to the list

    //JSON = JavaScript Object Notation (converts objects into strings)
    let value = JSON.stringify(existing); //<--Parse object into a JSON string "ENCODE into a string"

    //localStorage only works with strings and numbers.
    localStorage.setItem("users",value);//needs an array to store multiple strings otherwise it overrides previous
}




function getAllUsers(){
    let allUsers=[];

    let string = localStorage.getItem("users");  //read the json string   
    if (string){
        //parse the string into an array "Decode into a list"
        allUsers =  JSON.parse(string); //parse is opposite of stringify
        return allUsers;

    } else{
        return[];
        }
    }