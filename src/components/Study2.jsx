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
                    정보처리기사 필기 시험을 미리 공부해 본 경험이 있습니다. <br />
                    비록 실제로 시험에 응시하진 않았지만, <br />
                    기초적인 개념과 문제 유형에 익숙해져 있어 <br />
                    자격증 취득에는 큰 어려움이 없을 것이라 생각합니다. <br />
                    <br />
                    또한, 학교에서 수강한 '소프트웨어공학' 수업을 비롯해 <br />
                    전공 과정에서 정보처리기사와 유사한 내용을 여러 차례 학습한 바 있습니다. <br />
                    이러한 배경 덕분에 시험에 응시한다면 충분히 합격할 수 있는 역량을 갖추고 있습니다.
                </S.Text>
            </S.Content>
        </S.Container>
    );
};
export default Study2;
