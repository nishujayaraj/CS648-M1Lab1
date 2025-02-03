let Numb = parseInt(prompt("Enter a number"));

if (isNaN(Numb) || Numb < 0) {
    console.log("Not a valid number");
} else {
    for (let i = Numb; i >= 0; i--) {
        console.log(i);
    }
}