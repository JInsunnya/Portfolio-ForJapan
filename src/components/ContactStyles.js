import { styled } from 'styled-components';

export const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    box-sizing: border-box;
    flex-direction: column;
    border-radius: 50px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
    margin-bottom: 10%;
`;

export const Title = styled.div`
    font-size: 20px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 7%;
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Phone = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    font-size: 19px;
`;

export const PhoneLabel = styled.div`
    font-weight: bold;
`;

export const PhoneValue = styled.div`
    a {
        color: inherit;
    }
`;

export const Email = styled.div`
    display: flex;
    gap: 45px;
    align-items: center;
    font-size: 19px;
`;

export const EmailLabel = styled.div`
    font-weight: bold;
`;

export const EmailValue = styled.div`
    a {
        color: inherit;
    }
`;
