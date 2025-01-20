
const fs = require('fs');
const { request } = require('https');
const text = fs.readFileSync("file.txt", "utf-8");
const no = text.replace('note', 'node');
console.log(text)
console.log(no)

 
console.log("creating a new file txt")
fs.writeFileSync('prabha.txt', text)

 
