export function tellFortune(kidsAmount, partnerName, location, jobTitle) {
    return `Hi! You have ${kidsAmount} kids, your partner's name is ${partnerName}, you are located in ${location}, and your position is ${jobTitle}.`;
}

let kidsAmount = prompt("How many kids do you have?");
let partnerName = prompt("What is your partner's name?");
let location = prompt("What is your country?");
let jobTitle = prompt("What is your job position?");

console.log(tellFortune(kidsAmount, partnerName, location, jobTitle));
