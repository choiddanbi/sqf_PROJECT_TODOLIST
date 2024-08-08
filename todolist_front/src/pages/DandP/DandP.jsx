/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const parent = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const parent2 = css`
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const child = css`
    box-sizing: border-box;
    border: 4px solid red;
    width: 150px;
    height: 50px;
    background-color: white;

    &:nth-of-type(1) {
        background-color: pink;
        align-self: flex-start;
    }

    &:nth-of-type(3) {
        background-color: pink;
        align-self: flex-end;
    }

    &:nth-of-type(5) {
        background-color: pink;
        align-self: flex-start;
    }
`;

const child2 = css`
    box-sizing: border-box;
    border: 4px solid blue;
    width: 300px;
    height: 100%;
    flex-shrink: 0;
    
    &:nth-of-type(1) {
        flex-shrink: 2;
        background-color: yellow;
    }
    &:nth-of-type(2) {
        flex-shrink: 1;
        background-color: #c1ecc1;
    }
    &:nth-of-type(3) {
        background-color: purple;
    }
`;

const inputBox = css`
    position: relative;
`;

const input = css`
    width: 300px;
    height: 50px;
    padding-right: 70px;

    & + button {
        position: absolute;
        top: 50%;
        right: 10px;
        z-index: 0;
        transform: translateY(-50%);
        background-color: pink;
    }
`;

function DandP(props) {
    return (
        <>
            <div css={parent}>
                <div css={child}>1</div>
                <div css={child}>2</div>
                <div css={child}>3</div>
                <div css={child}>4</div>
                <div css={child}>5</div>
                <div css={inputBox}>
                    <input type="text" css={input} />
                    <button>OK</button>
                </div>
            </div>
            <div css={parent2}>
                <div css={child2}></div>
                <div css={child2}></div>
                <div css={child2}></div>
            </div>
        </>
    );
}

export default DandP;