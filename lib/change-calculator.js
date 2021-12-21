const coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

module.exports = function (totalPayable, cashPaid) {
  let difference = cashPaid - totalPayable;
  const change = [];

  while (difference > 0) {
    for (var i = 0; i < coins.length; i++) {
      if (difference >= coins[i]) {
        change.push(coins[i]);
        difference = difference - coins[i];
        break;
      }
    }
  }

  return change;
}