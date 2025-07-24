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
`;

export const RowTop = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`;

export const RowMiddle = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 3%;
`;

export const RowBottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: flex-start;
    margin-top: 3%;
`;

export const SkillIcon = styled.div`
    position: relative;
    display: inline-block;

    img {
        width: 60px;
        height: 60px;
        transition: filter 0.3s;
    }

    &:hover img {
        filter: grayscale(100%);
    }

    &:hover div {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
`;

export const SkillIconPWA = styled.div`
    position: relative;
    display: inline-block;

    img {
        width: 150px;
        height: 60px;
        transition: filter 0.3s;
    }

    &:hover img {
        filter: grayscale(100%);
    }

    &:hover div {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
`;

export const Label = styled.div`
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    opacity: 0;
    font-size: 13px;
    font-weight: bold;
    background: white;
    padding: 2px 6px;
    border-radius: 6px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    color: #444;
    transition: all 0.3s ease;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
`;
