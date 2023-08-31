// Value random index 100 //
let arr = []

for (let index = 0; index < 100; index++) {
    arr.push(Math.floor(Math.random() * 50));
}

console.log("random 100 array")
console.log(arr)

// Value Breakdown 2 array //
let evenArray = []
let oddArray = []

for (let index = 0; index < arr.length; index++) {
    if(index % 2 == 0){
        evenArray.push(arr[index])
    }else{
        oddArray.push(arr[index])
    }
}

console.log("even array = "+evenArray)
console.log("odd array = "+oddArray)


// Value max, min, total, average //

// value max//
function findMax(arr) {
    let max = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (max < arr[index]) {
            max = arr[index]
        }
    }
    return max
}

evenMax = findMax(evenArray)
oddMax = findMax(oddArray)

// value min //
function findMin(arr) {
    let min = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (min > arr[index]) {
            min = arr[index]
        }
    }
    return min
}

evenMin = findMin(evenArray)
oddMin = findMin(oddArray)

// value total //
function total(arr) {
    let total = 0
    for (let index = 0; index < arr.length; index++) {
        total += arr[index]
    }
    return total
}

evenTotal = total(evenArray)
oddTotal = total(oddArray)

// value average //
evenAverage = evenTotal / evenArray.length
oddAverage = oddTotal / oddArray.length

// results of Even Array //
console.log("Results of Even Array")
console.log("Min = "+evenMin)
console.log("Max = "+evenMax)
console.log("Total = "+evenTotal)
console.log("Average = "+evenAverage)

// results of Odd Array //
console.log("Results of Odd Array")
console.log("Min = "+oddMin)
console.log("Max = "+oddMax)
console.log("Total = "+oddTotal)
console.log("Average = "+oddAverage)

// Comparison of Min, Max, Total, Average //

// Comparison of Minimum value // 
if (oddMin > evenMin){
    console.log("oddmin value greater than evenmin value")
}else if (oddMin < evenMin) {
    console.log("evenmin value greater than oddmin value")
}else ("Min value on both array are the same")

// Comparison of Maximum value //
if (oddMax > evenMax){
    console.log("oddmax value is greater than evenmax value")
}else if (oddMax < evenMax) {
    console.log("evenmax value is greater than oddmax value")
}else ("Max value on both array are the same")

// Comparison of Total Value //
if (oddTotal > evenTotal){
    console.log("oddtotal value is greater than eventotal value")
}else if (oddTotal < evenTotal) {
    console.log("eventotal value is greater than oddtotal value")
}else ("Total value on both array are the same")

// Comparison of Average Value
if (oddAverage > evenAverage){
    console.log("oddaverage value is greater than evenaverage value")
}else if (oddAverage < evenAverage) {
    console.log("evenaverage value is greater than oddaverage value")
}else ("averag value on both array are the same")
