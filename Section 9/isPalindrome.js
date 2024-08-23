function isPalindrome(str) {

    // Base case
    if (str.length === 0) return false;
    if (str.length === 1) return true;

    // Recursive case
    if (str[0] === str[str.length - 1]) {
        str = str.slice(1, -1);
        isPalindrome(str);
    } else {
        return false;
    }
    
    return true
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
