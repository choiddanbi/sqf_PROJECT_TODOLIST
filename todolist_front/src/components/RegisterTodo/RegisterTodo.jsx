/** @jsxImportSource @emotion/react */
import { useSetRecoilState } from "recoil";
import * as s from "./style";
import { registerModalAtom } from "../../atoms/modalAtoms";
import ReactSelect from "react-select";
import { useState } from "react";

function RegisterTodo({closeModal}) {
    const [ todo, setTodo ] = useState({
        title: "",
        content: "",
        dateTime: "",
        important: "",
        busy: ""
    });

    const handleOnChange = (e) => {
        setTodo(todo => ({
            ...todo,
            [e.target.name]: e.target.value
        }))
    }

    const handleImportantSelectOnChange = (option) => {
        setTodo(todo => ({
            ...todo,
            important: option.value
        }))
    }

    const handleBusySelectOnChange = (option) => {
        setTodo(todo => ({
            ...todo,
            busy: option.value
        }))
    }

    return (
        <div css={s.layout}>
            <header>
                <button onClick={closeModal}>취소</button>
                <h2>새로운 할 일</h2>
                <button>추가</button>
            </header>
            <main>
                <div css={s.todoDataBox}>
                    <input type="text" name="title" placeholder="제목" onChange={handleOnChange} value={todo.title} />
                    <textarea name="content" placeholder="메모" onChange={handleOnChange} value={todo.content} ></textarea>
                </div>
                <div css={s.dateSelect}>
                    <input type="datetime-local" name="dateTime" onChange={handleOnChange} value={todo.dateTime} />
                </div>
                <div css={s.importantSelect}>
                    <ReactSelect
                        onChange={handleImportantSelectOnChange}
                        styles={{
                            control: (style) => ({
                                ...style, 
                                border: "none", 
                                outline: "none", 
                                boxShadow: "none"
                            }),
                        }}
                        options={[
                            { label: "중요함", value: "1", },
                            { label: "중요하지않음", value: "2", },
                        ]}
                    />

                    <div css={s.line}></div>

                    <ReactSelect
                        onChange={handleBusySelectOnChange}
                        styles={{
                            control: (style) => ({
                                ...style, 
                                border: "none", 
                                outline: "none", 
                                boxShadow: "none"
                            }),
                        }}
                        options={[
                            { label: "급함", value: "1", },
                            { label: "급하지않음", value: "2", },
                        ]}
                    />
                </div>
            </main>
        </div>
    );
}

export default RegisterTodo;