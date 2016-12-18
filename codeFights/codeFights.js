function addTwoDigits(n) {
    var string = n.toString();
    var i;
    var sum = 0;
    for(i = 0; i < string.length; i++) {
        sum += parseInt(string[i]);
    }
    return sum;
}

function largestNumber(n) {
    var i;
    var num = '';
    for(i = 0; i < n; i++) {
        num += '1';
        console.log(num);
    }
    return num * 9;
}

function candies(n, m) {
    var perN = Math.floor(m/n);
    return perN * n;
}

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols-col+1) * (nRows-row);
}

function maxMultiple(divisor, bound) {
    return Math.floor(bound/divisor)*divisor;
}

function circleOfNumbers(n, firstNumber) {
    return (n/2 + firstNumber) >= n ? (n/2 + firstNumber) - n : n/2 + firstNumber;
}