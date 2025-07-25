import { styled } from 'styled-components';

export const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    box-sizing: border-box;
    flex-direction: column;
`;

export const MeotsaHufs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const MeotsaHufsImg = styled.div`
    flex: 1;
    margin-top: 1%;

    img {
        width: 35%;
        max-width: 200px;
        height: auto;

        @media (max-width: 768px) {
            width: 60%;
            margin-bottom: 1rem;
        }
    }
`;

export const MeotsaHufsContent = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 768px) {
        width: 60%;
        margin-bottom: 1rem;
    }
`;

export const MeotsaHufsContentTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4%;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const MeotsaHufsContentSubTitle = styled.div`
    font-size: 16px;
    line-height: 1.5;
    padding-left: 0;
    li {
        text-indent: -1.4em;
        padding-left: 1.4em;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const MeotsaAdmin = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const MeotsaAdminImg = styled.div`
    flex: 1;
    margin-top: 1%;

    img {
        width: 35%;
        max-width: 200px;
        height: auto;

        @media (max-width: 768px) {
            width: 60%;
            margin-bottom: 1rem;
        }
    }
`;

export const MeotsaAdminContent = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 768px) {
        width: 60%;
        margin-bottom: 1rem;
    }
`;

export const MeotsaAdminContentTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4%;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const MeotsaAdminContentSubTitle = styled.div`
    font-size: 16px;
    line-height: 1.5;
    padding-left: 0;
    li {
        text-indent: -1.4em;
        padding-left: 1.4em;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ForA = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const ForAImg = styled.div`
    flex: 1;
    margin-top: 1%;

    img {
        width: 35%;
        max-width: 200px;
        height: auto;

        @media (max-width: 768px) {
            width: 60%;
            margin-bottom: 1rem;
        }
    }
`;

export const ForAContent = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 768px) {
        width: 60%;
        margin-bottom: 1rem;
    }
`;

export const ForAContentTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4%;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

export const ForAContentSubTitle = styled.div`
    font-size: 16px;
    line-height: 1.5;
    padding-left: 0;
    li {
        text-indent: -1.4em;
        padding-left: 1.4em;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
