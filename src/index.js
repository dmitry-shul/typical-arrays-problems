
exports.min = function min (array) {
    let i = 0;
    let minNumber;
    if (array === undefined || array.length === 0) {
        return 0;
    }
    minNumber = array[0]; 
    while (i < array.length) {
        if (array[i] <= minNumber) {
            minNumber = array[i];
        } 
        i = i + 1;
    }
        return minNumber;
}

exports.max = function max (array) {
    let i = 0;
    let maxNumber;
    if (array === undefined || array.length === 0) {
        return 0;
    }
    maxNumber = array[0];
    while (i < array.length) {
        if (array[i] >= maxNumber) {
            maxNumber = array[i];
        }
        i++;
    }
  return maxNumber;
}

exports.avg = function avg (array) {
    let i = 0;
    let avgNumber = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    }
    while (i < array.length) {
        avgNumber = avgNumber + array[i];
        i++;
    }
    avgNumber = avgNumber / array.length;
  return avgNumber;
}
