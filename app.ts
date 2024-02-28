//Task 12
//Greetings: Start with the arry you used in Exersise 11, butt instead
//ofjust printing each person's name, print a message to them. The each
//massage should be the same, but each message should be personalized
// with the person's name.

let names: string[]= ['jamal', 'shabana', 'akmal', 'bublo'];
const message:string= 'Welcome to Tpescript class:'
for(let i=0; i<names.length; i++){
    console.log(message + names[i]);
}