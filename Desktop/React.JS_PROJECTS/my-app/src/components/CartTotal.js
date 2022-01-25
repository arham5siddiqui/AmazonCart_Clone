import React from 'react'
import './CartTotal.css'
import NumberFormat from 'react-number-format';

function CartTotal({items}) {

    const getTotalPrice = () => {
        // init total price to 0
        // loop through all the items in the cart
        // Add the price of item with the Quantity to the total price 
        // Return the total price
        let total =0;
        items.forEach((item) => {
            total += (item.price * item.quantity)
        })
        return total;
    }

    return (
        <div className="CartTotal">
            <h3>
                Subtotal ({items.length} items):
                <span className='CartTotal-price'>
                    <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
                </span>
            </h3>
            <button>
                Proceed to checkout
            </button>
        </div>
    )
}

export default CartTotal
