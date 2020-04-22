import React from 'react';
import axios from 'axios';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        //this.setCookies();
    }

    setCookies = () => {
        axios.get('/home').then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <div>Setting Cookies</div>
        );
    }
}

export default HomePage;