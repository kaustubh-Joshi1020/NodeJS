const file = require('fs');

let a = " appended"

file.writeFileSync("./test.txt" , "hiii there file created")
console.log(file.readFileSync("./test.txt" ,"utf8"));

file.appendFileSync("./test.txt" , a)

file.copyFileSync("./test.txt" , "./copy.txt")

file.unlinkSync("./copy.txt")

if(file.existsSync("./test.txt")){
    file.copyFileSync("./test.txt" , "./copy.txt")
}

