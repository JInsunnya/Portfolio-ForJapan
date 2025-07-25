import React from 'react';
import * as S from './StudyStyles.js';
// import EFConversation from '../assets/EFConversation.svg';
import EFConversation1 from '../assets/EFConversation1.svg';
import EFConversation2 from '../assets/EFConversation2.svg';
// import IFConversation from '../assets/IFConversation.svg';
import IFConversation1 from '../assets/IFConversation1.svg';
import IFConversation2 from '../assets/IFConversation2.svg';
import MFLC1 from '../assets/MFLC1.svg';
import MFLC2 from '../assets/MFLC2.svg';

const Study3 = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Images>
                    <S.ImageRow>
                        <img src={EFConversation1} />
                    </S.ImageRow>
                    <S.ImageRow>
                        <img src={EFConversation2} />
                    </S.ImageRow>
                    <S.ImageRow>
                        <img src={IFConversation1} />
                    </S.ImageRow>
                    <S.ImageRow>
                        <img src={IFConversation2} />
                    </S.ImageRow>
                    <S.ImageRow>
                        <img src={MFLC1} />
                    </S.ImageRow>
                    <S.ImageRow>
                        <img src={MFLC2} />
                    </S.ImageRow>
                </S.Images>
                <S.Text>
                    일본의 언어와 문화를 좋아히며, <br />
                    기초 수준이지만 일본어를 학습해 본 경험이 있습니다. <br />
                    <br />
                    프랑스어는 아무런 배경 지식 없이 <br />
                    한국외국어대학교 프랑스어학부에 입학하면서 처음 접하게 되었습니다.
                    <br />
                    이제서야 Bonjour 말하며 인사표현을 배우는 저와 달리 <br />
                    이미 프랑스어로 교수님과 자유롭게 대화가 가능한 학생들이 많았습니다. <br />
                    처음에는 성적이 낮은 편에 속했으나, <br />
                    오로지 노력만으로 나중에는 프랑스어 강의에서 좋은 성적을 거두는 편에 속했고, <br />
                    회화에서도 A 성적까지 올라간 학생이 되었습니다. <br />
                    비록 프랑스 살다 온 친구들처럼 자유롭게 구사하지는 못해 회화에서는 A0의 성적을 거두었지만, <br />
                    프랑스어 작문, 독해 등의 다른 강의에서는 더 좋은 성적을 받을 수 있었습니다. <br />
                    <br />
                    고등학생 시절에는 예체능을 전공하다가 고등학교 2학년부터 본격적으로 공부를 시작했으며, <br />
                    늦은 만큼 악착같은 노력으로 최대 전교 2등까지 성적을 올려 <br />
                    한국외국어대학교에 진학할 수 있었습니다. <br />
                    또한, 일본어에 능숙한 학생들 사이에서도 노력만으로 일본어 1등급을 받은 경험이 있습니다. <br />
                    <br />
                    이처럼 저는 기반이 부족하더라도 끈기 있게 실력을 키워온 경험이 있습니다. <br />
                    <br />
                    일본에 취업하기 위해서는 일본어와 영어 토익 점수가 필요하다고 알고 있는데, <br />
                    비록 현재는 일본어와 영어 공인 점수가 없지만, <br />
                    이러한 노력과 언어 학습에 대한 저의 태도와경험을 바탕으로 <br />
                    앞으로도 충분히 준비해나갈 수 있다고 자신 있게 말씀드립니다.
                </S.Text>
            </S.Content>
        </S.Container>
    );
};
export default Study3;
