import React from 'react';
import * as M from './MyDevVisionStyles.js';
import EF from '../assets/EF.svg';
import Japan from '../assets/Japan.svg';
import MeotsaSession from '../assets/MeotsaSession.svg';

const MyDevVision = () => {
    return (
        <M.Container>
            <M.EFContent>
                <M.EFImg>
                    <img src={EF} />
                </M.EFImg>
                <M.EFText>
                    <M.EFTitle>사람을 위한 기술</M.EFTitle>
                    <M.EFDescription>
                        그동안 개발이 크게 발전해 온 것은 사람의 영역이기 때문이라고 생각합니다. <br />
                        단순한 기능 구현에 그치지 않고 사람의 진심과 가치관을 담은 서비스를 만들고 싶습니다. <br />
                        기존의 마케팅 업무의 경험을 살려 기업과 사람, 사람과 사람을 잇는 '따뜻한 연결'에 집중하고자
                        합니다.
                    </M.EFDescription>
                </M.EFText>
            </M.EFContent>
            <M.JapanContent>
                <M.JapanText>
                    <M.JapanTitle>일본에서의 커리어와 국제적 개발자</M.JapanTitle>
                    <M.JapanDescription>
                        일본어의 부드러운 소리와 억양에 언어 자체에 흥미를 갖게 되었고, 창의적이고 정체성이 뚜렷하면서도
                        예의와 배려를 중시하는 문화에도 깊은 인상을 받았습니다. <br />
                        일본을 여러 차례 여행하며, 고즈넉한 거리와 현대적인 미학이 공존하는 도시 풍경, 사계절의 매력을
                        간직한 환경에 매료되었고, 일본에 살아보고 싶다는 꿈을 갖게 되었습니다. 그 경험과 감정이 쌓여,
                        일본에서 개발자로 일하겠다는 목표가 생겼습니다. <br />
                        일본 현지 기업에서 실무 경험을 쌓고, 커뮤니케이션 가능한 수준의 일본어 실력을 기르며 다양한
                        언어와 문화 속에서 일할 수 있는 국제적 개발자로 성장하고 싶습니다.
                    </M.JapanDescription>
                </M.JapanText>
                <M.JapanImg>
                    <img src={Japan} />
                </M.JapanImg>
            </M.JapanContent>
            <M.MeotsaSessionContent>
                <M.MeotsaSessionImg>
                    <img src={MeotsaSession} />
                </M.MeotsaSessionImg>
                <M.MeotsaSessionText>
                    <M.MeotsaSessionTitle>함께 배우고 성장하는 개발자</M.MeotsaSessionTitle>
                    <M.MeotsaSessionDescription>
                        프로그래밍을 처음 시작했을 때는 HTML조차 몰랐지만 오로지 열정과 노력을 인정받아 동아리에
                        합격했고, 지금은 멋쟁이사자처럼 운영진으로 활동하며 신입 기수를 교육하고 있습니다. <br />
                        새로운 것을 배우고 직접 해 보며 실력을 쌓는 과정을 좋아하고, 모르는 것을 잘 흡수하며, 팀
                        프로젝트에서도 팀원들과 화합하고 도움을 주는 것에 적극적입니다. <br />
                        혼자 힘으로 일어서는 것이 아닌, 함께 배우고 성장하는 사람들과의 연결을 소중히 여기며, 기술적
                        성장 뿐만 아니라 함께 일하는 동료를 배려하고 돕는 개발자가 되고자 합니다.
                    </M.MeotsaSessionDescription>
                </M.MeotsaSessionText>
            </M.MeotsaSessionContent>
        </M.Container>
    );
};
export default MyDevVision;
