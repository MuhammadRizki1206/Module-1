let targetConvert = "The QuiCk BrOwN Fox"
let result = ""

for(let i = 0; i < targetConvert.length; i++) {
    if(targetConvert[i] >= "a" && targetConvert[i] <= "z") {
        result += targetConvert[i].toUpperCase()
    } else if (targetConvert[i] >= "A" && targetConvert[i] <= "Z") {
        result += targetConvert[i].toLowerCase()
    } else {
        result += targetConvert[i]
    }
}
console.log(result)