// global scope
var global_var = "i am a global variable";
let global_let = "i am a global var, but scoped within the let";
const global_const = "i am a global constant";

{
    // block scope
    var block_var = "i am a block-scoped variable";
    let block_let = "i am a block-scoped let";
    const block_const = "i am a block-scoped const";
    //console.log(block_let);
}

// Global scope
// console.log(global_var); // Output: "I'm a global variable"
// console.log(global_let); // Output: "I'm also global, but scoped with let"
// console.log(global_const); // Output: "I'm a global constant"

// //Block Scope
// console.log(block_var);
// console.log(block_let);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError