// CLI EXAMPLE using readline
const readline = require("node:readline");
const {stdin: input, stdout:output} = require ('node:process');

const rl = readline.createInterface({input, output});

const fortunes = [
    "You will find unexpedted joy in the little things",
    "A new opportunity will open doors for you.",
    "Adventure is just around the corner.",
    "Embrace change, and good things will follow",
    "Patience will bring you great rewards."
];

rl.question("Welcome to the Fortune Teller! What's your name? ", (name) => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];

    console.log(`Hello, ${name}! Your fortune today: ${randomFortune}`);

    rl.close();
})
