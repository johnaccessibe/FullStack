const fileHandler = require("./file-handler");

const arr = [];
let secondArr = [];

for (let i = 0; i < 100; i++) {
    let randomNum = ""
    randomNum = Math.floor((Math.random() * 100) + 1);
    arr.push(randomNum)
}

async function main() {
    try {
        await fileHandler.write("my-file.txt", arr);
        const content = await fileHandler.read("my-file.txt")
        // console.log(content)
        newArr = content.split(',');

        for (const i of newArr) {
            secondArr.push(+i)
        }

        calcAverage(arr)
        calcAverage(secondArr)
    }
    catch (err) {
        console.log(err)
    }
    // return content
}

function calcAverage(e) {
    let sum = 0;
    for (const i of e) {
        sum += +i
    }
    const avg = sum / e.length
    console.log(" the average is: " + avg)
}

main();