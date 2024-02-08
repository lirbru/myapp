import React, { Component } from 'react'
import {removeFromCart} from '../home'
import Home from '../home'

export default class CartPage extends Component {

    constructor() {
        super();
    }

    pay = () => {
        console.log(this.props.cart);
        this.props.payFromHome();
    }

    removeItem = (e) => {
    //  console.log("in removeItem",e.target.id);
        this.props.removeFunc(e.target.id);
      
    }
   

    render() {
        const cart = this.props.cart;
        const total = this.props.total;
        const items = cart.map((item, index) => {
            return (
                <pre key={index}>{item[0].title}              {item[0].price}$  <button id={index} 
                onClick={this.removeItem}>remove</button>
                </pre>
            )
        })
        return (
            <div className='cartPage'>
                <div className='cartItems'>
                    {items} <br/>
                </div>
                <div className='total'>
                    <pre>Total          {total}$ </pre> <br/> <br/>
                    <button className='payBtn' onClick={this.pay}  
                    disabled={this.props.cart.length == 0}
                    >Pay</button>
                </div>
            </div>
        )
    }
}
