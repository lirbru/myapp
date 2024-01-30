import React, { Component } from 'react'

export default class resume extends Component {

    adminPage = () => {
        this.props.history.push(`/admin`);
    }


    render() {
        return (
            <div className='resumePage'>
                <h1 >Liran Bruchim</h1>
                <p>Welcome to my app store</p>
                <p>For this page I used Google Cloud Project infrastructure with Git Actions for the deployment</p>
                <p>In this app you can add items to your admin page and sell it in the home page</p>
                
                <p>please continue by pressing the "Admin store" button </p>
                
                <button onClick={this.adminPage} >Admin Store</button>
            </div>
        )
    }
}
