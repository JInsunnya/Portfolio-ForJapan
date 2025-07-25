import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as P from './ProjectStyles.js';
import Line from '../assets/Line.png';

const Projects4 = () => {
    return (
        <P.Container>
            <P.Project>
                <P.Title>FreshTomato</P.Title>
                <P.Period>2024.07.15-16</P.Period>
                <P.Line>
                    <img src={Line} />
                </P.Line>
                <P.SubTitle>
                    사용자가 영화 정보를 검색하고 <br />
                    평가 및 코멘트를 남길 수 있는 영화 리뷰 플랫폼
                </P.SubTitle>
                <P.Role>프론트엔드 개발, 디자인</P.Role>
                <P.Description>
                    영화 상세 정보 페이지 개발 <br />
                    영화 리뷰 기능 개발 <br />
                    UI/UX 디자인 <br />
                    노션과 피그마 활용 프로젝트 기획 <br />
                    헤커톤 프로젝트로 이틀간 진행
                </P.Description>
                <P.LinkList>
                    <P.Link
                        href="https://www.youtube.com/watch?v=VaeI7BSl-zQ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        시뮬레이션 링크
                    </P.Link>
                    <P.Link
                        href="https://github.com/MiniHackerthonT1/FE_mini"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        깃허브 링크
                    </P.Link>
                </P.LinkList>
                <P.Stack>JavaScript, React, Vite, Styled-components, GitHub, Figma, Notion</P.Stack>
            </P.Project>
        </P.Container>
    );
};
export default Projects4;
