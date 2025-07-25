import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
`;

export const Project = styled.div`
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
`;

export const Title = styled.div`
    background-color: #ff4c52;
    color: white;
    padding: 10px 35px;
    border-radius: 20px;
    width: fit-content;
    font-weight: bold;
    font-size: 18px;
`;

export const Period = styled.div`
    color: #777373;
    font-size: 15px;
`;

export const Line = styled.div`
    img {
        height: 3.8px;
    }
    margin-top: -12px;
`;

export const SubTitle = styled.h3`
    margin: 0;
    font-size: 18.5px;
    font-weight: bold;
`;

export const Role = styled.div`
    font-size: 17px;
    font-weight: bold;
`;

export const Description = styled.div`
    margin-bottom: 15px;
`;

export const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    cursor: pointer;
    margin-bottom: 15px;
`;

export const Link = styled.a`
    font-size: 0.85rem;
    color: #0066cc;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const Stack = styled.div`
    background-color: #ffe8ae;
    border-radius: 10px;
    padding: 15px;
    font-size: 12px;
    font-weight: bold;
`;
