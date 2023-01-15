import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom'
function Sect(){
    return(
      <div className="recommendation section">
        <div className="container">
          <h2 className="title">이 상품 어때요?</h2>
  
          <div className="product-slide">
            <div className="product-slide-wrap">
              <div className="product-box">
                <ul className="recommend-items">
                  <li>
                    < Link to="#" className="recommend-product-image image-hover"></Link>
                    < Link to="#">
                      <img src="https://img-cf.kurly.com/shop/data/goods/1481529722865l0.jpg" alt=""/>
                      <h3 className="product-name">찹쌀가루</h3>
                    </Link>
                    <div className="product-price">
                      <strong className="discount-rate">10%</strong>
                      <strong className="final-price">25,110원</strong>
                      <span className="regular-price">27,900원</span>
                    </div>
                  </li>
                  <li>
                    < Link to ="/goods" className="recommend-product-image image-hover" alt=""></Link>
                    < Link to="/goods">
                      <img src="https://img-cf.kurly.com/shop/data/goods/148470727624l0.jpg" alt=""/>
                      <h3 className="product-name">찹쌀가루</h3>
                    </Link>
                    <div className="product-price">
                      <strong className="discount-rate">10%</strong>
                      <strong className="final-price">25,110원</strong>
                      <span className="regular-price">27,900원</span>
                    </div>
                  </li>
                  <li>
                    < Link to="#" className="recommend-product-image image-hover"></Link>
                    < Link to="#">
                      <img src="https://img-cf.kurly.com/shop/data/goods/1652859801466l0.jpg" alt=""/>
                      <h3 className="product-name">찹쌀가루</h3>
                    </Link>
                    <div className="product-price">
                      <strong className="discount-rate">10%</strong>
                      <strong className="final-price">25,110원</strong>
                      <span className="regular-price">27,900원</span>
                    </div>
                  </li>
                  
                </ul>   
              </div>  
            </div>
          </div>
        </div>
      </div>
       
      )
  }; 
  
  export default Sect;