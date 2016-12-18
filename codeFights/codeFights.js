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

/**
 Given integers a and b, determine whether the following pseudocode results in an infinite loop

 while a is not equal to b do
 increase a by 1
 decrease b by 1
 Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

 Example

 For a = 2 and b = 6, the output should be
 isInfiniteProcess(a, b) = false;
 For a = 2 and b = 3, the output should be
 isInfiniteProcess(a, b) = true.
 */

function isInfiniteProcess(a, b) {
    return a > b ? true : Math.abs(a - b) % 2 != 0 ;
}

/**
 Consider an arithmetic expression of the form A#B=C. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

 Example

 For A = 2, B = 3 and C = 5, the output should be
 arithmeticExpression(A, B, C) = true.

 We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.

 For A = 8, B = 2 and C = 4, the output should be
 arithmeticExpression(A, B, C) = true.

 We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.

 For A = 8, B = 3 and C = 2, the output should be
 arithmeticExpression(A, B, C) = false.

 8 + 3 = 11 ≠ 2;
 8 - 3 = 5 ≠ 2;
 8 * 3 = 24 ≠ 2;
 8 / 3 = 2.(6) ≠ 2.
 So the answer is false.
 */

function arithmeticExpression(A, B, C) {
    return (A+B==C) || (A-B==C) || (A*B==C) || (A/B==C);
}

/**
 In tennis, a set is finished when one of the players wins 6 games and the other one wins less than 5, or, if both players win at least 5 games, until one of the players win 7 games.

 Determine if it is possible for a tennis set to be finished with the score score1 : score2.

 Example

 For score1 = 3 and score2 = 6, the output should be
 tennisSet(score1, score2) = true;
 For score1 = 8 and score2 = 5, the output should be
 tennisSet(score1, score2) = false;
 For score1 = 6 and score2 = 5, the output should be
 tennisSet(score1, score2) = false.

 */

function tennisSet(score1, score2) {
    //if one is 5 and the other is less than 5
    //if one is 7 and the other is > 5
    if (score1 != score2 && score1 <= 7 && score2 <= 7) {
        // we are not equal
        // we are not greater than 7
        if (score1 < 5 && score2 == 6) {
            //5 and less than 5
            return true;
        } else if (score2 < 5 && score1 == 6) {
            //5 and less than 5
            return true;
        } else if (score1 < 7 && score2 == 7 && score1 >= 5) {
            return true;
        } else if (score2 < 7 && score1 == 7 && score2 >= 5) {
            return true;
        }
    }
    return false;
}

/**
 Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

 Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

 A person contradicts Mary's belief if one of the following statements is true:

 they are young and beautiful but not loved;
 they are loved but not young or not beautiful.
 Example

 For young = true, beautiful = true and loved = true, the output should be
 willYou(young, beautiful, loved) = false.

 Young and beautiful people are loved according to Mary's belief.

 For young = true, beautiful = false and loved = true, the output should be
 willYou(young, beautiful, loved) = true.

 Mary doesn't believe that not beautiful people can be loved.
 */

function willYou(young, beautiful, loved) {
    // return conflicts == true
    if (beautiful && young && !loved) {
        return true;
    } else if(loved && !(beautiful && young)) {
        return true;
    }
    return false;
}