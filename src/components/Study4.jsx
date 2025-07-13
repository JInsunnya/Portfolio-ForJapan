import React from 'react';
import * as S from './StudyStyles.js';

const Study4 = () => {
    return (
        <S.Container>
            <S.Content>
                <S.TextCenter>
                    어려운 문제를 여러 번 풀어본 것은 아니나, <br />
                    코딩테스트도 조금씩 틈틈이 공부하고 있었습니다. <br />
                    또한 학교에서도 자료구조, 알고리즘 강의를 수강했기에 코딩 문제들이 낯설지 않습니다. <br />
                    저의 개발자로서의 학습과 관련된 내용은 해당 링크들에서 확인하실 수 있습니다. <br />
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
                        노션 링크
                    </a>
                </S.TextCenter>
            </S.Content>
        </S.Container>
    );
};
export default Study4;
