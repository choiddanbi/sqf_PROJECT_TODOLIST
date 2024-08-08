/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoSearchOutline } from "react-icons/io5";

function Search(props) {
    return (
        <div css={s.searchInputBox}>
            <IoSearchOutline />
            <input type="text" />
            <button>취소</button>
        </div>
    );
}

export default Search;