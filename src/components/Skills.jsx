import React from 'react';
import * as S from './SkillsStyles.js';
import Ts from '../assets/Ts.svg';
import Js from '../assets/Js.svg';
import ReactImg from '../assets/React.svg';
import ReactNative from '../assets/ReactNative.svg';
import Vite from '../assets/Vite.svg';
import Html from '../assets/Html.svg';
import Css from '../assets/Css.svg';
import Styled from '../assets/Styled-components.svg';
import Redux from '../assets/Redux.svg';
import Zustand from '../assets/Zustand.svg';
import MobX from '../assets/MobX.svg';
import Vercel from '../assets/Vercel.svg';
import Xcode from '../assets/Xcode.svg';
import Android from '../assets/AndroidStudio.svg';
import PWA from '../assets/PWA.svg';
import Python from '../assets/Python.svg';
import Java from '../assets/Java.svg';
import Github from '../assets/Github.svg';
import Postman from '../assets/Postman.svg';
import Figma from '../assets/Figma.svg';
import Notion from '../assets/Notion.svg';
import Vscode from '../assets/Vscode.svg';
import GoogleAnalytics from '../assets/GoogleAnalytics.svg';
// import Prettier from '../assets/Prettier.svg';

const Skills = () => {
    return (
        <S.Container>
            <S.RowTop>
                <S.SkillIcon>
                    <img src={Ts} />
                    <S.Label>TypeScript</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Js} />
                    <S.Label>JavaScript</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={ReactImg} />
                    <S.Label>React</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={ReactNative} />
                    <S.Label>React Native</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Vite} />
                    <S.Label>Vite</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Html} />
                    <S.Label>HTML</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Css} />
                    <S.Label>CSS</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Styled} />
                    <S.Label>Styled-components</S.Label>
                </S.SkillIcon>
            </S.RowTop>
            <S.RowMiddle>
                <S.SkillIcon>
                    <img src={Redux} />
                    <S.Label>Redux</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Zustand} />
                    <S.Label>Zustand</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={MobX} />
                    <S.Label>MobX</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Vercel} />
                    <S.Label>Vercel</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Xcode} />
                    <S.Label>Xcode</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Android} />
                    <S.Label>Android Studio</S.Label>
                </S.SkillIcon>
                <S.SkillIconPWA>
                    <img src={PWA} />
                    <S.Label>Progressive Web App</S.Label>
                </S.SkillIconPWA>
            </S.RowMiddle>
            <S.RowBottom>
                <S.SkillIcon>
                    <img src={Python} />
                    <S.Label>Python</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Java} />
                    <S.Label>Java</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Github} />
                    <S.Label>GitHub</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Postman} />
                    <S.Label>Postman</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Figma} />
                    <S.Label>Figma</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Notion} />
                    <S.Label>Notion</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={Vscode} />
                    <S.Label>Visual Studio Code</S.Label>
                </S.SkillIcon>
                <S.SkillIcon>
                    <img src={GoogleAnalytics} />
                    <S.Label>GoogleAnalytics</S.Label>
                </S.SkillIcon>
            </S.RowBottom>
        </S.Container>
    );
};
export default Skills;
