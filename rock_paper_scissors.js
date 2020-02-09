let user = "";  // variables for storing selections, score, and game #
let comp = "";
let userScore = 0;
let compScore = 0;
let game = 1;

let gameAmount = prompt("How many games would you like to play?");

while (gameAmount >= 1)
{
    console.log("Round: %i", game);
    userInput();
    computerPlay();
    score(user,comp);
    console.log("%i for humans and %i for dirty robots", userScore, compScore);
    gameAmount--; 
}
if (gameAmount == 0)
{
    if (userScore > compScore)
    {
        alert("You Win! You sexy fleshbag you!");
    }
    else if (compScore > userScore)
    {
        alert("You Lose! Seems your dad was always right about you");
    }
    else
    {
        alert("A TIE?! Such a waste of time")
    }
}

function computerPlay()  // function which randomly picks computer input
{
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let a = [rock, paper, scissors];
    let b =  Math.floor(Math.random() * 3);
    comp = a[b];
    console.log(a[b]);
}    

function userInput()  // function which prompts user for input and logs it
{
    user = prompt("rock, paper, or scissors", )
    user = user.toLowerCase();
    console.log(user);
}

function score(user,comp) // function which determines scores as well as adds to game #
{
    if (user == "rock")
    {
        if (comp == "rock")
        {
            game++;
            console.log("Leave the ties for the bankers...");
        }
        else if (comp == "paper")
        {
            compScore++;
            game++;
            console.log("Beep Boop");
        }
        else
        {
            userScore++;
            game++;
            console.log("Aww Yussss");
        }
    }
    else if (user == "paper")
    {
        if (comp == "rock")
        {
            userScore++;
            game++;
            console.log("Heck yessss");
        }
        else if (comp == "paper")
        {
            game++;
            console.log("A tie?");
        }
        else
        {
            compScore++;
            game++;
            console.log("Beep Boop");
        }
    }
    else
    {
        if (comp == "rock")
        {
            compScore++;
            game++;
            console.log("Beep Boop");
        }
        else if (comp == "paper")
        {
            userScore++;
            game++;
            console.log("Yay!");
        }
        else
        {
            game++;
            console.log("A tie?");
        }
    }
}

     
