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
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 0px;
`;

export const Images = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    padding: 0%;
    width: fit-content;
    margin-left: 70px;
    margin-top: -15px;
`;

export const ImageRow = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
`;

export const Text = styled.div`
    flex: 1;
    font-size: 15px;
    text-align: left;
    margin-left: -180px;
    width: 700px;
`;

export const TextCenter = styled.div`
    flex: 1;
    font-size: 16px;
    text-align: Center;
    width: 700px;

    a {
        color: #007aff;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }
`;
