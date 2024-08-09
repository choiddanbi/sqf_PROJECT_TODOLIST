import { css } from "@emotion/react";

export const layout = (isShow) => css`
    @keyframes show {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%);
        }
    }

    @keyframes hide {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(100%);
        }
    }
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    animation: ${isShow ? "show" : "hide"} 0.5s 1;
`;