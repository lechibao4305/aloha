import React, { Component } from 'react';

function Footer(params) {
    return (
        <div className="footer">
            <div className="footer-top-area">
                <div className="zigzag-bottom" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-about-us">
                                <h2>e<span>Electronics</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero
                                  quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi
                                  iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi
                    veritatis magni at?</p>
                                <div className="footer-social">
                                    <a href="#" target="_blank"><i className="fa fa-facebook" /></a>
                                    <a href="#" target="_blank"><i className="fa fa-twitter" /></a>
                                    <a href="#" target="_blank"><i className="fa fa-youtube" /></a>
                                    <a href="#" target="_blank"><i className="fa fa-linkedin" /></a>
                                    <a href="#" target="_blank"><i className="fa fa-pinterest" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-menu">
                                <h2 className="footer-wid-title">User Navigation </h2>
                                <ul>
                                    <li><a href="#">My account</a></li>
                                    <li><a href="#">Order history</a></li>
                                    <li><a href="#">Wishlist</a></li>
                                    <li><a href="#">Vendor contact</a></li>
                                    <li><a href="#">Front page</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-menu">
                                <h2 className="footer-wid-title">Categories</h2>
                                <ul>
                                    <li><a href="#">Mobile Phone</a></li>
                                    <li><a href="#">Home accesseries</a></li>
                                    <li><a href="#">LED TV</a></li>
                                    <li><a href="#">Computer</a></li>
                                    <li><a href="#">Gadets</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-newsletter">
                                <h2 className="footer-wid-title">Newsletter</h2>
                                <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to
                    your inbox!</p>
                                <div className="newsletter-form">
                                    <form action="#">
                                        <input type="email" placeholder="Type your email" />
                                        <input type="submit" defaultValue="Subscribe" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* End footer top area */}
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="copyright">
                                <p>© 2015 eElectronics. All Rights Reserved. Coded with <i className="fa fa-heart" /> by <a href="http://wpexpand.com" target="_blank">WP Expand</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-card-icon">
                                <i className="fa fa-cc-discover" />
                                <i className="fa fa-cc-mastercard" />
                                <i className="fa fa-cc-paypal" />
                                <i className="fa fa-cc-visa" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* End footer bottom area */}
        </div>
    )
}

export default Footer;