/** @jsxImportSource @emotion/react */
import * as s from "./style";

function DashboardListItem({ title, children }) {
    return (
        <div css={s.layout}>
            <h3 css={s.title}>{title}</h3>
            { children }
        </div>
    );
}

export default DashboardListItem;