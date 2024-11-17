document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    const paymentModal = document.getElementById('payment-modal');
    const cancelPaymentButton = document.getElementById('cancel-payment');

    // Add item to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-name');
            const itemPrice = parseFloat(this.getAttribute('data-price'));
            cartItems.push({ name: itemName, price: itemPrice });
            updateCart();
        });
    });

    // Update cart display
    function updateCart() {
        cartContainer.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;
            cartContainer.appendChild(itemElement);
            totalPrice += item.price;
        });

        document.getElementById('total-price').textContent = `Total: R${totalPrice.toFixed(2)}`;
        checkoutButton.disabled = cartItems.length === 0;
    }

    // Proceed to checkout
    checkoutButton.addEventListener('click', function() {
        paymentModal.classList.remove('hidden');
    });

    // Cancel payment
    cancelPaymentButton.addEventListener('click', function() {
        paymentModal.classList.add('hidden');
    });

    // Handle payment submission
    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        if (cardNumber && expiryDate && cvv) {
            alert('Payment Successful!');
            paymentModal.classList.add('hidden');
            cartItems.length = 0; // Empty cart
            updateCart();
        } else {
            alert('Please complete the payment details.');
        }
    });
});
