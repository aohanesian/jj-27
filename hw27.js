`use strict`;

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    return str === reverseString(str);
}

function operation(str, step = 0) {
    if (isPalindrome(str)) return {str, step};
    return operation(str + reverseString(str), ++step);
}

console.log(operation(`96`, 0));