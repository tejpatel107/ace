//Task 7 - Longest Common Subsequence

function longestCommonSubsequence(text1, text2) {
    const matrix = Array.from(
        { length: text1.length + 1 },
        () => Array(text2.length + 1).fill(-1));

    for (let i = 0; i <= text1.length; i++) {
        matrix[i][0] = 0;
    }

    for (let j = 0; j <= text2.length; j++) {
        matrix[0][j] = 0;
    }

    for (let i = 1; i < text1.length + 1; i++) {
        for (let j = 1; j < text2.length + 1; j++) {
            if (text1[i-1] === text2[j-1]) {
                matrix[i][j] = 1 + matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
            }
        }
    }

    return matrix[matrix.length-1][matrix[0].length-1];
};