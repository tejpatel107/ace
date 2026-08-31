

function areTwoStringsAnagram(str1, str2) {
    
    if (str1.length !== str2.length) {
        return false;
    }

    const map = new Map();
    const map1 = new Map();
    for (const ch of str1) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (const ch of str2) {
        if (map.get(ch)) {
            map.set(ch, map.get(ch) - 1);
            if (map.get(ch) === 0) {
                map.delete(ch);
            }
        } else {
            return false;
        }
    }
    return map.size === 0;

}

console.log(areTwoStringsAnagram("Helllloooo", "Hololelolo"));
console.log(areTwoStringsAnagram("Hello", "olleH"));
console.log(areTwoStringsAnagram("Hello", "oleH"));
console.log(areTwoStringsAnagram("Hellllooooo", "Hololelolo"));

console.log(areTwoStringsAnagram("xyz", "abc"));
