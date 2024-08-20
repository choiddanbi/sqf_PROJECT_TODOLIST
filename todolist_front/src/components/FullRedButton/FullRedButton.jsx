/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from 'react';

function FullRedButton({ children, onClick }) {

    return (
        <button css={s.layout} onClick={onClick}>
            {children}
        </button>
    );
}

export default FullRedButton;