const fs = require('fs').promises;

fs.readFile("./files/new-task.txt", 'utf-8')
    .then((content) => {
        console.log('CONTENT', content);
        fs.appendFile("./files/tasks.txt", `\n${content}`, "utf-8")
            .then(() => {
                console.log("Text added successfully!");
            })
            .catch(err => {
                console.log("ERROR Append:", err);
            })
    })
    .catch(e => {
        console.log("ERROR", e.message);
    })