const ages = [19,22,19,24,20,25,26,24,25,24]
ages.sort((a,b)=>a-b) 
console.log("sorted array: "+ages)
console.log("min age: "+ages[0])
console.log("max age: "+ages[ages.length-1])
let median = (ages[(ages.length/2)-1]+ages[ages.length/2])/2
console.log("Median age: "+median)
let sum = 0
for (i of ages) {
    sum = sum+i
}
const averageAge = sum/ages.length
console.log("Average age: "+averageAge)
const range = ages[ages.length-1]-ages[0]
console.log("Range: "+range)
const MintoAverage = Math.abs(ages[0]-averageAge)
const MaxtoAverage = Math.abs(ages[ages.length-1]-averageAge)
console.log("Min-Average: "+MintoAverage)
console.log("Max-Average: "+MaxtoAverage)
console.log((MintoAverage>MaxtoAverage) ? "Min-Average is greater" : "Max-Average is greater")