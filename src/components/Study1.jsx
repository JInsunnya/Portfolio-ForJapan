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
                    개발자로 여러 프로젝트에 참여하면서 중요하게 깨닫는 바가 있었습니다. <br />
                    한 프로젝트 내에서 특정 업무를 맡더라도, <br />
                    전체 개발 프로세스를 폭넓게 이해하고 있어야 <br />
                    작업이 훨씬 수월하고, <br />
                    예기치 못한 문제가 발생하더라도 프로젝트를 끝까지 완성할 수 있다는 점입니다. <br />
                    <br />
                    저는 프론트엔드와 PM 역할을 중심으로 프로젝트를 수행해 본 경험이 있으며, <br />
                    이러한 관점에서 현재는 백엔드 개발도 학습 중입니다. <br />
                    앞으로는 백엔드 개발자로서도 직접 프로젝트에 참여해 보고자 합니다.
                    <br />
                    <br />
                    SCIT 프로그램에 참여하게 된다면, <br />
                    백엔드 학습의 기초를 다지고 있는 지원자로서 <br />
                    보다 빠르게 내용을 이해하고 적응할 수 있을 것이라 자신합니다.
                </S.Text>
            </S.Content>
        </S.Container>
    );
};
export default Study1;
