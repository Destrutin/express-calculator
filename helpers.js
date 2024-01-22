function mean(nums) {
    let total = 0;

    for (let n of nums) {
        total += n;
    }
    return total / nums.length;
}

function median(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });

    let median;
    if (nums.length % 2 === 1) {
        median = nums[Math.floor(nums.length / 2)];
    } else {
        let mid1 = nums[nums.length / 2 - 1];
        let mid2 = nums[nums.length / 2];
        median = (mid1 + mid2) / 2;
    }
    return median;
}

function mode(nums) {
    let count = {};
    for (let n of nums) {
        if (count[n]) {
            count[n] += 1;
        } else {
            count[n] = 1;
        }
    }

    let mode;
    let numFreq = 0;

    for (let num in count) {
        if (count[num] > numFreq || (count[num] === numFreq && num < mode)) {
            mode = [num];
            numFreq = count[num];
        } 
    }
    
    return mode != null ? parseInt(mode) : null;
}

module.exports = {
    mean,
    median,
    mode
}