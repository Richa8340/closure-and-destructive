/*** 2. You have an object representin a customer order with properties orderId, productName, and quantity.
Use destructurin to extract and print these properties.    */

const order = {
    orderId: 12345,
    productName: 'Laptop',
    quantity: 2
};

// Without destructuring
console.log("without destructing");
console.log("order id:", order.orderId);
console.log("Product name:",order.productName);
console.log("Quantity:",order.quantity);


// With destructuring
console.log("with destructing");
console.log("order id:", order.orderId);
console.log("Product name:",order.productName);
console.log("Quantity:",order.quantity);

/***output
without destructing
order id: 12345
Product name: Laptop
Quantity: 2
with destructing
order id: 12345
Product name: Laptop
Quantity: 2
 * 
 */

