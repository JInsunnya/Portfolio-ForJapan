import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as P from './ProjectStyles.js';
import Line from '../assets/Line.png';

const Projects2 = () => {
    return (
        <P.Container>
            <P.Project>
                <P.Title>멋사 한국외대 리크루팅 페이지</P.Title>
                <P.Period>2025.02</P.Period>
                <P.Line>
                    <img src={Line} />
                </P.Line>
                <P.SubTitle>
                    멋쟁이사자처럼 한국외국어대학교 서울캠퍼스 <br />
                    13기 리크루팅 페이지
                </P.SubTitle>
                <P.Role>프론트엔드 개발</P.Role>
                <P.Description>
                    반응형 모바일, 데스크탑 화면 구현 및 웹 배포 <br />
                    배포 후 실사용자 유입 경험 <br />
                    지원서 제출 기능 (작성, 제출, 수정, 관리자페이지(제출된 지원서 확인)) 개발 <br />
                    헤더 관리(지원서 작성 시, 로그인 시, 관리자일 시 등) 개발 <br />
                    Google Analytics 활용 유저 분석 <br />
                    페이지 소스 코드 보호를 위한 빌드 난독화 처리 <br />
                    GitHub 기능별 브랜치 전략 및 명확한 커밋 메시지 작성 활용 협업
                </P.Description>
                <P.LinkList>
                    <P.Link>시뮬레이션 링크</P.Link>
                    <P.Link
                        href="https://github.com/LIKELION-HUFS-13th-MANAGEMENT/Recruitment-Frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        깃허브 링크
                    </P.Link>
                    <P.Link
                        href="https://sun-mistake-9ab.notion.site/22845f2f676b80d5bcf1cc5bbcd175d2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        피그마 링크
                    </P.Link>
                </P.LinkList>
                <P.Stack>JavaScript, React, Vercel, Styled-components, GitHub, Figma, Notion, Google Analytics</P.Stack>
            </P.Project>

            <P.Project>
                <P.Title>MINGLE</P.Title>
                <P.Period>2024.10 - 2025.03</P.Period>
                <P.Line>
                    <img src={Line} />
                </P.Line>
                <P.SubTitle>
                    친구 그룹과 함께 재미있는 추억을 쌓고, <br />
                    서로의 관계를 더욱 건강하게 만들어주는 <br />
                    QnA 기반 소셜 플랫폼
                </P.SubTitle>
                <P.Role>프론트엔드 개발, PM, 디자인</P.Role>
                <P.Description>
                    Xcode, Android Studio를 활용한 앱 개발 및 웹 배포 <br />
                    프로젝트 소개 페이지 개발
                    <br />
                    유저 기능 (회원가입, 회원정보, 로그아웃) 개발 <br />
                    그룹 기능 (그룹정보, 초대하기, 그룹삭제, 그룹 떠나기) 개발 <br />
                    GitHub 기반 명확한 커밋 메시지 작성 활용 협업 <br />
                    UI/UX 디자인 <br />
                    노션과 피그마 활용 프로젝트 기획
                </P.Description>
                <P.LinkList>
                    <P.Link
                        href="https://www.youtube.com/watch?v=omO7aFCDtf0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        시뮬레이션 링크
                    </P.Link>
                    <P.Link href="https://github.com/mingle-project/frontend" target="_blank" rel="noopener noreferrer">
                        깃허브 웹 개발 링크
                    </P.Link>
                    <P.Link
                        href="https://github.com/mingle-project/frontend-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        깃허브 앱 개발 링크
                    </P.Link>
                </P.LinkList>
                <P.Stack>
                    TypeScript, JavaScript, React Native, React, Xcode, Android Studio, Vercel, Redux,
                    Styled-components, GitHub, Figma, Notion
                </P.Stack>
            </P.Project>
        </P.Container>
    );
};
export default Projects2;
