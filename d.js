/** 4. Continuing the previous coding challenge, now let’s implement the add to cart feature. On calling add to
cart closure function, the object of productId, name, quantity and price should be added to the cartItem.
Note that if duplicate items with same prouductId is added, the product quantity must be incremented. Use
javascript closures to achieve the output.  */

function createCart() {
    const cartItems = [];

    function addToCart(productId, name, quantity, price) {
        const existingItem = cartItems.find(item => item.productId === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cartItems.push({ productId, name, quantity, price });
        }

        console.log('Cart Items:', cartItems);
    }

    return addToCart;
}

const addToCart = createCart();

addToCart(1, 'Laptop', 1, 1000);
addToCart(2, 'Mouse', 2, 50);
addToCart(1, 'Laptop', 3, 1000);

/** output:   Cart Items: [ { productId: 1, name: 'Laptop', quantity: 1, price: 1000 } ]
Cart Items: [
    { productId: 1, name: 'Laptop', quantity: 1, price: 1000 }, 
    { productId: 2, name: 'Mouse', quantity: 2, price: 50 }
  ]
  Cart Items: [
    { productId: 1, name: 'Laptop', quantity: 4, price: 1000 },
    { productId: 2, name: 'Mouse', quantity: 2, price: 50 }
  ] */

