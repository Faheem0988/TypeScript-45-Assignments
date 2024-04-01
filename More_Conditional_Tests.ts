

// Equality and Inequality Test 1
console.log("Equality test with string; ", "Apple" === "Apple") ;
// Equality and Inequality Test 2
console.log("Inequality test with string; ", ("Apple" as string) != "orange") ;


// Tests using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello") ;


// Numerical tests involving equality 
console.log("Equality test with number: ", 30 === 30) ;
// Numerical tests involving inequality,
console.log("Inequality test with number: ", (30 as number) != 35) ;


// greater than test,
console.log("Greater then test: ", 15 > 10) ;
// less than test,
console.log("Less then test: ", 10 < 15) ;


// greater than or equal to,
console.log("Greater then or equal to test: ", 15 >= 15) ;
// less than or equal to,
console.log("less than or equal to test: ", 5 <= 10 ) ;

// Tests using "and" operators
console.log("And opreator test: ", 5===5 && 10 > 5) ;
// Tests using "or" operators
console.log("Or opreator test: ", 5===5 || false ) ;

// Test whether an item is in a array
const fruits :string[] = ['Nashpati', 'Banana', 'Amrood' , ] ;
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati")); 

// Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));

