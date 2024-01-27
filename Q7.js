const calculator = {
    add: function(a,b) {
        return a+b
    },
    subtract : function(a,b) {
        if (a>b)
        return a-b
    else 
    return b-a
    },
    multiply: function(a,b) {
        return a*b
    },
    calculation : function (operation,a,b) {
        if (operation==="add"){
            return this.add(a,b)
        }
        if (operation === "subtract") {
            return this.subtract(a,b)
        }
        if (operation == "multiply") {
            return this.multiply(a,b)
        }
    }
}
const resultAdd = calculator.calculation.call(calculator,"add",2,4)
console.log(resultAdd)
const resultSubtract = calculator.calculation.call(calculator,"subtract",1,4)
console.log(resultSubtract)
const resultMultiply = calculator.calculation.call(calculator,"multiply",10,5)
console.log(resultMultiply)