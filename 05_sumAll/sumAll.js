const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isFinite(num1) || !Number.isFinite(num2)){
        return 'ERROR';
    }
    let nums = [];
    let total = 0;
    (num1 - num2 < 0) ? nums = [num1, num2] : nums = [num2, num1];
    for (let num = nums[0]; num <= nums[1]; num++){
        total += num;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
