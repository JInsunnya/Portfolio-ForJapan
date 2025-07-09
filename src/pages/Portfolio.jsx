import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as P from './PortfolioStyles.js';
import Header from '../components/Header.jsx';
import Aboutme from '../components/Aboutme.jsx';
import Activity from '../components/Activity.jsx';
import Project1 from '../components/Projects1.jsx';
import Project2 from '../components/Projects2.jsx';
import Project3 from '../components/Projects3.jsx';
import Project4 from '../components/Projects4.jsx';
import Skills from '../components/Skills.jsx';
import Study1 from '../components/Study1.jsx';
import Study2 from '../components/Study2.jsx';
import Study3 from '../components/Study3.jsx';
import Study4 from '../components/Study4.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const Portfolio = () => {
    return (
        <P.Container>
            <Header />
            <Aboutme />
            <P.Activity>ACTIVITY</P.Activity>
            <Activity />
            <P.Projects>PROJECTS</P.Projects>
            <Project1 />
            <Project2 />
            <Project3 />
            <Project4 />
            <P.Skills>SKILLS</P.Skills>
            <Skills />
            <P.Study>STUDY</P.Study>
            <Study1 />
            <Study2 />
            <Study3 />
            <Study4 />
            <P.Contact>CONTACT</P.Contact>
            <Contact />
            <Footer />
        </P.Container>
    );
};
export default Portfolio;
