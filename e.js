/**  5. Continuing the previous coding challenge, now let’s implement the remove item from cart feature. On
calling the remove item closure function, the specified productId item must be removed from cartItems
array.Use javascript closures to achieve the output. */


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

    function removeFromCart(productId) {
        const index = cartItems.findIndex(item => item.productId === productId);

        if (index !== -1) {
            cartItems.splice(index, 1);
        }

        console.log('Cart Items:', cartItems);
    }

    return { addToCart, removeFromCart };
}

const { addToCart, removeFromCart } = createCart();

addToCart(1, 'Laptop', 1, 1000);
addToCart(2, 'Mouse', 2, 50);
addToCart(1, 'Laptop', 3, 1000);
removeFromCart(2);  


/** output
 * Cart Items: [ { productId: 1, name: 'Laptop', quantity: 1, price: 1000 } ]
Cart Items: [
  { productId: 1, name: 'Laptop', quantity: 1, price:
 1000 },
  { productId: 2, name: 'Mouse', quantity: 2, price: 50 }
]
Cart Items: [
  { productId: 1, name: 'Laptop', quantity: 4, price:
 1000 },
  { productId: 2, name: 'Mouse', quantity: 2, price: 50 }
]
Cart Items: [ { productId: 1, name: 'Laptop', quantity: 4, price: 1000 } ]
 */
