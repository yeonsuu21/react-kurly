import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom'



function Footer() {
    return (
    
    <div className="footer">
        <div className="container">
          <div className="cs-center">
            <div className="cs-main">
              <h3 className="cs-title">고객행복센터</h3>
              <div className="cs-contact">
                <strong className="cs-number">1644-1107</strong>
                <Link to="#" className="cs-question">카카오톡 문의    </Link>
                <Link to="#" className="cs-question">1:1 문의   </Link>
              </div>
            </div>
  
            <div className="cs-detail">
              <span className="cs-detail-title">365고객센터</span>
              <span className="cs-detail-desc">오전 7시 - 오후 7시</span>
              <span className="cs-detail-title">365고객센터</span>
              <span className="cs-detail-desc">오전 7시 - 오후 7시</span>
              <span className="cs-detail-title">24시간 접수 가능</span>
              <span className="cs-detail-desc"
                >고객센터 운영시간에 순차적으로 답변해드리겠습니다.</span
              >
            </div>
        </div>
    
        <div className="footer-detail">
            <ul className="footer-links">
                <li>
                    <Link to="#">컬리소개   </Link>
                </li>
                <li>
                    <Link to="#">컬리소개영상   </Link>
                </li>
                <li>
                    <Link to="#">인재채용 </Link>
                </li>
                <li>
                    <Link to="#">이용약관   </Link>
                </li>
                <li>
                    <Link to="#">
                    <strong>개인정보처리방침</strong>
                      </Link>
                </li>
                <li>
                    <Link to="#">이용안   </Link>
                </li>
            </ul>
  
            <ul className="company-info">
            <li>
                <span>법인명 (상호) : 주식회사 컬리</span>
                <span>사업자등록번호 : 261-81-23567</span>
                <Link to="#">사업자정보 확인  </Link>
            </li>
            <li>
                <span>통신판매업 : 제 2018-서울강남-01646호</span>
                <span>개인정보보호책임자 : 이원준</span>
            </li>
            <li>
                <span>주소 : 서울시 도산대로 16길 20, 이래빌딩 B1 ~ 4F</span>
                <span>대표이사 : 김슬아</span>
            </li>
            <li>
                <span>입점문의 : <Link to="#">입점문의하기    </Link></span>
                <span>제휴문의 : <Link to="#">business@kurlycorp.com   </Link></span>
            </li>
            <li>
                채용문의 :
                <Link to="#">recruit@kurlycorp.com   </Link>
            </li>
            <li>
                <span>팩스 : 070 - 7500 - 6098</span>
                <span>이메일 : <Link to="#">help@kurlycorp.com   </Link></span>
            </li>
            </ul>
  
            <span className="copyrights">ⓒ KURLYCORP.ALL RIGHTS RESERVED</span>
  
            <ul className="sns-links">
            <li>
                <Link to="#">
                <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="인스타그램" />
                  </Link>
            </li>
            <li>
                <Link to="#">
                <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="페이스북" />
                  </Link>
            </li>
            <li>
                <Link to="#">
                <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="네이버 블로그" />
                  </Link>
            </li>
            <li>
                <Link to="#">
                <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="네이버 포스트" />
                  </Link>
            </li>
            <li>
                <Link to="#">
                <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="유튜브" />
                  </Link>
            </li>
            </ul>
        </div>
        </div>
    </div>
   
    )
  };

  export default Footer;