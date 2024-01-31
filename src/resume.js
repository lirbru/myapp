import React, { Component } from 'react'

export default class resume extends Component {

    adminPage = () => {
        this.props.history.push(`/admin`);
    }


    render() {
        return (
            <div className='resumePage'>
                <h1 >Liran Bruchim</h1>
                <a href="https://www.linkedin.com/in/liran-bruchim-045ba7135/" target="_blank" class="btn-linkedin" >linkedin</a>
                <p>Welcome to my app store</p>
                <p>For this app I used Google Cloud Project infrastructure with Git Actions for the deployment - 2</p>
                <p>In this app you can add items to your admin page and sell it in the home page</p>
                
                <p>please continue by pressing the "Admin store" button </p>
                
                <button onClick={this.adminPage} class="button-82-pushable" role="button">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                
                Admin Store
                </span>
                </button>

            </div>
        )
    }
}
