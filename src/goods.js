
import React, { useState } from "react";
import {BrowserRouter, Link} from 'react-router-dom'

import './style3.css';


const Goods = () => { 
  const [item, setItem] = useState(0)
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)
  
  const  sum = item * 6750
  const sum1 = sum.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  
    return (
        <div>
        <div class="main-1">
        <div class="pic">
            <img src="https://img-cf.kurly.com/shop/data/goods/1646906524400y0.jpg" />
        </div>
        <div class="word">
            <p class="goods-name">
                <strong class="name">다짐육 200g (냉장)</strong>
                <br/><br/>
                <span class="short-name">100g당 판매가 3,750원(냉장)</span>
            </p>
            <p class="goods_dcinfo">회원할인가</p>
            <p class="goods_price">
                <span class="position">
                    <span class="dc">
                      <span class="dc_percent">10<span class="per">%</span></span>
                        <span class="dc_price">6,750<span class="won">원</span></span><br/>
                          <a class="original_price">
                            <span class="price">7,500<span class="won">원</span></span>
                            <img src="https://res.kurly.com/kurly/ico/2021/question_24_24_c999.svg" alt="물음표" class="ico"/><br/>
                          </a> 
                          <span class="layer_position">
                          <span class="layer_price">
                            
                            <strong class="tit_layer">컬리판매가 기준 할인</strong>
                            동일 품질 상품의 주요 온/오프라인 유통사 가격과 비교하여 컬리가 설정한 가격에서 할인된 가격입니다.
                            <br/><br/>
                            <span class="not_login">
                              로그인 후, 회원할인가와 적립혜택이 제공됩니다.
                            </span>
                            </span> 
                            <button type="button" class="btn_close">
                              <span class="btn-in">
                                <strong>여름 대전 20% 할인받기</strong>
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNUYwMDgwIiBzdHJva2Utd2lkdGg9IjEuMyIgZD0iTTkgMi4wODhMOSAxMS4wOTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzYuMDAwMDAwLCAtODM5LjAwMDAwMCkgdHJhbnNsYXRlKDAuMDAwMDAwLCAxMzIuMDAwMDAwKSB0cmFuc2xhdGUoMjAuMDAwMDAwLCA1MDIuMDAwMDAwKSB0cmFuc2xhdGUoMC4wMDAwMDAsIDE5MS4wMDAwMDApIHRyYW5zbGF0ZSgyMTYuMDAwMDAwLCAxNC4wMDAwMDApIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zIiBkPSJNMi4wOCAxMS4wOTlMMi4wOCAxNS4wNzQgMTUuOTE0IDE1LjA3NCAxNS45MTQgMTEuMDk5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM2LjAwMDAwMCwgLTgzOS4wMDAwMDApIHRyYW5zbGF0ZSgwLjAwMDAwMCwgMTMyLjAwMDAwMCkgdHJhbnNsYXRlKDIwLjAwMDAwMCwgNTAyLjAwMDAwMCkgdHJhbnNsYXRlKDAuMDAwMDAwLCAxOTEuMDAwMDAwKSB0cmFuc2xhdGUoMjE2LjAwMDAwMCwgMTQuMDAwMDAwKSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNUYwMDgwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMyIgZD0iTTUuNjMgOC4xMkw5LjAwNSAxMS40OTYgMTIuMzgxIDguMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzYuMDAwMDAwLCAtODM5LjAwMDAwMCkgdHJhbnNsYXRlKDAuMDAwMDAwLCAxMzIuMDAwMDAwKSB0cmFuc2xhdGUoMjAuMDAwMDAwLCA1MDIuMDAwMDAwKSB0cmFuc2xhdGUoMC4wMDAwMDAsIDE5MS4wMDAwMDApIHRyYW5zbGF0ZSgyMTYuMDAwMDAwLCAxNC4wMDAwMDApIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="다운받기" class="downimg"/>
                                </span></button>
                            </span></span>
                            </span>
              </p>
            <div class ="word1">
              <dl class="word-in">
              <dt class="word-in1">배송</dt>
              <dd class="word-in2">
                <p class="word-in3">샛별배송</p>
                <p class="word-in4">23시 전 주문 시 내일 아침 7시 전 도착
                  (대구·부산·울산 샛별배송 운영시간 별도 확인)</p>
              </dd>
              </dl>
              <dl class="word-in">
                <dt class="word-in1">판매자</dt>
                <dd class="word-in2">
                  <p class="word-in3">마켓컬리</p>
                  
                </dd>
              </dl>
              <dl class="word-in">
                <dt class="word-in1">포장타입</dt>
                <dd class="word-in2">
                  <p class="word-in3">냉동(종이포장)</p>
                  <p class="word-in4">23시 전 주문 시 내일 아침 7시 전 도착
                    (대구·부산·울산 샛별배송 운영시간 별도 확인)</p>
                </dd>
              </dl>
              <dl class="word-in">
                <dt class="word-in1">판매단위</dt>
                <dd class="word-in2">
                  <p class="word-in3">1팩</p>
                  
                </dd>
              </dl>
              <dl class="word-in">
                <dt class="word-in1">중량/용량</dt>
                <dd class="word-in2">
                  <p class="word-in3">240g내외</p>
                 
                </dd>
              </dl>
              <dl class="word-in">
                <dt class="word-in1">원산지</dt>
                <dd class="word-in2">
                  <p class="word-in3">국산</p>
                  
                </dd>
              </dl>
              <dl class="word-in">
                <dt class="word-in1">알레르기정보</dt>
                <dd class="word-in2">
                  <p class="word-in3">-이 제품은 우유,대두,밀, 토마토 ~~~~~~~~같은 제조시설에서 제조</p>
                  
                </dd>
              </dl>
              <dl class="word-in">
                <dt class="word-in1">유통기한정보</dt>
                <dd class="word-in2">
                  <p class="word-in3">출고일 기준,유통기한만기 180일 이상 남은 머시기</p>
                  
                </dd>
              </dl>

            </div>
            <div class="word2">
              <dl class="word-in5">
                <dt class="word-in1">구매수량</dt>
                <dd class="word-in2">
                <div class="btn-ready">
                  <button onClick={decrementItem} class="btn-down"></button>
                  <div class="btn-now">{item}</div>
                  <button onClick={incrementItem}class="btn-up"></button>
                </div>

              </dd>
              </dl>
            </div>
            <div class="css-9y0nwt e1vyx3w90">
              <div class="css-ixlb9s extc5fi9">
                <div class="css-yhijln extc5fi8">
                  <span class="css-w1is7v extc5fi7">총 상품금액 :</span>
                  <span class="css-x4cdgl extc5fi6">{sum1}</span>
                  <span class="css-1jb8hmu extc5fi5">원</span>
                  </div>
                  <div class="css-1iis94s extc5fi4">
                    <span class="css-12p95ok extc5fi3">적립</span
                    ><span class="css-10e9px3 extc5fi2">로그인 후, 할인 및 적립 혜택 제공</span>
                    </div></div></div>
                    <div class="css-gnxbjx elhxzl01">
                      <button class="css-3z91zj e4nu7ef3" type="button" width="56" height="56" radius="3">
                        <span class="css-ymwvow e4nu7ef1">
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K" alt="" class="css-0"/></span>
                          </button>
                          <button class="css-3z91zj e4nu7ef3" type="button" disabled="" width="56" height="56" radius="3">
                            <span class="css-ymwvow e4nu7ef1">
                              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="" class="css-0"/>
                              </span>
                              </button>
                              <div class="css-14jnwd7 elhxzl00">
                                <button class="cart-button css-1qirdbn e4nu7ef3" type="button" radius="3">
                                  <span class="css-ymwvow e4nu7ef1">장바구니 담기</span></button></div></div>
           
        </div>
    </div>

    <div className="goods-content">
      <div className="goods-discription">
        <img src="https://img-cf.kurly.com/shop/data/goodsview/20220310/gv10000287833_1.jpg"></img>
        <div class="context last">
           <h3> <small>담백하게 즐기는 다짐 소고기</small> [일상味소] 다짐육 </h3> 
           <p class="words">
            컬리는 고민했습니다. '국내산 소고기를 특별한 날이 아닌 일상에서도, 합리적인 가격으로 즐길 순 없을까?' 그 해답을 위해 컬리는 직접 기획한 상품, '일상味소' 육우를 선보입니다. 그중에서도 담백한 설깃, 설도, 목심 부위를 곱게 다진 상품을 소개할게요. 볶음밥, 함박 스테이크, 미트볼 등 다진 소고기가 필요한 모든 요리에 간편하게 사용해 보세요. 조리 시간은 줄어들고 담백한 맛은 배가 될 거예요.</p> 
          </div>
        <img src="https://img-cf.kurly.com/shop/data/goodsview/20220310/gv40000287834_1.jpg"></img>
        
        <img src ="https://img-cf.kurly.com/shop/data/goodsview/20220310/gv40000287838_1.jpg"></img>
        
        <img src="https://img-cf.kurly.com/shop/data/goodsview/20220224/gv10000283745_1.jpg"></img>
        
      </div>
      <div className="goods-detail"></div>
      <div className="goods-review"></div>
      <div className="goods-inquiry"></div>
    </div>

    </div>
 
    )

};

export default Goods;

