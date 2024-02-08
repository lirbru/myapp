import React, { Component } from 'react'
import CartPage from './pages/cartPage';

export default class home extends Component {
    constructor() {
        super();
        this.state = {
            table : [] ,
            cart : [],
            numberOfItems : 0,
            totalSum : 0,
            cartPage : false
        }
    }
    
    componentDidMount() {
        let table = JSON.parse(sessionStorage.getItem('table'));
        this.setState({table : table});
    }
    removeFromCart = (index) => {
        //console.log("remove from cart home comp", index);
        let new_cart = this.state.cart;
        const item = new_cart.splice(index, 1);
        const price = item[0][0].price;
        const tempSum = this.state.totalSum - price;
        const tempNumberOfItems = +this.state.numberOfItems;
        this.setState({...this.state, cart : new_cart, totalSum : tempSum, numberOfItems : tempNumberOfItems - 1 });
    }
    payForCart = () => {
        console.log("pay fro cart");
        const new_cart = [];
        this.setState({...this.state, cart : new_cart, totalSum : 0, numberOfItems : 0 });
        alert("Thank you for your purchase. Hope to see you again");
    }

    addToCart = (e) => {
        const tempTable = [...this.state.table];
        let tempCart = [...this.state.cart];
        let tempSum = +this.state.totalSum;
        const tempNumberOfItems = +this.state.numberOfItems;
        const id = e.target.id;
        const item = tempTable.splice(id,1);
        const price = +item[0].price;
        tempSum += price;
        tempCart.push(item);
        this.setState({...this.state, cart : tempCart, totalSum : tempSum, numberOfItems : tempNumberOfItems + 1 });
        
    }

    openCart = () => {
        this.setState({...this.state, cartPage : !this.state.cartPage});
    }
    
    render() {
        
        const items = this.state.table.map((item, index) => {
            return(
                <div className='grid-item' key={index}>
                    <img className='image-item' src={item.image} alt={item.image} ></img> <br/> <br/>
                    <div className='grid-data'>
                        Title - {item.title} <br/>
                        Desc - {item.description} < br/>
                        Price - {item.price} <br/> <br/>
                    </div>
                    <button onClick={this.addToCart} id={index}>Buy</button>

                </div>
            )
        })

        return (
            <div>
                <button className='cartBtn' onClick={this.openCart}>
                    shopping cart <span/>
                    {this.state.numberOfItems > 0? this.state.numberOfItems : null}
                </button>
                <div >
                    {this.state.cartPage? <CartPage cart={this.state.cart} 
                                            total={this.state.totalSum} 
                                            removeFunc={this.removeFromCart}
                                            payFromHome={this.payForCart} /> : null}
                </div>
               <div className='grid-container'>
                    {items}
               </div>
                
            </div>
        )
    }
}
