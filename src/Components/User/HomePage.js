import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import SlideArea from './SlideArea';
import Product from './Product';
import Promo from './Promo';
import Brand from './Brand';
import WidgetArea from './WidgetArea';

function HomePage(params) {
    return (
        <div>
            <Header />
            <SlideArea />
            <Promo />
            <Product />
            <Brand />
            <WidgetArea />
            <Footer />
        </div>
    )
}

export default HomePage;