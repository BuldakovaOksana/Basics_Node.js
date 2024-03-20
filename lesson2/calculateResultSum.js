const np = require('number-precision');


function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchases) => np.plus(acc, purchases), 0)

    total = np.times(total, discount) 
    return total
}

module.exports = { calculateResultSum }