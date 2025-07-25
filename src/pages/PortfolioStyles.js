import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Aboutme = styled.div`
    font-size: 35px;
    margin-top: 10%;
    margin-bottom: 3%;
`;

export const Activity = styled.div`
    font-size: 35px;
    margin-top: 15%;
    margin-bottom: 3%;
`;

export const Projects = styled.div`
    font-size: 35px;
    margin-top: 10%;
    margin-bottom: 3%;
`;

export const Skills = styled.div`
    font-size: 35px;
    margin-top: 10%;
    margin-bottom: 3%;
`;

export const Study = styled.div`
    font-size: 35px;
    margin-top: 10%;
    margin-bottom: 3%;
`;

export const Contact = styled(Skills)``;
