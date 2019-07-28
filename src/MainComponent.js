import React from 'react';
import smallicon from './images/smallicon.png';
import blogbg from './images/blogbg.jpg';
import sliderbg from './images/sliderbg.jpeg';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

export default function mainComponent() {
    return (
        <>
            <section className="services-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="icon-box">
                                <div className="icon"><img src={smallicon}/></div>
                                <div className="icon_text">
                                    <h5>Travel Everywhere</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                      has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="icon-box">
                                <div className="icon"><img src={smallicon}/></div>
                                <div className="icon_text">
                                    <h5>Travel Everywhere</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                      has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="icon-box">
                                <div className="icon"><img src={smallicon} /></div>
                                <div className="icon_text">
                                    <h5>Travel Everywhere</h5>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                      has been the industry's standard dummy text ever since the 1500s, when an unknown
                      printer took a galley.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="popular-accomodation-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-title">Browse from our popular accomodation</h3>
                            <div className="swiper-container package custom-arrow">
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="swiper-container package ">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="packageinfo">
                                        <div className="img-box">
                                            <img src={blogbg} alt="" />
                                            <a className="wishlist"><i className="fa fa-heart-o" /></a>
                                        </div>
                                        <h5 className="packagetitle">Private bedroom central house</h5>
                                        <h6 className="cityinfo">Thailand, bangkok</h6>
                                        <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                        <div className="price-section">
                                            <div className="priceinfo">
                                                <p>From</p>
                                                <h5>$37 <span>/ per night</span></h5>
                                            </div>
                                            <a href="#." className="viewbtn">View</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="packageinfo">
                                        <div className="img-box">
                                            <img src={blogbg} alt="" />
                                            <a className="wishlist"><i className="fa fa-heart-o" /></a>
                                        </div>
                                        <h5 className="packagetitle">Private bedroom central house</h5>
                                        <h6 className="cityinfo">Thailand, bangkok</h6>
                                        <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                        <div className="price-section">
                                            <div className="priceinfo">
                                                <p>From</p>
                                                <h5>$37 <span>/ per night</span></h5>
                                            </div>
                                            <a href="#." className="viewbtn">View</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="packageinfo">
                                        <div className="img-box">
                                            <img src={blogbg} alt="" />
                                            <a className="wishlist"><i className="fa fa-heart-o" /></a>
                                        </div>
                                        <h5 className="packagetitle">Private bedroom central house</h5>
                                        <h6 className="cityinfo">Thailand, bangkok</h6>
                                        <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                        <div className="price-section">
                                            <div className="priceinfo">
                                                <p>From</p>
                                                <h5>$37 <span>/ per night</span></h5>
                                            </div>
                                            <a href="#." className="viewbtn">View</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="packageinfo">
                                        <div className="img-box">
                                            <img src={blogbg} alt="" />
                                            <a className="wishlist"><i className="fa fa-heart-o" /></a>
                                        </div>
                                        <h5 className="packagetitle">Private bedroom central house</h5>
                                        <h6 className="cityinfo">Thailand, bangkok</h6>
                                        <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                        <div className="price-section">
                                            <div className="priceinfo">
                                                <p>From</p>
                                                <h5>$37 <span>/ per night</span></h5>
                                            </div>
                                            <a href="#." className="viewbtn">View</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="packageinfo">
                                        <div className="img-box">
                                            <img src={blogbg} alt="" />
                                            <a className="wishlist"><i className="fa fa-heart-o" /></a>
                                        </div>
                                        <h5 className="packagetitle">Private bedroom central house</h5>
                                        <h6 className="cityinfo">Thailand, bangkok</h6>
                                        <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                        <div className="price-section">
                                            <div className="priceinfo">
                                                <p>From</p>
                                                <h5>$37 <span>/ per night</span></h5>
                                            </div>
                                            <a href="#." className="viewbtn">View</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="packageinfo">
                                        <div className="img-box">
                                            <img src={blogbg} alt="" />
                                            <a className="wishlist"><i className="fa fa-heart-o" /></a>
                                        </div>
                                        <h5 className="packagetitle">Private bedroom central house</h5>
                                        <h6 className="cityinfo">Thailand, bangkok</h6>
                                        <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                        <div className="price-section">
                                            <div className="priceinfo">
                                                <p>From</p>
                                                <h5>$37 <span>/ per night</span></h5>
                                            </div>
                                            <a href="#." className="viewbtn">View</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="packageinfo">
                                        <div className="img-box">
                                            <img src={blogbg}  alt="" />
                                            <a className="wishlist"><i className="fa fa-heart-o" /></a>
                                        </div>
                                        <h5 className="packagetitle">Private bedroom central house</h5>
                                        <h6 className="cityinfo">Thailand, bangkok</h6>
                                        <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                        <div className="price-section">
                                            <div className="priceinfo">
                                                <p>From</p>
                                                <h5>$37 <span>/ per night</span></h5>
                                            </div>
                                            <a href="#." className="viewbtn">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="other-places-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="center-title">Other top places to visit</h3>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-8">
                            <ul className="top-places-list">
                                <li><a href="#.">Afghanistan</a></li>
                                <li><a href="#.">Albania</a></li>
                                <li><a href="#.">Algeria</a></li>
                                <li><a href="#.">Andorra</a></li>
                                <li><a href="#.">Angola</a></li>
                                <li><a href="#.">Antigua</a></li>
                                <li><a href="#.">Argentina</a></li>
                                <li><a href="#.">Armenia</a></li>
                                <li><a href="#.">Australia</a></li>
                                <li><a href="#.">Azerbaijan</a></li>
                                <li><a href="#.">Bahamas</a></li>
                                <li><a href="#.">Bahrain</a></li>
                                <li><a href="#.">Bangladesh</a></li>
                                <li><a href="#.">Barbados</a></li>
                                <li><a href="#.">Belarus</a></li>
                                <li><a href="#.">Belgium</a></li>
                                <li><a href="#.">Belize</a></li>
                                <li><a href="#.">Benin</a></li>
                                <li><a href="#.">Bhutan</a></li>
                                <li><a href="#.">Bolivia</a></li>
                                <li><a href="#.">london</a></li>
                                <li><a href="#.">london</a></li>
                                <li><a href="#.">london</a></li>
                                <li><a href="#.">london</a></li>
                                <li><a href="#.">london</a></li>
                                <li><a href="#.">london</a></li>
                                <li><a href="#.">Antigua</a></li>
                                <li><a href="#.">Argentina</a></li>
                                <li><a href="#.">Armenia</a></li>
                                <li><a href="#.">Australia</a></li>
                                <li><a href="#.">Azerbaijan</a></li>
                                <li><a href="#.">Bahamas</a></li>
                                <li><a href="#.">Bahrain</a></li>
                                <li><a href="#.">Bangladesh</a></li>
                                <li><a href="#.">Barbados</a></li>
                                <li><a href="#.">Belarus</a></li>
                                <li><a href="#.">Belgium</a></li>
                                <li><a href="#.">Belize</a></li>
                                <li><a href="#.">Benin</a></li>
                                <li><a href="#.">Bhutan</a></li>
                                <li><a href="#.">Bolivia</a></li>
                                <li><a href="#.">Australia</a></li>
                                <li><a href="#.">Azerbaijan</a></li>
                                <li><a href="#.">Bahamas</a></li>
                                <li><a href="#.">Bahrain</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="resort-section">
                <div className="container">
                    <div className="row row justify-content-md-center">
                        <div className="col col-10">
                            <div className="swiper-container resort ">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="resort-wrapper">
                                            <div className="resort-image">
                                                <img src={sliderbg} />
                                            </div>
                                            <div className="resort-info">
                                                <h5 className="resorttitle">Mordern Luxury wizard</h5>
                                                <h6 className="cityinfo">Thailand, bangkok</h6>
                                                <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                                <p className="resortdesc">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                  ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis
                                                  at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac,
                            tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                <div className="price-section">
                                                    <div className="priceinfo">
                                                        <p>From</p>
                                                        <h5>$37 <span>/ per night</span></h5>
                                                    </div>
                                                    <a href="#." className="viewbtn">book online</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="resort-wrapper">
                                            <div className="resort-image">
                                                <img src={sliderbg} />
                                            </div>
                                            <div className="resort-info">
                                                <h5 className="resorttitle">Mordern Luxury wizard2</h5>
                                                <h6 className="cityinfo">Thailand, bangkok</h6>
                                                <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                                <p className="resortdesc">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                  ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis
                                                  at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac,
                            tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                <div className="price-section">
                                                    <div className="priceinfo">
                                                        <p>From</p>
                                                        <h5>$37 <span>/ per night</span></h5>
                                                    </div>
                                                    <a href="#." className="viewbtn">book online</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="resort-wrapper">
                                            <div className="resort-image">
                                                <img src={sliderbg} />
                                            </div>
                                            <div className="resort-info">
                                                <h5 className="resorttitle">Mordern Luxury wizard3</h5>
                                                <h6 className="cityinfo">Thailand, bangkok</h6>
                                                <p className="hotelinfo">1 BR 1BA Sleeps 2 518 sq.ft</p>
                                                <p className="resortdesc">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                  ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis
                                                  at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac,
                            tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                <div className="price-section">
                                                    <div className="priceinfo">
                                                        <p>From</p>
                                                        <h5>$37 <span>/ per night</span></h5>
                                                    </div>
                                                    <a href="#." className="viewbtn">book online</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="best-places-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-title">Explore the best places</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="center-title">What our guests say</h3>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-8">
                            <div className="swiper-container testimonial">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img-box"><img src={image1} alt="" /></div>
                                            <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                                              id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at
                                              accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                          fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                            <div className="star-rating">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                </ul>
                                            </div>
                                            <p className="overview"><span className="name">Michael Holz</span> <span className="company">review fro Seo Analyst at OsCorp Tech.</span></p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item ">
                                            <div className="img-box"><img src={image2} alt="" /></div>
                                            <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                              eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec
                                              turpis vel, semper malesuada ante. Vestibulum idac nisl bibendum scelerisque non
                          non purus. Suspendisse varius nibh non aliquet.</p>
                                            <div className="star-rating">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                                                </ul>
                                            </div>
                                            <p className="overview"><span className="name">Paula Wilson</span> <span className="company">review from chitravel.com</span></p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item ">
                                            <div className="img-box"><img src={image3} alt="" /></div>
                                            <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus.
                                              Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                                              Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit
                          amet gravida nibh, facilisis gravida odio. Phasellus auctor velit.</p>
                                            <div className="star-rating">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" /></li>
                                                    <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                                                </ul>
                                            </div>
                                            <p className="overview"><span className="name">Antonio Moreno</span> <span className="company">review from Web Developer at Circle Ltd.</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="center-title">latest news from blog</h3>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-12">
                            <div className="swiper-container blog">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="blogitem">
                                                    <div className="img-box"><img src={blogbg} alt="" /></div>
                                                    <h5 className="blogtitle">Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece</h5>
                                                    <ul className="bloginfo">
                                                        <li className="dateinfo"><i className="fa fa-calendar" /> 28th Jan 2017</li>
                                                        <li>Jonathan Doe</li>
                                                        <li>23 comments</li>
                                                    </ul>
                                                    <p className="blogtext">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                      ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                                                      turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus
                              ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                    <a href="#." className="readmorebtn"><i className="fa fa-long-arrow-right" /> read
                              more</a>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="blogitem">
                                                    <div className="img-box"><img src={blogbg} alt="" /></div>
                                                    <h5 className="blogtitle">Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece</h5>
                                                    <ul className="bloginfo">
                                                        <li className="dateinfo"><i className="fa fa-calendar" /> 28th Jan 2017</li>
                                                        <li >Jonathan Doe</li>
                                                        <li >23 comments</li>
                                                    </ul>
                                                    <p className="blogtext">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                      ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                                                      turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus
                              ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                    <a href="#." className="readmorebtn"><i className="fa fa-long-arrow-right" /> read
                              more</a>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="blogitem">
                                                    <div className="img-box"><img src={blogbg} alt="" /></div>
                                                    <h5 className="blogtitle">Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece</h5>
                                                    <ul className="bloginfo">
                                                        <li className="dateinfo"><i className="fa fa-calendar" /> 28th Jan 2017</li>
                                                        <li >Jonathan Doe</li>
                                                        <li >23 comments</li>
                                                    </ul>
                                                    <p className="blogtext">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                      ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                                                      turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus
                              ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                    <a href="#." className="readmorebtn"><i className="fa fa-long-arrow-right" /> read
                              more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="blogitem">
                                                    <div className="img-box"><img src={blogbg} alt="" /></div>
                                                    <h5 className="blogtitle">Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece</h5>
                                                    <ul className="bloginfo">
                                                        <li className="dateinfo"><i className="fa fa-calendar" /> 28th Jan 2017</li>
                                                        <li >Jonathan Doe</li>
                                                        <li >23 comments</li>
                                                    </ul>
                                                    <p className="blogtext">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                      ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                                                      turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus
                              ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                    <a href="#." className="readmorebtn"><i className="fa fa-long-arrow-right" /> read
                              more</a>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="blogitem">
                                                    <div className="img-box"><img src={blogbg} alt="" /></div>
                                                    <h5 className="blogtitle">Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece</h5>
                                                    <ul className="bloginfo">
                                                        <li className="dateinfo"><i className="fa fa-calendar" /> 28th Jan 2017</li>
                                                        <li >Jonathan Doe</li>
                                                        <li >23 comments</li>
                                                    </ul>
                                                    <p className="blogtext">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                      ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                                                      turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus
                              ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                    <a href="#." className="readmorebtn"><i className="fa fa-long-arrow-right" /> read
                              more</a>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="blogitem">
                                                    <div className="img-box"><img src={blogbg} alt="" /></div>
                                                    <h5 className="blogtitle">Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece</h5>
                                                    <ul className="bloginfo">
                                                        <li className="dateinfo"><i className="fa fa-calendar" /> 28th Jan 2017</li>
                                                        <li >Jonathan Doe</li>
                                                        <li >23 comments</li>
                                                    </ul>
                                                    <p className="blogtext">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                      ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                                                      turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus
                              ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                    <a href="#." className="readmorebtn"><i className="fa fa-long-arrow-right" /> read
                              more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="blogitem">
                                                    <div className="img-box"><img src={blogbg} alt="" /></div>
                                                    <h5 className="blogtitle">Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece</h5>
                                                    <ul className="bloginfo">
                                                        <li className="dateinfo"><i className="fa fa-calendar" /> 28th Jan 2017</li>
                                                        <li >Jonathan Doe</li>
                                                        <li >23 comments</li>
                                                    </ul>
                                                    <p className="blogtext">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                      ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                                                      turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus
                              ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                    <a href="#." className="readmorebtn"><i className="fa fa-long-arrow-right" /> read
                              more</a>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="blogitem">
                                                    <div className="img-box"><img src={blogbg} alt="" /></div>
                                                    <h5 className="blogtitle">Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece</h5>
                                                    <ul className="bloginfo">
                                                        <li className="dateinfo"><i className="fa fa-calendar" /> 28th Jan 2017</li>
                                                        <li >Jonathan Doe</li>
                                                        <li >23 comments</li>
                                                    </ul>
                                                    <p className="blogtext">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                      ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                                                      turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus
                              ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                    <a href="#." className="readmorebtn"><i className="fa fa-long-arrow-right" /> read
                              more</a>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="blogitem">
                                                    <div className="img-box"><img src={blogbg} alt="" /></div>
                                                    <h5 className="blogtitle">Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece</h5>
                                                    <ul className="bloginfo">
                                                        <li className="dateinfo"><i className="fa fa-calendar" /> 28th Jan 2017</li>
                                                        <li >Jonathan Doe</li>
                                                        <li >23 comments</li>
                                                    </ul>
                                                    <p className="blogtext">Phasellus vitae suscipit justo. Mauris pharetra feugiat
                                                      ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                                                      turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus
                              ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                                    <a href="#." className="readmorebtn"><i className="fa fa-long-arrow-right" /> read
                              more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="signupsection">
                <h3>Discover your next journey</h3>
                <h2>Are yo ready to stay?</h2>
                <a href="#" className="signupbtn">Sign up today</a>
            </section>
        </>
    );
}