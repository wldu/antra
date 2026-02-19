/*
    1. Write a JavaScript function that reverse a number. 
    Example x = 32243;
    Expected Output: 34223 
    Assuming we're reversing integers, not the float numbers
*/
function reverseNumber(num) {
    if(num > -10 && num < 10) return num;
    let sign = 1;
    if(num < 0) {
        num = -num;
        sign = -1;
    }
    let ans = 0, rem = 0;
    while(num > 0) {
        ans = ans * 10 + num % 10;
        num = Math.trunc(num / 10);
    }
    return sign * ans;
}

// test reverseNumber
// let n = -5024;
// console.log(n, reverseNumber(n));
// n = 1524;
// console.log(n, reverseNumber(n));
// n = -800;
// console.log(n, reverseNumber(n));

/*
    2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
    A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
    ---- Assuming that we ignore letter cases and spaces
*/
function isPalindrome(str) {
    str = str.replace(/\s+/g, "");
    if(str.length < 2) return true;
    str = str.toLowerCase();
    let i = 0, j = str.length - 1;
    while(i < j) {
        if(str.charAt(i) != str.charAt(j)) return false;
        i++;
        j--;
    }
    return true;
}
// test isPalindrome
// let s = 'Madam';
// console.log(s, isPalindrome(s));
// s = 'NurSes run '
// console.log(s, isPalindrome(s));


/*
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g 
*/
function getCombinations(str) {
    if(str.length < 2) return str;
    let ans = [];
    let length = str.length;
    for(let i = 0, j; i < length; i++) {
        for(j = i + 1; j < length; j++) {
            ans.push(str.slice(i, j));
        }
        ans.push(str.slice(i, j));
    }
    return ans.join(",")
}
// test  getCombinations
// let ss = 'dog';
// console.log(ss, getCombinations(ss));
// ss = 'functions';
// console.log(ss, getCombinations(ss));


/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
---- also assume that only lowercase letters appear in the string
*/
function reorderLetters(str) {
    if(str.length < 2) return str;
    let cnts = [];
    let end = 'z'.charCodeAt(0);
    for(let i = 0; i <= end; i++) cnts.push(0);
    for(let c of str) {
        cnts[c.charCodeAt(0)]++;
    }
    let ans = '';
    for(let i = 97; i <= end; i++) {
        while(cnts[i]-- > 0){
            ans += String.fromCharCode(i);
        }
    }
    return ans;
}

// test reorderLetters
// let str = 'webmaster';
// console.log(str, reorderLetters(str));

/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
*/
function titleSentence(str) {
    let length = str.length;
    let i = 0;
    while(i < length && str.charAt(i) == ' ') i++;
    if(i == length) return str;
    let letters = str.split('');
    for(; i < length; i++) {
        letters[i] = letters[i].toUpperCase();
        while(i < length && letters[i] != ' ') i++;
    }
    return letters.join('');
}

// test titleSentence
// str = 'the quick brown fox';
// console.log(str, "; ", titleSentence(str));


/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/
function getLongestWord(str) {
    let words = str.trim().split(' ');
    let index = 0, max = 0, length = words.length;
    for(let i = 0; i < length; i++) {
        if(max < words[i].length) {
            max = words[i].length;
            index = i;
        }
    }
    return words[index];
}

// test getLongestWord
// str = 'Web Development Tutorial';
// console.log(str, getLongestWord(str));


/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/
function countVowels(str) {
    const vowels = new Set(['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']);
    let ans = 0;
    for(let c of str) {
        if(vowels.has(c)) ans++;
    }
    return ans;
}

// test countVowels
// let str = 'The quick brown fox' ;
// console.log(str, countVowels(str));


/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
function isPrime(num) {
    if(num < 2) return false;
    for(let i = 2; i * i <= num; i++) {
        if(num % i == 0) return false;
    }
    return true;
}

// test isPrime
// for(let i = 1; i < 100; i++) {
//     if(isPrime(i)) {
//         console.log(i);
//     }
// }


/*
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/
function getType(arg) {
    let typeSet = new Set(['object', 'boolean', 'function', 'number', 'string', 'undefined']);
    let type = typeof(arg);
    if(typeSet.has(type)) return type; 
}

// test getType
let a;
let types = [{}, true, function(){}, 5, 'string', a];
for(let type of types) {
    console.log(type, getType(type));
}


/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
*/
function getIdentityMatrix(n) {
    let ans = []
    for(let i = 0; i < n; i++) {
        ans[i] = new Array(n).fill(0);
    }
    for(let i = 0; i < n; i++) {
        ans[i][i] = 1;
    }
    return ans;
}

// test getIdentityMatrix
// for(let i = 1; i < 10; i++) {
//     console.log(i, getIdentityMatrix(i));
// }


/*
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 
*/
function getSecondLowAndHigh(arr) {
    if(arr.length < 2) return [-Infinity, Infinity];  // only one number, the second low and the second high does not exist
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
}

// test getSecondLowAndHigh
// let arr = [1,2,3,4,5]
// for(let i = 0; i < 6; i++) {
//     arr.sort(() => Math.random() - 0.5);
//     console.log(arr);
//     console.log(getSecondLowAndHigh(arr));
// }


/*
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/
function isPerfectNumber(num) {
    if(num < 6) return false;
    let sum = 0, mid = Math.floor(num / 2);
    for(let i = 1; i <= mid; i++) {
        if(num % i == 0) sum += i;
    }
    return sum == num;
}

// test isPerfectNumber
// for(let i = -100; i < 10000; i++) {
//     if(isPerfectNumber(i)) console.log(i);
// }


/*
13. Write a JavaScript function to compute the factors of a positive integer. 
*/
function factorization(num) {
    if(num == 1) return [1];
    let ans = new Set();
    let mid = Math.floor(num / 2);
    for(let i = 1; i <= mid; i++) {
        if(num % i == 0) {
            ans.add(i);
            ans.add(num / i);
        }
    } 
    return ans;
}

// test factorization
// for(let i = 1; i < 20; i++) {
//     console.log(i, factorization(i));
// }


/*
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/
function amountTocoins(amount, coins) {
    let ans = [];
    coins.sort((a, b) => b - a); // make sure coins are ordered reversely
    let i = 0, count = 0;
    while(amount > 0 && i < coins.length) {
        if(amount >= coins[i]) {
            count = Math.floor(amount / coins[i]);
            while(count > 0) {
                ans.push(coins[i]);
                count--;
                console.log(coins[i]);
            }
            amount %= coins[i];
        }
        i++
    }
    return ans;
}

// test amountTocoins
// let coins = [25, 10, 5, 2, 1];
// console.log(46, amountTocoins(46, coins))
// for(let i = 45; i <= 100; i++) {
//     console.log(i);
//     console.log(i, amountTocoins(i, coins))
// }

/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
Accept b and n from the user and display the result. 
*/
function getPow(b, n) {
    if(b == 0 || n == 1) return b;
    if(n == 0) return 1;
    if(n < 0) {
        b = 1 / b;
        n = -n;
    }
    let ans = 1n, p = 1n;
    while(n > 0) {
        if((n & 1) == 1) ans = ans * BigInt(b);
        b = b * b;
        n >>= 1;
    }
    return ans;
}

// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 10; j++) {
//         console.log(i, j, getPow(i, j));
//     }
// }


/*
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/
function getUniqueLetters(str) {
    let set = new Set();
    let ans = '';
    for(let c of str) {
        if(!set.has(c)) {
            ans = ans + c;
            set.add(c);
        }
    }
    return ans;
}

// getUniqueLetters
// let str = "thequickbrownfoxjumpsoverthelazydog";
// let ans = getUniqueLetters(str);
// console.log(ans);
// console.log(ans == 'thequickbrownfxjmpsvlazydg');


/*
17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
*/
function getLetterCount(str) {
    let ans = {};
    for(let c of str) {
        if(ans[c]) {
            ans[c] = ans[c] + 1; 
        } else {
            ans[c] = 1;
        }
    }
    return ans;
}

// test getLetterCount
// let str = 'asdfjklasdfjkluiop'
// console.log(getLetterCount(str));

/*
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
------ Assuming that the input array is sorted
------ if found, the index of the element that equals to the desired value will be returned
------ if not found, -1 will be returned, meaning the desired value does not exist in the arr
*/
function binarySearch(arr, target) {
    let i = 0, j = arr.length - 1, mid;
    while(i <= j) {
        mid = Math.floor((i + j)>>1);
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return -1;
}

// test binarySearch
// let arr = [0,1,2,3,4,5,6,7,8,9]
// for(let i = 0; i < 11; i++) {
//     console.log(i, binarySearch(arr, i));
// }


/*
19. Write a JavaScript function that returns array elements larger than a number.
*/
function getLargerElements(arr, num) {
    let ans = [];
    for(let e of arr) {
        if(e > num) ans.push(e);
    }
    return ans;
}

// test getLargerElements
// let arr = [0,1,2,3,4,5,6,7,8,9]
// for(let i = 0; i < 11; i++) {
//     console.log(i, getLargerElements(arr, i));
// }


/*
20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 
*/
function generateId(length) {
    let ori = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let end = ori.length + 1;
    let ans = '';
    for(let i = 0; i < length; i++) {
        let cur = Math.floor(Math.random() * end);
        ans = ans + ori.charAt(cur);
    }
    return ans;
}

// test generateId
for(let i = 0; i < 10; i++) {
    let cur = []
    for(let j = 1; j < 10; j++) {
        cur.push(generateId(8));
    }
    console.log(cur);
}


/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/
function getCombinationFixLength(arr, n) {
    if(arr.length <= n) return [arr];
    let ans = [], path = [];
    generateCombinations(arr, 0, n, path, ans);
    return ans;
}
function generateCombinations(arr, i, n, path, ans) {
    if(n == 0) {
        ans.push([...path]);
        return ;
    }
    if(i >= arr.length) return ;
    // not enough elements left, cutoff
    if(i + n > arr.length) return ;
    // arr[i] not selected
    generateCombinations(arr, i + 1, n, path, ans);
    // console.log(path);
    // arr[i] selected 
    path.push(arr[i]);
    generateCombinations(arr, i + 1, n - 1, path, ans);
    path.pop();
}

// test getCombinationFixLength
// let arr = [1, 2, 3], n = 2;
// console.log(arr, n);
// console.log(getCombinationFixLength(arr, n));
// arr = [1, 2, 3, 4, 5, 6];
// n = 3;
// console.log(arr, n);
// console.log(getCombinationFixLength(arr, n));

/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 
*/
function countOccurrence(str, pattern) {
    if(str.length < pattern.length) return 0;
    let i = -1, length = str.length, ans = 0;
    while(i < length) {
        i = str.indexOf(pattern, i + 1, length);
        if(i != -1) ans++;
        else break;
    }
    return ans;
}

// test countOccurrence
// console.log(countOccurrence('microsoft.com', 'o'));

/*
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
*/
function getFirstRepeat(str) {
    let map = {};
    for(let c of str) {
        if(map[c]) map[c] = map[c] + 1;
        else map[c] = 1;
    }
    for(let c of str) {
        if(map[c] == 1) return c;
    }
}

// test getFirstRepeat
// console.log(getFirstRepeat('abacddbec'));


/*
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
function bubbleSort(arr) {
    if(arr.length < 2) return arr;
    let end = arr.length - 1;
    for(let i = end; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] < arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    function swap(arr, i, j) {
        let cur = arr[i];
        arr[i] = arr[j];
        arr[j] = cur;
    }
    return arr;
}

// test bubbleSort
// let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
// console.log(bubbleSort(arr));



/*
25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/
function getLongestCountryName(countries) {
    let ans = '';
    for(let s of countries) {
        if(s.length > ans.length) {
            ans = s;
        }
    }
    return ans;
}

// test getLongestCountryName
// let countries = ["Australia", "Germany", "United States of America"];
// console.log(getLongestCountryName(countries));


/*
26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
*/
function getLongestSubstring(str) {
    let length = str.length;
    if(length < 2) return length;
    let map = {};
    let i = 0, j = 0, cur = 0, max = 0;
    // sliding window
    while(j < length) {
        let c = str.charAt(j++);
        if(map[c]) map[c] = map[c] + 1;
        else map[c] = 1;
        while(map[c] > 1) {
            map[str.charAt(i++)]--;
        }
        max = Math.max(max, j - i)
    }
    return max;
}

// test getLongestSubstring
// let s = "abcabcbb";
// console.log(s, getLongestSubstring(s));
// s = "bbbbb";
// console.log(s, getLongestSubstring(s));
// s = "pwwkew";
// console.log(s, getLongestSubstring(s));



/*
27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem 
is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. 
For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is 
not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length 
greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that 
are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one 
substring or returning the maximum length of a palindromic substring.
*/
// Manacher algorithm
// return one of the longest palindrome
function getLongestPalindrome(s) {
    let length = s.length;
    if(length < 2) return s;
    length = (length<<1) + 1;
    let ms = getManacherCharArray(s, length);
    let p = new Array(length).fill(0);
    let maxLen = 0, end = 0;
    for(let i = 0, c = 0, r = 0, len; i < length; i++) {
        len = r > i ? Math.min(p[c * 2 - i], r - i) : 1;
        while(i + len < length && i - len >= 0 && ms[i + len] == ms[i - len]) len++;
        if(i + len > r) {
            r = i + len;
            c = i;
        }
        p[i] = len;
        if(len > maxLen) {
            maxLen = len - 1;
            end = (i + len - 1) / 2;
        }
    }
    return s.substring(end - maxLen, end);
}
function getManacherCharArray(s, length) {
    let ss = new Array(length).fill(0);
    for(let i = 0, j = 0; i < length; i++) {
        ss[i] = (i&1) == 1 ? s.charAt(j++) : '#';
    }
    return ss;
}

// test getLongestPalindrome
// s = 'bananas';
// console.log(s, getLongestPalindrome(s));
// s = 'abracadabra';
// console.log(s, getLongestPalindrome(s));
// s = 'bananas';
// console.log(s, getLongestPalindrome(s));
// s = 'babad';
// console.log(s, getLongestPalindrome(s));

/*
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/
function foo(fn) {
    fn();
}

function bar() {
    console.log("bar passed as parameter");
}

// test foo
// foo(bar);


/*
29. Write a JavaScript function to get the function name. 
*/
function getFunctionName(fn) {
    return fn.name;
}

// test getFunctionName
// console.log(getFunctionName(getFunctionName));
// console.log(getFunctionName(bar));
// console.log(getFunctionName(foo));
//console.log(getFunctionName(bubbleSort));





