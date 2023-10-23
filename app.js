// CLI EXAMPLE using commander
const { program } = require("commander");

program
    .version("1.0.0")
    .command("greet <name>")
    .description("Greet a person")
    .action((name) => {
        console.log(`Hello, ${name}`);
    })

program.parse(process.argv);