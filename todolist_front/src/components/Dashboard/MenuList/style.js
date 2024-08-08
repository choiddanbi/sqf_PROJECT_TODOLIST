import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

export const menuContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    border-radius: 8px;
    width: 49%;
    height: 80px;
    padding: 10px 20px;
    background-color: white;
    box-shadow: 0px 0px 3px #00000011;
    cursor: pointer;
    &:active {
        box-shadow: 0px 0px 3px #00000055 inset;
    }
`;

export const menuTop = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    & > p {
        font-size: 24px;
        font-weight: 600;
        line-height: 1;
    }
`;

export const menuBottom = css`
    color: #888888;
    font-weight: 600;
`;