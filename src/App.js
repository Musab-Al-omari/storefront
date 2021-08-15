import React, { useEffect } from 'react';
import Products from './component/Products';
import Footer from './component/Footer'
import Header from './component/Header'
import Categories from './component/Categories'
import axios from 'axios';


function App(props) {

    useEffect(() => {
        axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization:
                    'Bearer zf5OEAXCt7kL86NV3gnPH-BMLkvdXVitQDb08qgeYzmbQhblC9NMN9xVDsuY-rtbvGmQc-IIqtKMeMDp0EUem_8PZUOM4DnMAkPbDYajCLTBZ-gVaFy0OyKLrNRoYHYx',
            },
            params: { location: 'jordan' },
        }).then(data => {
            console.log(data);
        }).catch(e => {
            console.log(e);
        })

    }, [])

    return (

        <React.Fragment>
            <Header />
            <Categories />
            <Products />
            <Footer />
        </React.Fragment>

    );

}

export default App;