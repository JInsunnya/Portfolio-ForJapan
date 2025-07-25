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
        padding: 8% 5%;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 0px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const Images = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
    }
`;

export const ImageRow = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100px;
        height: auto;

        @media (max-width: 768px) {
            max-width: 70px;
        }
    }
`;

export const Text = styled.div`
    flex: 1;
    font-size: 15px;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 14px;
        width: 90%;
        margin: 0 auto;
    }
`;

export const LastText = styled.div`
    flex: 1;
    font-size: 16px;
    text-align: left;

    a {
        color: #007aff;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        width: 90%;
        margin: 0 auto;
    }
`;
