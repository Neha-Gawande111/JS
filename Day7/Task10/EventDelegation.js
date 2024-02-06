document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [];
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Function to update the cart and cart total
    function updateCart() {
        // Clear the current cart display
        cartList.innerHTML = '';

        // Calculate and update the cart total
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;

        // Update cart items in the display
        cartItems.forEach((item) => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            
            // Add a remove button to each cart item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-from-cart');
            removeButton.addEventListener('click', function () {
                // Remove the item from the cartItems array
                const index = cartItems.indexOf(item);
                if (index !== -1) {
                    cartItems.splice(index, 1);
                    updateCart(); // Update the cart after removal
                }
            });

            cartItem.appendChild(removeButton);
            cartList.appendChild(cartItem);
        });
    }

    // Event listener for adding items to the cart
    document.querySelector('.items').addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const item = event.target.parentElement;
            const itemName = item.querySelector('h2').textContent;
            const itemPrice = parseFloat(item.querySelector('p').textContent.replace('$', ''));

            cartItems.push({ name: itemName, price: itemPrice });
            updateCart(); // Update the cart when an item is added
        }
    });

    // Event listener for removing items from the cart (using event delegation)
    cartList.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-from-cart')) {
            // The remove button was clicked, handled above in updateCart()
        }
    });
});
