// Write your solution here!
let name = "Ralph"
let cats = [
    "Milo",
    "Otis",
    "Garfield"
]
 function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const newcats =[...cats];
    newcats.push(name);
    return newcats;
}
function prependCat(name){
    const newcats =[...cats];
    newcats.unshift(name);
    return newcats;
}
function removeLastCat(name){
    const newcats =[...cats];
    newcats.pop(name);
    return newcats;
}
function removeFirstCat(name){
    const newcats =[...cats];
    newcats.shift(name);
    return newcats;
}