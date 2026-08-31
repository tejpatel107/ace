

function countVowelsInString(string) {
    // const matches = string.match(/[aeiou]/gi);
    // return matches ? matches.length : 0;
    return string.length - string.replaceAll(/[aeiou]/gi,"").length;
    
}

console.log(countVowelsInString("Vowels"));
