// Task 9 - Coin Change (Minimum Coins)

function coinChange (coins, amount) {

    if (amount === 0) {
        return 0;
    }

    const dp = new Array(amount + 1).fill(amount+1);
    dp[0] = 0;
    coins.forEach(coin => { dp[coin] = 1 });

    for (let i = 0; i < (amount+1); i++) {

        if (coins.indexOf(i) > -1) {
            continue;
        }

        let min = amount + 1;
        
        // run loop as many number of times as the denominations provied
        // for case coins = [1,2,5], no. of denominations = 3
        // for case coins = [2,6,4,7] no. of denominations = 4
        // so runniing loop each time meaning using 1 coin of that denomination;
        for (const coin of coins) {
            if (coin > i) {
                continue;
            }
            min = Math.min(1 + dp[i-coin], min);
        }

        dp[i] = min;
    }

    return dp[amount] >= (amount  + 1)? -1 : dp[amount];
}