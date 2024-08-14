/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import * as s from "./style";
import { useNavigate } from 'react-router-dom';

function BackButtonTop({ setShow }) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        setShow(false);
        setTimeout(() => navigate("/todo"), 400);
    }

    return (
        <div css={s.layout}>
            <button onClick={handleBackClick}>&lt; 목록</button>
        </div>
    );
}

export default BackButtonTop;