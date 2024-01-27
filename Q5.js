const numSet = new Set([1,2,3,4,5,6,7,8,9]) 
const numMap = new Map()
for (let key of numSet) {
    numMap.set(key,key*key)
}
console.log(numMap)
const arrNum = Array.from(numMap)
console.log(arrNum)
