// Task 1 - Longest Substring Without Repeating Characters


function longestSubstringWithoutRepeatingCharacters() {

    const len = s.length;

    if (len === 1) {
        return len;
    }

    let seen = "";
    let l = 0;
    let r = 0;
    let maxLen = 0;

    while (r < len) {

        if (seen.indexOf(s[r]) > -1) {
            l = seen.indexOf(s[r]) + 1;
            seen = seen.slice(l, r);
        }
        seen += s[r];
        maxLen = Math.max(seen.length, maxLen);
        r += 1;
    }

    return maxLen;

}