//Implement a method to perform basic string compression using the counts of repeated characters. 
//Input: aabcccccaaa
//Output: a2b1c5a3

//1. Loop through the string, increase the count
//2. if a character is different from a previous character, count resets to 0

function strCompression (str) {
    let output = '';
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        count++
        if(str[i] !== str[i + 1]) {
            output += str[i] + count;
            count = 0;
        }
    }
    return output;
}