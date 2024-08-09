/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";

function PageAnimationLayout({ isShow, children }) {

    return (
        <div css={s.layout(isShow)}>
            { children }
        </div>
    );
}

export default PageAnimationLayout;