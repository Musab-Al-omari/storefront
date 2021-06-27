import React from 'react';
import Products from './component/Products';
import Footer from './component/Footer'
import Header from './component/Header'
import Categories from './component/Categories'


function App(props) {


    return (
        <React.Fragment>
            <Header />
            <Categories/>
            <Products />
            <Footer/>
        </React.Fragment>
    );

}

export default App;