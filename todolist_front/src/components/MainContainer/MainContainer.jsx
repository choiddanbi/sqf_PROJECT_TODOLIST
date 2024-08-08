/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from "react";
import * as s from "./style";
import ReactModal from "react-modal";
import RegisterModal from "../RegisterModal/RegisterModal";

function MainContainer({ children }) {
    const [ scroll, setScroll ] = useState({
        startY: 0,
        isDown: false,
    });
    const containerRef = useRef();

    useEffect(() => {
        if(!!containerRef) {
            ReactModal.setAppElement(containerRef.current);
        }
    }, [containerRef]);

    const handleDown = useCallback((e) => setScroll({
        startY: e.clientY,
        isDown: true,
    }), []);

    const handleUp = useCallback((e) => setScroll({
        startY: 0,
        isDown: false,
    }), []);

    const handleMove = (e) => {
        if(scroll.isDown){
            let moveY = (e.clientY - scroll.startY) * -1;
            const scrollTop = containerRef.current.scrollTop;
            containerRef.current.scrollTop = scrollTop + moveY;
        }
    }

    return (
        <div css={s.container} 
            onMouseMove={handleMove} 
            onMouseDown={handleDown}
            onMouseUp={handleUp}
            ref={containerRef} >
            <RegisterModal containerRef={containerRef}/>
            {children}
        </div>
    );
}

export default MainContainer;