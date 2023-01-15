import './style1.css';
import {BrowserRouter, Link} from 'react-router-dom'


function Login () {
    return(
        <div>
         
    <div className="login-content">
            <div className="tit-login">
                <h1 className="tit-login-tit">로그인</h1>
            </div>
            <div className="login-box">
                <div className="loginbox-in">
                    <input type="text" name="m_id" size="20" tabindex="1" value="" placeholder="아이디를 입력해주세요"/>
                    <input type="text" name="m_id" size="20" tabindex="1" value="" placeholder="비밀번호를 입력해주세요"/>
                </div>
                <div className="checkbox">
                    <ul className="checkbox-safe">
                        <li className="cheap-product-category">
                            <a href="#">아이디 찾기</a> 
                        </li>
                        
                        <li>
                            <span > {" "}| {" "}</span>
                        </li>
                        <li className="weekly-product-category">
                            <a href="#">비밀번호 찾기</a>
                        </li>
                    </ul>
                </div>
                <div className="submit">
                <Link to="/">로그인</Link>
                    
                </div>
                <div className="submit1">
                <Link to="#">회원가입</Link>
                </div>
            </div>
        
    </div>
    </div>
    
    )
};

export default Login;