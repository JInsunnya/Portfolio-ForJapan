import { styled } from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 4% 5%;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 10px;
    }
`;

export const Right = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 18px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        font-size: 16px;
        gap: 10px;
    }
`;

export const Name = styled.div`
    font-weight: bold;
`;

export const Aboutme = styled.div`
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #ff4c52;
    }
`;

export const Activity = styled.div`
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #ff4c52;
    }
`;

export const Project = styled.div`
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #ff4c52;
    }
`;

export const Skills = styled.div`
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #ff4c52;
    }
`;

export const Study = styled.div`
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #ff4c52;
    }
`;

export const Contact = styled.div`
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #ff4c52;
    }
`;
