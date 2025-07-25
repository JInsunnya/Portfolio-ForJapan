import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as P from './ProjectStyles.js';
import Line from '../assets/Line.png';

const Projects1 = () => {
    return (
        <P.Container>
            <P.Project>
                <P.Title>스타트업 For A labs</P.Title>
                <P.Period>2025.01 - 진행 중</P.Period>
                <P.Line>
                    <img src={Line} />
                </P.Line>
                <P.SubTitle>ADHD인들을 위한 정보 공유 커뮤니티앱</P.SubTitle>
                <P.Role>iOS 개발, PM</P.Role>
                <P.Description>
                    Xcode를 활용한 앱 빌드 및 업데이트 <br />
                    TestFlight를 활용하여 앱 테스트 운영 및 정식 출시 <br />
                    개발 회의 주도, 일정 수립 및 기능 명세서 등 서류 작성 <br />
                    커뮤니티 기능 (게시글, 좋아요, 댓글) 개발 <br />
                    앱 외 외부 링크 연결 기능 개발 <br />
                    병원 조회 페이지 개발 <br />
                    약탭(약 정보 조회, 리뷰, 검색) <br />
                    마이페이지(저장한 약, 작성한 글, 신고 내역 등) 개발 <br />
                    GitHub 기반 버전 관리 <br />
                    새로 런칭하는 챗봇 Mori의 PM으로 기획팀에 합류
                </P.Description>
                <P.LinkList>
                    <P.Link
                        href="https://apps.apple.com/kr/app/%ED%8F%AC%EC%97%90%EC%9D%B4-adhd-%EB%B3%91%EC%9B%90-%EC%B0%BE%EA%B8%B0-%EC%95%BD-%EC%A0%95%EB%B3%B4-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id6736352280"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        앱 다운로드 링크
                    </P.Link>
                    {/* <P.Link>시뮬레이션 링크</P.Link> */}
                    <P.Link
                        href="https://sun-mistake-9ab.notion.site/1b045f2f676b809c936cc8566752b66a?v=1b045f2f676b8149b0be000c78137f81"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        노션 링크
                    </P.Link>
                </P.LinkList>
                <P.Stack>TypeScript, React Native, Xcode, MobX, Styled-components, GitHub, Figma, Notion</P.Stack>
            </P.Project>

            <P.Project>
                <P.Title>WIDER</P.Title>
                <P.Period>2025.03 - 2025.06</P.Period>
                <P.Line>
                    <img src={Line} />
                </P.Line>
                <P.SubTitle>
                    AI가 질문을 던지고 사용자가 사고하며 성장하는, <br />
                    생각의 흐름 아카이빙 플랫폼
                </P.SubTitle>
                <P.Role>프론트엔드 개발, PM, 디자인 및 서비스 전체 총괄</P.Role>
                <P.Description>
                    반응형 모바일, 데스크탑 화면 구현 및 웹 배포 <br />
                    PWA를 활용한 앱 배포
                    <br />
                    AI와 1:1 채팅 기능 개발 <br />
                    AI와의 채팅을 기반으로 한 리포트 개발 <br />
                    AI 채팅을 다시 볼 수 있는 기록 목록 개발 <br />
                    유저 기능 (회원가입, 로그인, 로그아웃, 회원탈퇴, 비밀번호 변경, 약관) <br />
                    채팅 데이터 기반 인사이트 기능 개발 <br />
                    GitHub 기능별 브랜치 전략 및 PR 템플릿 도입 관리 <br />
                    UI/UX 디자인 <br />
                    노션 활용 전체 프로젝트 진행 <br />
                    개발 회의 주도, 일정 수립 및 기능 명세서 등 서류 작성
                </P.Description>
                <P.LinkList>
                    <P.Link href="https://wider.info/" target="_blank" rel="noopener noreferrer">
                        배포 링크 (현재는 서버가 닫혀 기능 불가능)
                    </P.Link>
                    <P.Link
                        href="https://youtu.be/HFkwH4_IHKo?si=s2v93Px3OA3nFnXV"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        시뮬레이션 링크
                    </P.Link>
                    <P.Link href="https://github.com/WIDER-HUFS/WIDER-Client" target="_blank" rel="noopener noreferrer">
                        깃허브 링크
                    </P.Link>
                    <P.Link
                        href="https://sun-mistake-9ab.notion.site/WIDER-22845f2f676b80cf8dd0dfabbd9fae1e"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        피그마 링크
                    </P.Link>
                </P.LinkList>
                <P.Stack>JavaScript, React, Vercel, PWA, Redux, Styled-components, GitHub, Figma, Notion</P.Stack>
            </P.Project>
        </P.Container>
    );
};
export default Projects1;
