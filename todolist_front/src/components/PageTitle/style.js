import { css } from "@emotion/react";

export const layout = (color) => css`
    padding: 0px 15px 15px;

    & > h2 {
        font-size: 30px;
        font-weight: 600;
        color: ${color};
        cursor: default;
    }
`;