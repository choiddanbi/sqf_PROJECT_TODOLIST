import { css } from "@emotion/react";

export const layout = (color) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-right: 10px;
    border-radius: 50%;
    padding: 5px;
    width: fit-content;
    height: fit-content;
    background-color: ${color};
    & > svg {
        font-size: 20px;
        color: white;
    }
`;