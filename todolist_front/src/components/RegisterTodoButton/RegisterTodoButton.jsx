/** @jsxImportSource @emotion/react */
import { useSetRecoilState } from "recoil";
import * as s from "./style";
import { FaCirclePlus } from "react-icons/fa6";
import { registerModalAtom } from "../../atoms/modalAtoms";

function RegisterTodoButton(props) {
    const setOpen = useSetRecoilState(registerModalAtom);

    const handleModalOpenClick = () => {
        setOpen(true);
    }

    return (
        <button css={s.layout} onClick={handleModalOpenClick}>
            <FaCirclePlus />
            <span>새로운 할 일</span>
        </button>
    );
}

export default RegisterTodoButton;