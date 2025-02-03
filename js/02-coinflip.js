let coinFlip = Math.floor(Math.random() * 2);

let choice = prompt("Choose Heads or Tails:");

if (coinFlip === 0 && choice.toLowerCase() === "heads") {
    alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip === 0 && choice.toLowerCase() === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip === 1 && choice.toLowerCase() === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (coinFlip === 1 && choice.toLowerCase() === "tails") {
    alert("The flip was tails and you chose tails...you win!");
}