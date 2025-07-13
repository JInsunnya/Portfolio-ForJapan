import React from 'react';
import * as S from './StudyStyles.js';
import IntelliJ from '../assets/IntelliJ.svg';
import Java from '../assets/Java.svg';
import Spring from '../assets/Spring.svg';
import Sql from '../assets/Sql.svg';
import DBeaver from '../assets/DBeaver.svg';
import Aws from '../assets/Aws.svg';
import Docker from '../assets/Docker.svg';

const Study1 = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Images>
                    <S.ImageRow>
                        <img src={IntelliJ} />
                        <img src={Java} />
                        <img src={Spring} />
                    </S.ImageRow>
                    <S.ImageRow>
                        <img src={Sql} />
                        <img src={DBeaver} />
                        <img src={Aws} />
                    </S.ImageRow>
                    <S.ImageRow>
                        <img src={Docker} />
                    </S.ImageRow>
                </S.Images>
                <S.Text>
                    개발자로 프로젝트에 참여하면서 여러 차례 깨닫는 바가 있었습니다. <br />
                    비록 한 프로젝트 내에서 주요하게 담당하는 업무가 있더라도 <br />
                    다른 개발 프로세스를 모두 이해하고 있어야 <br />
                    어떠한 프로젝트든 수월하게, <br />
                    진행 중에 문제가 생기더라도 프로젝트를 완성할 수 있다는 점입니다. <br />
                    <br />
                    프론트엔드와 PM처럼 해당 업무를 담당해 프로젝트를 해 본 경험은 있으나, <br />
                    저의 이러한 생각을 기반으로 백엔드 개발도 학습 중입니다. <br />
                    따라서 백엔드 개발자로도 활동해 보고 싶습니다.
                    <br />
                    <br />
                    또한 SCIT 프로그램에 참여하게 되어도 <br />
                    백엔드 학습의 기초를 다지고 있어 이해가 좀 더 수월하다는 <br />
                    장점을 지닌 지원자임을 알려드리고자 합니다.
                </S.Text>
            </S.Content>
        </S.Container>
    );
};
export default Study1;
