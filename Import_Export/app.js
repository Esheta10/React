/*
    Default export -> one per module 
                   -> import with any name you choose

    Named Export -> multiple per module
                 -> import with exact name
*/
const arr = [10,20,30]
export default arr; // Default export

export function add(a, b){ // Named export
    return a+b;
}

export function subtract(a,b){
    return a-b;
}