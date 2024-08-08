import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import { useRecoilState } from 'recoil';
import { registerModalAtom } from '../../atoms/modalAtoms';

function RegisterModal({ containerRef }) {
    const [ isOpen, setOpen ] = useRecoilState(registerModalAtom);

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <ReactModal
            style={{
                content: {
                    position: "absolute",
                    // boxSizing: "border-box",
                    // margin: "0px auto",
                    // border: "none",
                    // width: "375px",
                    // backgroundColor: "transparent",
                },
                overlay: {
                    position: "absolute",
                    backgroundColor: "transparent"
                }
            }}
            isOpen={isOpen}
            onRequestClose={closeModal}
            parentSelector={() => containerRef.current}
        >
            
        </ReactModal>
    );
}

export default RegisterModal;