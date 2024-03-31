//The user to input the names of people they would like to invite to a dinner party

let user_guest = [];// empty array to be filled up with 10 guest
let i =0
let maximum_guest = "";// variable to store not more than 10 guests

while (i < 11) {
    i++;
    user_guest.push(prompt("Please put the name of people you would like to invite in your dinner"));
    if (i == 11) {
       user_guest.pop();
        maximum_guest = prompt("You can only add a maximum of 10 people to your guest list.Would you like to replace someone on the list with last person you entered? yes/no:");
        if (maximum_guest.toLowerCase() === "yes"){
            let replace_guest = prompt(`the updated guests: ${user_guest} 
        mention the guest name to be replaced`); // guest to be replaced
            let new_guest = prompt("new guest");// new guest to be added
            let index_new_guest = user_guest.indexOf(replace_guest);
           
            user_guest[index_new_guest] = new_guest; // new name replacing one of the 10 guest
        }
        
    }; 
}; 
let updated_guest= user_guest.join(",") 
console.log(updated_guest)

