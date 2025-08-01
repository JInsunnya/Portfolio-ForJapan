import { styled } from 'styled-components';

export const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    box-sizing: border-box;
    flex-direction: column;
    border-radius: 50px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-bottom: 6%;

    @media (max-width: 768px) {
        width: 90%;
        padding: 8%;
        margin-bottom: 10%;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Images = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    img {
        width: 100%;
        border-radius: 50%;
    }
`;

export const Text = styled.div`
    margin-left: 40px;
    font-size: 20px;
    text-align: left;
    justify-content: center;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
    }
`;
