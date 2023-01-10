import React from 'react';
import logo from '../logo.svg';
import './LoginForm.css';

function LoginForm() {
    return (
        <div class="login_wrap">
            <form>
                <div class="content_wrap w360">
                    <h1><img src={logo} alt="AI 경리나라 " /></h1>
                    <fieldset id="UI_Target">
                        <legend class="blind">로그인</legend>
                        <div class="input_box">
                            <div class="text_style"><input type="text" placeholder="아이디" /></div>
                            <div class="text_style"><input type="password" maxlength="16" placeholder="비밀번호" /></div>
                        </div>
                        <p class="ck_box"><label><input type="checkbox" /><span class="txt_point">자동로그인</span></label></p>
                        <a class="btn01" >로그인</a>
                    </fieldset>
                    <div class="login_serBx">
                        <div class="login_serTop">
                            <div class="inner">
                                <div class="left"><a href="#none">회원가입</a></div>
                                <div class="right">
                                    <ul>
                                        <li><a href="#none" class="link">아이디 찾기</a></li>
                                        <li><a href="#none">비밀번호 변경</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;