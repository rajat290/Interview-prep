const fs = require('fs');
console.log("1. start reading file");
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("2. file content:", data);
});