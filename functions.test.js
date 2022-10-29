const myFunctions = require('./functions')

test(`Test "returnTwo" function.`, ()=> {
    expect(myFunctions.returnTwo()).toBe(2)
})

describe (`Test "greeting" function.`, ()=> {
   test(`Test name = Christina`, () => {
    expect(myFunctions.greeting("Christina")).toBe("Hello Christina.")
    })
    test(`Test name = James`,()=> {
    expect(myFunctions.greeting("James")).toBe("Hello James.")  
    })
    test(`Test name = Jill`,()=> {
    expect(myFunctions.greeting("Jill")).toBe("Hello Jill.")  
    })
})

describe(`Test "math functions"`, () => {
    test(`Test "add"`, ()=> {
    expect(myFunctions.add(1, 2)).toEqual(3)
    })
    test(`Test "multiply"`, ()=> {
    expect(myFunctions.multiply(5, 9)).toEqual(45)
    })
    test(`Test "divide"`, ()=> {
    expect(myFunctions.divide(45, 9)).toEqual(5)
    })
    test(`Test "subtract"`, ()=> {
    expect(myFunctions.subtract(5, 9)).toEqual(-4)
    })
} )
