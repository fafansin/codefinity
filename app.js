// CLI EXAMPLE using readline
const fs = require('fs').promises;
const readline = require("node:readline");
const {stdin: input, stdout:output} = require ('node:process');
const rl = readline.createInterface({input, output});

const minNumber = 1;
const maxNumber = 100;

const secretNumber = Math.floor(Math.random() * (maxNumber-minNumber + 1)) + minNumber;

let attempts = 0;

function isValidGuess(guess){
    return !isNaN(guess)
        && guess >= minNumber
        && guess <= maxNumber;
}

function playGame(){
    rl.question(`Guess a number between ${minNumber} and ${maxNumber} `, (guess) => {
        if(isValidGuess(guess)){
            attempts++;
            const guessNumber = parseInt(guess);
            
            if(guessNumber === secretNumber){
                console.log(`Congratulations! You guessed the number in ${attempts} attempts!`);
                saveGameResult(`Player won in ${attempts} attempts. `)
                rl.close
            }else if(guessNumber < secretNumber){
                console.log('Try Higher');
                playGame();
            }else{
                console.log('Try Lower');
                playGame();
            }
        }else{
            console.log('Please enter a valid number with the specified range')
        }
    })
}

async function saveGameResult(result){
    try{
        await fs.appendFile('./files/game_results.txt', `${result}\n`);
    }catch (err){
        console.log('Failed to save game result.');
    }
}

playGame();