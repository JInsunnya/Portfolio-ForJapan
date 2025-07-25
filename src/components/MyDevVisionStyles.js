import { styled } from 'styled-components';

export const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    box-sizing: border-box;
    flex-direction: column;
    gap: 3rem;
    margin-top: 5%;
`;

export const EFContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3rem;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const EFImg = styled.div`
    flex: 1;
    margin-top: 1%;

    img {
        width: 260px;
        height: auto;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
`;

export const EFText = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

export const EFTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4%;
`;

export const EFDescription = styled.div`
    font-size: 16px;
    line-height: 1.5;
    padding-left: 0;
`;

export const JapanContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3rem;
    justify-content: space-between;
    gap: 2rem;
    padding: 6%;
    margin-top: -5%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const JapanImg = styled.div`
    flex: 1;
    margin-top: 1%;

    img {
        width: 260px;
        height: auto;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
`;

export const JapanText = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

export const JapanTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4%;
`;

export const JapanDescription = styled.div`
    font-size: 16px;
    line-height: 1.5;
    padding-left: 0;
`;

export const MeotsaSessionContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 6%;
    margin-top: -10%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const MeotsaSessionImg = styled.div`
    flex: 1;
    margin-top: 1%;

    img {
        width: 260px;
        height: auto;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
`;

export const MeotsaSessionText = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

export const MeotsaSessionTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4%;
`;

export const MeotsaSessionDescription = styled.div`
    font-size: 16px;
    line-height: 1.5;
    padding-left: 0;
`;
