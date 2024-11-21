

//1 
function equal(a, b) {
    if(a !== b) {
    return false
    } else {
        return true
    }
}

console.log(equal(1, "hello"))

//2
function mergeStudentData(array1, array2) {
    let result = []

    for (let i = 0; i < array1.length; i++) {
        let exist = false
        for (let j = 0; j < result.length; j++) {
            if(array1[i].name === result[j].name &&
                array1[i].email === result[j].email
            ) {
                exist = true
                break
            }
        }
        if(!exist) {
            result.push(array1[i])
        }
    }
    for (let i = 0; i < array2.length; i++) {
        let exist = false
        for (let j = 0; j < result.length; j++) {
            if(array2[i].name === result[j].name &&
                array2[i].email === result[j].email
            ) {
                exist = true
                break
            }
        }
        if(!exist) {
            result.push(array2[i])
        }
    }


}







//4
function switchPropertyAndValue(array) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        const obj = array[i]
        const newObj = {}
        for (let key in obj) {
            newObj [obj[key]] = key
        }
        result.push(newObj)
    }
    return result
}

console.log(switchPropertyAndValue([{name: "David", age: 20}]))


//5
function faktorial(angka) {
    let result = 1
    let proses = 0
    for(i = 1; i <= angka; i++) {
      result *= i
      //console.log(result)
      proses += i
      //console.log(i)
  
      if(i < angka) {
        proses += " x "
        //console.log(proses)
      }
    }
    console.log(proses + " = " + result)
    return result
  }
  console.log(faktorial(5))