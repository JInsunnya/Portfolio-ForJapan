import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from './ActivityStyles.js';
import MeotsaHufs from '../assets/MeotsaHufs.svg';
import Meotsa from '../assets/Meotsa.svg';
import ForA from '../assets/ForA.svg';

const Activity = () => {
    return (
        <A.Container>
            <A.MeotsaHufs>
                <A.MeotsaHufsImg>
                    <img src={MeotsaHufs} />
                </A.MeotsaHufsImg>
                <A.MeotsaHufsContent>
                    <A.MeotsaHufsContentTitle>
                        멋쟁이사자처럼 대학 한국외국어대학교 서울 12기 <br />- (2024년 3월 - 2025년 1월)
                    </A.MeotsaHufsContentTitle>
                    <A.MeotsaHufsContentSubTitle>
                        <li>HTML, CSS, JavaScript, React를 활용한 웹 개발을 학습했습니다.</li>
                        <li>
                            학습한 내용을 바탕으로 학교 내 미니해커톤, 팀 프로젝트, 그리고 멋쟁이사자처럼 중앙해커톤
                            등에 참여하며 GitHub 협업 및 개발 역량을 키웠습니다.
                        </li>
                        <li>
                            해커톤과 프로젝트 경험을 통해 기획부터 개발, 배포까지의 전체 개발 프로세스를 경험하며 실무에
                            가까운 협업 방식을 익혔습니다.
                        </li>
                        <li>
                            협업 시 기능별 브랜치 전략과 명확한 커밋 메시지 작성 방식을 활용하여 원활한 코드 관리 경험을
                            쌓았습니다.
                        </li>
                        <li>방학 중 모각코(모여서 각자 코딩) 프로그램에 참여하며 꾸준히 개발 역량을 키웠습니다.</li>
                    </A.MeotsaHufsContentSubTitle>
                </A.MeotsaHufsContent>
            </A.MeotsaHufs>
            <A.MeotsaAdmin>
                <A.MeotsaAdminImg>
                    <img src={Meotsa} />
                </A.MeotsaAdminImg>
                <A.MeotsaAdminContent>
                    <A.MeotsaAdminContentTitle>
                        멋쟁이사자처럼 대학 한국외국어대학교 서울 13기 운영진 <br />- (2025년 1월 - 진행 중)
                    </A.MeotsaAdminContentTitle>
                    <A.MeotsaAdminContentSubTitle>
                        <li>
                            프론트엔드 개발 경험 없이 동아리 활동을 시작했지만, 열정과 노력으로 성장하여 13기 신입
                            기수에게 개발을 가르쳐 주는 운영진으로 활동하고 있습니다.
                        </li>
                        <li>
                            프론트엔드 개발 교육을 위한 세션 자료를 제작하고 있으며, 3월부터 신입 기수를 교육하고
                            있습니다.
                        </li>
                        <li>
                            13기 활동의 원활한 진행을 위해 전반적인 일정 기획, 프로젝트 기획 등을 운영진들과 협업하며
                            수행하고 있습니다.
                        </li>
                    </A.MeotsaAdminContentSubTitle>
                </A.MeotsaAdminContent>
            </A.MeotsaAdmin>
            <A.ForA>
                <A.ForAImg>
                    <img src={ForA} />
                </A.ForAImg>
                <A.ForAContent>
                    <A.ForAContentTitle>
                        스타트업 포에이 창업 멤버 <br />- (2025년 1월 - 진행 중)
                    </A.ForAContentTitle>
                    <A.ForAContentSubTitle>
                        <li>스타트업 포에이랩스(For A labs) 팀에서 iOS 앱 개발자 및 PM으로 활동하고 있습니다.</li>
                        <li>
                            TypeScript, React Native, Xcode를 활용하여 포에이 앱을 개발 및 빌드하고 있으며, 기존 테스트
                            빌드 버전들의 문제를 해결해 앱 정식 출시에 성공했습니다.
                        </li>
                        <li>
                            TestFlight를 활용하여 앱 테스트를 운영했고, 실제 출시까지 도맡은 프론트엔드 핵심 멤버입니다.
                            출시 이후에도 지속적으로 앱 업데이트를 담당하고 있습니다.
                        </li>
                        <li>
                            GitHub 기반으로 브랜치 전략(develop, release, hotfix)을 설계해 기능별 작업과 배포 버전
                            관리를 체계화했으며, PR 템플릿을 도입하여 팀 내 코드 리뷰와 협업 효율성을 높였습니다.
                        </li>
                        <li>
                            기획, 디자인, 백엔드, AI 팀과 협업하고 현재도 제품 완성도 향상에 기여하며 포에이의 발전을
                            위해 활동 중입니다.
                        </li>
                        <li>최근 PM 직무에도 관심을 갖고 PM 업무도 함께 수행하고 있습니다.</li>
                        <li>
                            개발 회의를 주도하고, 일정 수립 및 기능 명세서 등의 서류를 작성하며 프로젝트 매니지먼트
                            업무도 함께 수행하고 있습니다.
                        </li>
                    </A.ForAContentSubTitle>
                </A.ForAContent>
            </A.ForA>
        </A.Container>
    );
};
export default Activity;
