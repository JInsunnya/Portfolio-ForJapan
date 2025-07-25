import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as P from './ProjectStyles.js';
import Line from '../assets/Line.png';

const Projects3 = () => {
    return (
        <P.Container>
            <P.Project>
                <P.Title>MathQuest</P.Title>
                <P.Period>2024.08 - 2025.01</P.Period>
                <P.Line>
                    <img src={Line} />
                </P.Line>
                <P.SubTitle>
                    수학에 대한 두려움을 극복하고 <br />
                    지속적인 학습을 돕는 종합 수학 학습 플랫폼
                </P.SubTitle>
                <P.Role>프론트엔드 개발, PM, 디자인 및 서비스 전체 총괄</P.Role>
                <P.Description>
                    웹 배포 <br />
                    마이페이지 기능 (프로필, 비밀번호찾기, 회원탈퇴, 사용방법, 개발자소개, 학습진도기록) 개발 <br />
                    문제 풀이 전체 기능 (학년-단원-난이도별 문제 조회, 문제풀이, 오답노트, 해설확인) 개발 <br />
                    GitHub 기반 명확한 커밋 메시지 작성 활용 협업 <br />
                    UI/UX 디자인 <br />
                    노션과 피그마 활용 프로제트 기획 <br />
                    개발 회의 주도, 일정 수립 및 기능 명세서 등 서류 작성
                </P.Description>
                <P.LinkList>
                    <P.Link href="https://www.youtube.com/shorts/2rkMoXEG9VI" target="_blank" rel="noopener noreferrer">
                        시뮬레이션 링크
                    </P.Link>
                    <P.Link
                        href="https://github.com/MathQuest-Likelion/MathQuest-client"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        깃허브 링크
                    </P.Link>
                </P.LinkList>
                <P.Stack>JavaScript, React, Vercel, Styled-components, GitHub, Figma, Notion</P.Stack>
            </P.Project>

            <P.Project>
                <P.Title>SugarMon</P.Title>
                <P.Period>2024.07 - 2024.08</P.Period>
                <P.Line>
                    <img src={Line} />
                </P.Line>
                <P.SubTitle>
                    현대인의 혈당 관리와 예방을 위해 <br />
                    식사의 혈당 지수를 측정·관리하고, <br />
                    건강한 습관 형성을 돕는 서비스
                </P.SubTitle>
                <P.Role>프론트엔드 개발, PM, 디자인</P.Role>
                <P.Description>
                    캘린더 기반 습관 체크 기능 개발 <br />
                    혈당 체크 기능 (식습관 체크를 위한 음식 선택 페이지, 혈당 알려주는 페이지, 습관 조회) 개발
                    <br />
                    UI/UX 디자인 <br />
                    노션과 피그마 활용 프로젝트 기획 <br />
                    개발 회의 주도, 일정 수립 및 기능 명세서 등 서류 작성
                </P.Description>
                <P.LinkList>
                    <P.Link
                        href="https://github.com/SugarMonLikelion12/SugarMon_Frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        깃허브 링크
                    </P.Link>
                    <P.Link
                        href="https://sun-mistake-9ab.notion.site/SugarMon-22845f2f676b80f6ae6ae3354bbc5ef5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        구현 화면
                    </P.Link>
                </P.LinkList>
                <P.Stack>JavaScript, React, Styled-components, GitHub, Figma, Notion</P.Stack>
            </P.Project>
        </P.Container>
    );
};
export default Projects3;
