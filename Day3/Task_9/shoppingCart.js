const shoppingCart = {
                        items: [],
    
            addItem: function(itemName, price) 
            {const item = { itemName, price };
             this.items.push(item);
            console.log(`${itemName} added to the cart. Price: ${price}`);
             },
    
            removeItem: function(itemName) 
            {
            const index = this.items.findIndex(item => item.itemName === itemName);
            if (index !== -1) {
            const removedItem = this.items.splice(index, 1)[0];
            console.log(`${removedItem.itemName} removed from the cart.`);
            } 
            else 
            {
            console.log(`${itemName} not found in the cart.`);
            }
            },
    
            calculateTotal: function() 
            {
            return this.items.reduce((total, item) => total + item.price, 0);
            },
    
            applyDiscount: function(discountPercentage) 
            {
            const total = this.calculateTotal();
            const discountAmount = (discountPercentage / 100) * total;
            const discountedTotal = total - discountAmount;
            console.log(`Applied ${discountPercentage}% discount. New total: ${discountedTotal.toFixed(2)}`);
            },
    
            checkout: function() 
            {
            const total = this.calculateTotal();
            console.log(`Total cost of items in the cart: ${total.toFixed(2)}`);
            if (total > 1000) 
            {
            this.applyDiscount(10); // Apply a 10% discount for total over $100
            }
            console.log("Thank you for shopping with us!");
            }
  };
  
  // Example usage:
  shoppingCart.addItem("Item 1", 50);
  shoppingCart.addItem("Item 2", 30);
  shoppingCart.addItem("Item 3", 25);
  shoppingCart.removeItem("Item 2");
  shoppingCart.checkout();
  