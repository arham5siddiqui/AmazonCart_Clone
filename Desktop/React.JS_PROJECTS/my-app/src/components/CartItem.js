import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image"> 
                <img src='https://media.wired.com/photos/5e9f56f143e5800008514457/1:1/w_1277,h_1277,c_limit/Gear-Feature-Apple_new-iphone-se-white_04152020.jpg'></img>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>Apple iPhone SE</h2>
                </div>
                <div className='info-stock'></div>
                <div className="item-actions">
                    <div className='item-quantity'>
                        In Stock
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div className='item-delete'>
                        Delete
                    </div>
                </div>
            </div>
            <div className='CartItem-price'>
                $750
            </div>
        </div>
    )
}

export default CartItem
