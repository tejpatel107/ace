

function transformAndTotal(orders) {
    return orders.reduce((total, order) => {
        return total + order.price * order.quantity;
    },0);
}


orders = [
    {price: 10,quantity : 2},
    {price: 5, quantity : 3}
]

console.log(transformAndTotal(orders));


