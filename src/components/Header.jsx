import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as H from './HeaderStyles.js';

const Header = () => {
    const navigate = useNavigate();

    const handleAboutme = () => {
        navigate();
    };

    const handleActivity = () => {
        navigate();
    };

    const handleProject = () => {
        navigate();
    };

    const handleSkills = () => {
        navigate();
    };

    const handleContact = () => {
        navigate();
    };

    return (
        <H.Container>
            <H.Left>
                <H.Name>Kim Jinseon</H.Name>
            </H.Left>
            <H.Right>
                <H.Aboutme>About me</H.Aboutme>
                <H.Activity>Activity</H.Activity>
                <H.Project>Project</H.Project>
                <H.Skills>Skills</H.Skills>
                <H.Contact>Contact</H.Contact>
            </H.Right>
        </H.Container>
    );
};
export default Header;
