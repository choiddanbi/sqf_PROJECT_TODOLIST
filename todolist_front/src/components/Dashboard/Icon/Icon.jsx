/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Icon({ color, children }) {
    return (
        <div css={s.layout(color)}>
            {children}
        </div>
    );
}

export default Icon;