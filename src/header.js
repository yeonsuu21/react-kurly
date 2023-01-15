import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom'

function Header() {
    return (
      <>
      <div className = "header1">
      <div className = "header">
      
          <div className = "header_content">
          <div className="delivery-image">
                  <img src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" alt="" />
              </div>
              </div> 
  
          <ul className="customers-items">
              <li className="sign-up-item">
                < Link to="#">회원가입</Link>
              </li>
              <li className="sign-in-item">
                < Link to="/login">로그인</Link> 
              </li>
              <li className="service-center-item">
                < Link to="#">고객센터</Link>
                <button type="button" className="service-center-icon"></button>
                <ul className="service-center-detail">
                  <li>
                    < Link to="#">공지사항</Link>
                  </li>
                  <li>
                    < Link to="#">자주하는 질문</Link>
                  </li>
                  <li>
                    < Link to="#">1:1 문의</Link>
                  </li>
                  <li>
                    < Link to="#">상품 제안</Link>
                  </li>
                  <li>
                    < Link to="#">에코포장 피드백</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
  
          
          <div className="logo-image">
              <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="Market Kurly" />
          </div>
       
             
          <nav className="navbar">
              <button type="button" className="navbar-close">
                  <li className="fas fa-times"></li>
              </button>
          
              <ul className="menu">
                  <li className="all_category">
                      < Link to="#">
                          <button type="button" className="menu-button"></button>
                          전체 카테고리
                        
                      </Link>
                      <ul className="all-category-item">
                        <li>
                          <a className="vegetable">채소   </a>
                        </li>
                        <li>
                          <a className="fruite">과일·견과·    </a>
                        </li>
                        <li>
                          <a className="fish"> 수산·해산·건어물   </a>
                        </li>
                        <li>
                          <a className="vegetable">채소   </a>
                        </li>
                      </ul> 
                      
                    </li>
                  
                      <li className="new-product-category">
                          < Link to="#">신상품</Link>
                      </li>
                      <li className="best-product-category">
                          < Link to="#">베스트</Link>
                      </li>
                      <li className="cheap-product-category">
                          < Link to="#">알뜰쇼핑</Link>
                      </li>
                      <li className="weekly-product-category">
                          < Link to="#">특가/혜택</Link>
                     </li>
                    
                    


                    
                  
                  
              </ul>
              <div className="search">
            <input id="gnb_search" placeholder="검색어를 입력해주세요" required="" class="search12 " value=""/>
              <button class="search-real">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDZWNmgxOHoiLz4KICAgICAgICA8cGF0aCBkPSJNMjIuNSAyMi41aC0xNXYtMTVoMTV6Ii8+CiAgICAgICAgPGcgc3Ryb2tlPSIjMzMzIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC44MjUgMTMuMzUyYzAgMS43MjUtLjc1IDMuMjI1LTEuOTUgNC4yLS45NzUuODI1LTIuMTc1IDEuMjc1LTMuNTI1IDEuMjc1YTUuNDU3IDUuNDU3IDAgMCAxLTUuNDc1LTUuNDc1IDUuNDU3IDUuNDU3IDAgMCAxIDUuNDc1LTUuNDc1YzMtLjA3NSA1LjQ3NSAyLjQgNS40NzUgNS40NzV6TTIxLjM3NSAyMS4zNzVsLTMuNzUtMy43NSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="/>
              </button>
            </div>
           
          </nav>
         
          </div>
    </> 
    );
  };

  export default Header;