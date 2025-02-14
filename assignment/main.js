
// task 4
function greet(user) {
    console.log(`Hello ${user}`);
}


greet("george");
greet("nick");

// task 5
function reverse(str) {
    let reversed = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];

    }

    return reversed;
}

console.log(reverse("hello"));

console.log("task 10");
// the function needs a return statement to give us the value;
function foo(x) {


    return x * 2;
}

let x = 7;
x = foo(x);
console.log(x);

// task11 

function bar(y = 8) {
   return y += 1;
}

let y = bar()
console.log(y)

function fo() {
   return y =  bar() * 2 ;
     
}

y = fo()

console.log(y)

 


  y = 7;
fo(y);
console.log(y); // x should change!


console.log("task12");  
// ????
function fooo(z) {
 
    if (z > 5) {
        return z;
    } else {
        return z + fooo(z + 1);
    }
    
}


fooo(2);









