import React, { Component } from 'react';
import Header from './Header';
import ShopDongHo from './ShopDongHo';
import Footer from './Footer';

function DongHo(params) {
    return (
        <div>
            <Header />
            <ShopDongHo />
            <Footer />
        </div>
    )
}

export default DongHo;