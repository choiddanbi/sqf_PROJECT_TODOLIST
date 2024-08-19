/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ConfrimButtonTop({ onSubmit, onCancel, disabled }) {

    const handleCancleClick = () => {
        onCancel();
    }

    const handleSubmitClick = () => {
        onSubmit();
    }


    
    return (
        <div css={s.layout}>
            <button onClick={handleCancleClick}>취소</button>
            <button onClick={handleSubmitClick} disabled={disabled}>완료</button>
        </div>
    );
}

export default ConfrimButtonTop;