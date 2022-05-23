const repeatString = function(str, num) {
    let retStr = '';
    if (num < 0){
        return 'ERROR';
    }
    for (let i = 0; i < num; i++){
        retStr += str;
    }
    return retStr;
};

// Do not edit below this line
module.exports = repeatString;
