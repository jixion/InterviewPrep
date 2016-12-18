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

function lateRide(n) {
    var h = Math.floor(n/60);
    var m = n%60;

    var string = h.toString() + '' + m.toString();
    var i;
    var sum = 0;
    for(i = 0; i < string.length; i++) {
        sum += parseInt(string[i]);
    }
    return sum;
}

function phoneCall(min1, min2_10, min11, s) {
    var i;
    var t = s;
    for(i = 1; t >= 0; i++) {
        if(i < 2) {
            t -= min1;
        } else if (i <= 10) {
            t -= min2_10;
        } else {
            t -= min11;
        }
    }
    return i - 2;
}

function reachNextLevel(experience, threshold, reward) {
    return experience+reward >= threshold;
}

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if(weight1 + weight2 <= maxW) {
        return value1 + value2;
    } else if (weight1 > maxW && weight2 > maxW) {
        return 0;
    } else if(weight1 > maxW) {
        return value2;
    } else if(weight2 > maxW) {
        return value1;
    } else {
        return value1 > value2 ? value1 : value2;
    }
}

function extraNumber(a, b, c) {
    return a == c ? b : (b == c ? a : c);
}
