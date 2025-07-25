import React from 'react';
import * as H from './HeaderStyles.js';

const Header = ({ onScroll }) => {
    const scrollTo = (ref) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <H.Container>
            <H.Left>
                <H.Name>Kim Jinseon</H.Name>
            </H.Left>
            <H.Right>
                <H.Aboutme onClick={() => scrollTo(onScroll.aboutRef)}>About me</H.Aboutme>
                <H.Activity onClick={() => scrollTo(onScroll.activityRef)}>Activity</H.Activity>
                <H.Project onClick={() => scrollTo(onScroll.projectRef)}>Project</H.Project>
                <H.Skills onClick={() => scrollTo(onScroll.skillsRef)}>Skills</H.Skills>
                <H.Study onClick={() => scrollTo(onScroll.studyRef)}>Study</H.Study>
                <H.Contact onClick={() => scrollTo(onScroll.contactRef)}>Contact</H.Contact>
            </H.Right>
        </H.Container>
    );
};
export default Header;
