"use client"
import Image from "next/image";
import Script from 'next/script';
import Link from 'next/link';
import { useEffect } from "react";
import contactPic from '../public/contact.png'
import navPic from '../public/d’Perfume.png'
import footerPic from '../public/d’Perfumew.png'
import '../styles/product.css';

function Product() {
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
  const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL  
  return (
    <>
      <div className="container">
        <div className="navbar wrap">
          <div className="logo">
            <Image src={navPic} alt="nav-logo" priority/>
          </div>
          <div className="ham-menu menu">
            <a href="#">
              <i className="fa-solid fa-bars fa-lg"></i>
            </a>
          </div>      
          <div className="main-menu menu">
            <a href="#">
              <i className="fa-solid fa-shop"></i>
              <span>Product</span>
            </a>
            <a href="#">
              <i className="fa-solid fa-user-large"></i>
              <span>log in</span>
            </a>
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Cart(3)</span>
            </a>
            <Link href={`${CLIENT_URL}/admin`}>
              <i className="fa-solid fa-hammer"></i>
              <span>後台</span>
            </Link>
          </div>
        </div>
        <div className="content">
          <div className="category">
            <div className="category-list wrap">
              <a href="#">perfume</a>
            </div>
          </div>
          <div className="loader">
            <div className="loader-inner ball-scale-ripple-multiple">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="products">
            <div className="products-list wrap">
              <div className="product">
                <div className="img">
                  {/* <img src="https://images.unsplash.com/photo-1582211594533-268f4f1edcb9?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/> */}
                </div>
                <h3>Poppy&Barley</h3>
                <span>Jo Malon</span>
                <div className="price">
                  <p>NT$1380</p>
                  <p>NT$1580</p>
                </div>
                <div className="actions">
                  <i className="fa-solid fa-heart"></i>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="subscribe">
            <div className="info wrap">
              <div className="text">
                <h3>記得</h3>
                <h3>訂閱以獲得更多資訊</h3>
              </div>
              <div className="inputs">
                <input type="text" placeholder="Your email address"/>
                <input type="submit" placeholder="subscribe"/>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-wrap">
            <div className="logo">
              <Image src={footerPic} alt="footer-logo"/>
              <div className="copyright">© 2020. All Rights Reserved.</div>
            </div>
            <div className="more">
              <a href="#">Product</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    
      <Script src="https://kit.fontawesome.com/fc907d4260.js" />
      <Script src="./product.js" strategy="lazyOnload" /> 
    </>
    );
}

export default Product