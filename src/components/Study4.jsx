import React from 'react';
import * as S from './StudyStyles.js';
import Algorithm from '../assets/Algorithm.svg';

const Study4 = () => {
    return (
        <S.Container>
            <S.Content>
                <S.Images>
                    <S.ImageRow>
                        <img src={Algorithm} />
                    </S.ImageRow>
                </S.Images>
                <S.LastText>
                    어려운 문제를 많이 풀어보진 않았지만, <br />
                    코딩테스트 준비도 조금씩 병행해 왔습니다. <br />
                    또한 학교에서 자료구조와 알고리즘 강의를 수강한 경험이 있어, <br />
                    코딩 문제들이 낯설지 않습니다. <br />
                    저의 개발 학습. 과정은 아래 링크들을 통해 확인하실 수 있습니다. <br />
                    감사합니다. <br />
                    <br />
                    <br />
                    <a href="https://github.com/JInsunnya" target="_blank" rel="noopener noreferrer">
                        깃허브 링크
                    </a>{' '}
                    <br />
                    <a href="https://jinespere.tistory.com" target="_blank" rel="noopener noreferrer">
                        티스토리 링크
                    </a>{' '}
                    <br />
                    <a
                        href="https://www.notion.so/1b045f2f676b809c936cc8566752b66a?v=1b045f2f676b8149b0be000c78137f81"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        포에이 트러블슈팅 학습 노션 링크
                    </a>
                </S.LastText>
            </S.Content>
        </S.Container>
    );
};
export default Study4;
