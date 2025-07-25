import React from 'react';
import * as C from './ContactStyles.js';

const Contact = () => {
    return (
        <C.Container>
            <C.Title>
                서류 합격 소식을 기다리고 있겠습니다. <br />
                언제든 연락 부탁드립니다. <br />
                감사합니다!
            </C.Title>
            <C.Contact>
                <C.Phone>
                    <C.PhoneLabel>전화번호</C.PhoneLabel>
                    <C.PhoneValue>
                        <a href="tel:010-5781-5754">010-5781-5754</a>
                    </C.PhoneValue>
                </C.Phone>
                <C.Email>
                    <C.EmailLabel>이메일</C.EmailLabel>
                    <C.EmailValue>
                        <a href="mailto:jsk5754@naver.com">jsk5754@naver.com</a>
                    </C.EmailValue>
                </C.Email>
            </C.Contact>
        </C.Container>
    );
};
export default Contact;
