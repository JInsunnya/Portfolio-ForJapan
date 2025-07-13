import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from './AboutmeStyles.js';
import Name from '../assets/Name.svg';
import Calender from '../assets/Calender.svg';
import Location from '../assets/Location.svg';
import Contact from '../assets/Contact.svg';
import Email from '../assets/Email.svg';
import Education from '../assets/Education.svg';

const Aboutme = () => {
    return (
        <A.Container>
            <A.TopGroup>
                <A.Name>
                    <A.NameImg>
                        <img src={Name} />
                    </A.NameImg>
                    <A.NameText>
                        <A.NameLabel>이름</A.NameLabel>
                        <A.NameValue>김진선</A.NameValue>
                    </A.NameText>
                </A.Name>
                <A.BirthDate>
                    <A.BirthDateImg>
                        <img src={Calender} />
                    </A.BirthDateImg>
                    <A.BirthDateText>
                        <A.BirthDateLabel>생년월일</A.BirthDateLabel>
                        <A.BirthDateValue>01.07.28</A.BirthDateValue>
                    </A.BirthDateText>
                </A.BirthDate>
                <A.Location>
                    <A.LocationImg>
                        <img src={Location} />
                    </A.LocationImg>
                    <A.LocationText>
                        <A.LocationLabel>거주</A.LocationLabel>
                        <A.LocationValue>경기도 화성시</A.LocationValue>
                    </A.LocationText>
                </A.Location>
            </A.TopGroup>
            <A.BottomGroup>
                <A.Contact>
                    <A.ContactImg>
                        <img src={Contact} />
                    </A.ContactImg>
                    <A.ContactText>
                        <A.ContactLabel>연락처</A.ContactLabel>
                        <A.ContactValue>
                            <a href="tel:010-5781-5754">010-5781-5754</a>
                        </A.ContactValue>
                    </A.ContactText>
                </A.Contact>
                <A.Email>
                    <A.EmailImg>
                        <img src={Email} />
                    </A.EmailImg>
                    <A.EmailText>
                        <A.EmailLabel>이메일</A.EmailLabel>
                        <A.EmailValue>
                            <a href="mailto:jsk5754@naver.com">jsk5754@naver.com</a>
                        </A.EmailValue>
                    </A.EmailText>
                </A.Email>
                <A.Education>
                    <A.EducationImg>
                        <img src={Education} />
                    </A.EducationImg>
                    <A.EducationText>
                        <A.EducationLabel>학력</A.EducationLabel>
                        <A.EducationValue>
                            한국외국어대학교 <br />
                            프랑스응용어문학전공, <br />
                            AI융합전공(SoftWare&AI)
                        </A.EducationValue>
                    </A.EducationText>
                </A.Education>
            </A.BottomGroup>
        </A.Container>
    );
};
export default Aboutme;
