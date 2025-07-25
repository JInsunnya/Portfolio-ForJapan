import React from 'react';
import * as I from './IntroStyles.js';
import Me from '../assets/Me.svg';

const Intro = () => {
    return (
        <I.Container>
            <I.Content>
                <I.Images>
                    <img src={Me} />
                </I.Images>
                <I.Text>
                    안녕하세요. <br />
                    사람과 사람, 기업과 사람을 잇는 <br />
                    따뜻한 서비스를 만들고 싶은 개발자 김진선입니다. <br />
                    단순한 기능을 구현하는데 그치지 않고, <br />
                    사람의 진심과 가치관을 담는 것을 목표로 합니다.
                </I.Text>
            </I.Content>
        </I.Container>
    );
};
export default Intro;
