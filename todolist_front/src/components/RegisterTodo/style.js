import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color: #fafafa;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        & > h2 {
            font-weight: 600;
            cursor: default;
        }
    }
`;

export const todoDataBox = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 0px 3px #00000011;
    overflow: hidden;

    & * {
        outline: none;
        border: none;
        font-size: 15px;
        &::placeholder {
            color: #bbbbbb;
        }
    }

    & > input {
        margin-bottom: 8px;
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 8px;
    }

    & > textarea {
        height: 150px;
        resize: none;
        overflow-y: auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const dateSelect = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 0px 3px #00000011;
    overflow: hidden;

    & > input {
        outline: none;
        border: none;

        &::-webkit-calendar-picker-indicator {
            cursor: pointer;
            padding-left: 20px;
        }
    }
`;

export const importantSelect = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 0px 3px #00000011;
`;

export const line = css`
    margin: 5px 0px;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
`;