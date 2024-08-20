/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SubPageContainer({ children }) {

    return (
        <div css={s.container} >
            {children}
        </div>
    );
}

export default SubPageContainer;