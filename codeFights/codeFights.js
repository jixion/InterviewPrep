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