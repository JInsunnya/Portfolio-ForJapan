import React from 'react';
import * as S from './StudyStyles.js';
import SoftwareEngineering from '../assets/SoftwareEngineering.svg';
import IPE from '../assets/InfoProcessingEngineer.svg';
import SEStudy from '../assets/SoftwareEngineeringStudy.svg';

const Study2 = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Images>
                    <S.ImageRow>
                        <img src={SoftwareEngineering} />
                    </S.ImageRow>
                    <S.ImageRow>
                        <img src={IPE} />
                        <img src={SEStudy} />
                    </S.ImageRow>
                </S.Images>
                <S.Text>
                    정보처리기사 필기를 공부해 본 경험이 있습니다. <br />
                    비록 시험에 응시를 하지는 않았으나, <br />
                    이미 공부를 해 본 적이 있어 자격증 취득에 어렵지 않을 것입니다. <br />
                    <br />
                    또한 학교에서 수강한 '소프트웨어공학' 강의에서 <br />
                    정보처리기사에서 공부하는 내용을 배웠고, <br />
                    소프트웨어 전공생이기에 해당 강의에서 뿐만 아니라 <br />
                    여러 차례 자격증의 내용을 학습했기에 <br />
                    시험에 응시만 한다면 합격이 어렵지 않을 것입니다.
                </S.Text>
            </S.Content>
        </S.Container>
    );
};
export default Study2;
