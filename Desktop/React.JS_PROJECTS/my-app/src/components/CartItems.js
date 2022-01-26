import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'


function CartItems({items, setCartItems}) {

    const deleteItem = (indexToDelete) => {
        // pass the function from CartItems to CartItem component
        // Pass the index of the item to know which item to delete
        // Use the filter() function in es6 to filter out item based on index
        // Update the items using setCartItems() function

        // ** Filter out the items where the item index does not equal to the selected item index
        const newitems= items.filter((value, index)=>{
            return index !== indexToDelete
        })
        setCartItems(newitems)
    }

    const changeItemQuantity = (e, index) => {
        // when we select a quantity on item, we pass it in here
        // Pass in the index
        // Using the index we need to change the quantity to the selected one from the selected option
        // update the items state
        
        // **RULE: DO NOT UPDATE THE STATE WITHOUT setter Function (Here the setter function is setCartItems(newItems). )
        const newItems = [...items];    // creates a CLONE(Deep copy) 
        items[index].quantity = e.target.value;
        setCartItems(newItems);    // setter function 
    }

    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">
                {items.map((item, index) =>
                <CartItem
                index={index}
                item={item}
                key={index}
                changeItemQuantity={changeItemQuantity}
                deleteItem={deleteItem}
                />
                )}
            </div>
        </div>
    )
}

export default CartItems