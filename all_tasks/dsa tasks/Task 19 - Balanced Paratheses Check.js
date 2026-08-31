

function areParanthesesBalanced(str) {
    
    const stack = []

    for (const ch of str) {

        if (ch === "(" || ch === "{" || ch === "[" || stack.length === 0) {
            stack.push(ch);
        } else if (
            (ch === ")" && stack.at(stack.length-1) ==="(") || 
            (ch === "}" && stack.at(stack.length-1) ==="{") ||
            (ch === "]" && stack.at(stack.length-1) ==="[")
        )
        {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return stack.length > 0 ? false : true;
}

console.log(areParanthesesBalanced("))(()"));
console.log(areParanthesesBalanced("))()))"));
console.log(areParanthesesBalanced("((()))()"));
console.log(areParanthesesBalanced("()()"));
console.log(areParanthesesBalanced("()()[{}]"));


