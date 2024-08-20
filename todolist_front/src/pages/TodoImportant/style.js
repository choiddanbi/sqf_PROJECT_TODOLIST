import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    width: 100%;
    height: 100%;

    & > button {
        margin-left: 10px;
    }
`;