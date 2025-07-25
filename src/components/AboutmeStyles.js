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

    @media (max-width: 768px) {
        width: 90%;
        padding: 8%;
    }
`;

export const TopGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
        width: 100%;
    }
`;

export const BottomGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: flex-start;
    margin-top: 10%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
        width: 100%;
    }
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 230px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const NameImg = styled.div`
    width: 60px;
    height: 60px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const NameText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    text-align: left;
    font-size: 17px;
`;

export const NameLabel = styled.div`
    font-weight: bold;
`;

export const NameValue = styled.div``;

export const BirthDate = styled(Name)``;

export const BirthDateImg = styled.div`
    width: 60px;
    height: 60px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const BirthDateText = styled(NameText)``;

export const BirthDateLabel = styled(NameLabel)``;

export const BirthDateValue = styled.div``;

export const Location = styled(Name)``;

export const LocationImg = styled.div`
    width: 60px;
    height: 60px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const LocationText = styled(NameText)``;

export const LocationLabel = styled(NameLabel)``;

export const LocationValue = styled.div``;

export const Contact = styled(Name)``;

export const ContactImg = styled.div`
    width: 60px;
    height: 60px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const ContactText = styled(NameText)``;

export const ContactLabel = styled(NameLabel)``;

export const ContactValue = styled.div`
    a {
        color: inherit;
    }
`;

export const Email = styled(Name)``;

export const EmailImg = styled.div`
    width: 60px;
    height: 60px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const EmailText = styled(NameText)``;

export const EmailLabel = styled(NameLabel)``;

export const EmailValue = styled.div`
    a {
        color: inherit;
    }
`;

export const Education = styled(Name)`
    align-items: flex-start;
`;

export const EducationImg = styled.div`
    width: 60px;
    height: 60px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const EducationText = styled(NameText)``;

export const EducationLabel = styled(NameLabel)``;

export const EducationValue = styled.div``;
