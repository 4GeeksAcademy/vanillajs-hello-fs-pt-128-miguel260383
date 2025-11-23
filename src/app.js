const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors:["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"] 
}


const jugar = (userChoise) => {
console.log(Math.floor(Math.random()*choises.length));
console.log(choises[Math.floor(Math.random()*choises.length)]);

const computerChoise = choises[Math.floor(Math.random()*choises.length)]
console.log("userChoise: ", userChoise);
console.log("computerChoise: ", computerChoise);

if (userChoise === computerChoise) {
    console.log("Empate");
}

else if (userChoise === "lizard" && (computerChoise === "spock" || computerChoise === "paper")){
    console.log("Ganaste")
}
else if (userChoise === "rock" && (computerChoise === "scissors" || computerChoise === "lizard")){
    console.log("Ganaste")
}
else if (userChoise === "paper" && (computerChoise === "spock" || computerChoise === "rock")){
    console.log("Ganaste")
}
else if (userChoise === "scissors" && (computerChoise === "paper" || computerChoise === "lizard")){
    console.log("Ganaste")
}
else if (userChoise === "spock" && (computerChoise === "scissors" || computerChoise === "rock")){
    console.log("Ganaste")
}
else {
    console.log("Perdiste")
}

}
jugar("spock")