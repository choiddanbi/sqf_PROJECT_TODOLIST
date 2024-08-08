import { css } from "@emotion/react";

export const container = css`
    position: relative;
    box-sizing: border-box;
    padding-top: 45px;
    padding-bottom: 15px;
    height: 100%;
    background-color: #efefef;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;