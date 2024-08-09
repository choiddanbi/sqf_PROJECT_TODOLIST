/** @jsxImportSource @emotion/react */
import * as s from "./style";

function PageTitle({title, color}) {
    return (
        <div css={s.layout(color)}>
            <h2>{title}</h2>
        </div>
    );
}

export default PageTitle;