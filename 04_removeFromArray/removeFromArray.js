const removeFromArray = function(myArray, ...args) {
    for (let arg of args){
        for (let i = 0; i < myArray.length; i++){
            if(myArray[i] === arg){
                myArray.splice(i, 1);
                break;
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
