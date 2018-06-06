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

/**
 You just bought a public transit card that allows you to ride the Metro for a certain number of days.

 Here is how it works: upon first receiving the card, the system allocates you a 31-day pass, which equals the number of days in January. The second time you pay for the card, your pass is extended by 28 days, i.e. the number of days in February (note that leap years are not considered), and so on. The 13th time you extend the pass, you get 31 days again.

 You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember the number of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, and return all the options as an array sorted in increasing order.

 Example

 For lastNumberOfDays = 30, the output should be
 metroCard(lastNumberOfDays) = [31].

 There are 30 days in April, June, September and November, so the next months to consider are May, July, October or December. All of them have exactly 31 days, which means that you will definitely get a 31-days pass the next time you extend your card.
 */

function metroCard(lastNumberOfDays) {
    if(lastNumberOfDays == 31) {
        return [28, 30, 31];
    } else {
        return [31];
    }
}


/**
 Mr. Hudson is teaching a course on algorithms at computer school. He's assigning his class a project that involves a group presentation. Each presentation will happen one at a time and the groups can have as many as groupSize members.

 Based on prior experience, Mr. Hudson has a list of estimates for each of the students, representing the minimum number of minutes that a presentation will take if that student is part of the group. These time estimates are stored in an array timeEstimates (For confidentiality reasons, the students' names have been anonymized, so it's just the number of minutes each will take).

 Mr. Hudson wants to take up as little class time as possible for the whole class to give their presentations. Return the total minimum number of minutes the presentations will be expected to take if the groups are assigned in such a way that the estimated total time is minimized.

 Example

 For timeEstimates = [12, 7, 3, 6, 5, 6, 10, 3, 9, 6] and groupSize = 3, the output should be assignGroups(timeEstimates, groupSize) = 28.

 Here's one way the groups could be assigned for a minimal total time:
 example image

 Input / Output

 [execution time limit] 4 seconds (js)

 [input] array.integer timeEstimates

 An array of integers where timeEstimates[i] represents the minimum number of minutes a presentation will take if the student represented by index i is involved.

 Guaranteed constraints:
 0 ≤ timeEstimates.length ≤ 3 · 105
 0 ≤ timeEstimates[i] ≤ 108

 [input] integer groupSize

 An integer representing the maximum number of students that each group can have.

 Guaranteed constraints:
 1 ≤ groupSize ≤ 108

 [output] integer

 An integer representing the minimum total length of time (in minutes) the presentations will take.
 */

function assignGroups(t, g) {
    b = 0;
    l = t.length/g;
    t.sort((a, b)=>{return b-a});
    for(i = 0; i < l; i++) {
        b += t[0];
        t.splice(0, g);
    }
    return b;
}
