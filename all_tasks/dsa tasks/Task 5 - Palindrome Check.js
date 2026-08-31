


function isStringPalindrome(string) {
    
    const parsedString = string.toLowerCase().replaceAll(" ","");
    
    let i = 0;
    let j = parsedString.length - 1;    
    while (i < j) {

        if (parsedString.charAt(i) !== parsedString.charAt(j)) {
            return false;
        }

        i++;
        j--;
    }

    return true;

}

console.log(isStringPalindrome("forgeeksskeegfor"));
console.log(isStringPalindrome("forgeeksskeegrof"));
