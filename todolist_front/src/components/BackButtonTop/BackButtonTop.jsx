/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';

function BackButtonTop({ setShow }) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        setShow(false);
        setTimeout(() => navigate("/"), 500);
    }

    return (
        <div css={s.layout}>
            <button onClick={handleBackClick}>&lt; 목록</button>
        </div>
    );
}

export default BackButtonTop;