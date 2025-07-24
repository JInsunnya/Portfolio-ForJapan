import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    box-sizing: border-box;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
`;

export const Right = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const Name = styled.div`
    font-weight: bold;
`;

export const Aboutme = styled.div`
    cursor: pointer;
`;

export const Activity = styled.div`
    cursor: pointer;
`;

export const Project = styled.div`
    cursor: pointer;
`;

export const Skills = styled.div`
    cursor: pointer;
`;

export const Study = styled.div`
    cursor: pointer;
`;

export const Contact = styled.div`
    cursor: pointer;
`;
