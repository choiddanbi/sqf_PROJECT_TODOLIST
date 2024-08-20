/** @jsxImportSource @emotion/react */
import { useRecoilState, useSetRecoilState } from "recoil";
import { changeCheckTodoStatus } from "../../apis/todoApis/modifyTodoApi";
import * as s from "./style";
import { refreshTodolistAtom } from "../../atoms/todolistAtoms";
import { modifyTodoAtom, selectedCalendarTodoAtom } from "../../atoms/calendarAtoms";
import { useEffect } from "react";
import ReactSelect from "react-select";
import FullRedButton from "../FullRedButton/FullRedButton";
import { deleteTodoApi } from "../../apis/todoApis/deleteTodoApi";

function TodoBox({ todo }) { // 원본 todo
    const importantOptions = [
        { label: "🟣 " + "중요함", value: 1, },
        { label: "⚪ " + "중요하지않음", value: 2, },
    ];

    const busyOptions = [
        { label: "🔴 " + "급함", value: 1, },
        { label: "⚪ " + "급하지않음", value: 2, },
    ];

    const setRefresh = useSetRecoilState(refreshTodolistAtom); 
    const [ selectedTodo, setSelectedTodo ] = useRecoilState(selectedCalendarTodoAtom);
    const [ modifyTodo, setModifyTodo ] = useRecoilState(modifyTodoAtom); // 수정본 todo, 최초 초기화


    useEffect(() => {
        if(selectedTodo === todo.todoId) {
            setModifyTodo({
                ...todo,
                todoDateTime: todo.todoDateTime.replaceAll(" ", "T") // YYYY-MM-DD HH:MM 를 YYYY-MM-DDTHH:MM로 다시 돌려놓아야함
            });
        }   
    }, [selectedTodo]); // 수정하다가 다른 곳 누르면 기존꺼 초기화

    const handleCheckBoxOnChange = async (e) => { // changeCheckTodoStatus가 비동기라서 동기처리 해주기 위해서 await!
        await changeCheckTodoStatus(e.target.value); // todo.todoId 로 작성도 가능, 비동기 -> 동기
        setRefresh(true); // changeCheckTodoStatus() 실행 후 setRefresh 실행
    }

    // h2 태그는 value 가 없기 때문에 todoId로 바로 받아온다
    // 단일 매개변수 ?????? ㅠㅠ
    const handleSelectTodoClick = (todoId) => {
        setSelectedTodo(todoId);
    }
    
    const handleModifyChange = (e) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            [e.target.name] : e.target.value 
        }));
    }

    const handleImportantSelectOnChange = (option) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            important: option.value
        }));
    }

    const handleBusySelectOnChange = (option) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            busy: option.value
        }));
    }

    const handleDeleteClick = async() => {
        await deleteTodoApi(todo.todoId);
        setRefresh(true);
        setSelectedTodo(0);
    }
    // 또는 async(todoId) => { await deleteTodoApi(todoId);} 도 가능

    return <div css={s.todoBox}>
        <div css={s.todoTitleBox}>
            <div css={s.todoCheckBox}>
                <input type="checkbox" 
                id={todo.todoId} 
                checked={todo.status === 2} 
                onChange={handleCheckBoxOnChange}
                value={todo.todoId} />
                <label htmlFor={todo.todoId}></label>
            </div>
            <div css={s.todoTitleAndTime}>
                {
                    selectedTodo === todo.todoId 
                    ? <input type="text" name="title" value={modifyTodo.title} onChange={handleModifyChange}/>
                    : <h2 onClick={() => handleSelectTodoClick(todo.todoId)}>{todo.title}</h2>
                }
                <span>{todo.todoDateTime.slice(11)}</span>
            </div>
        </div>
        <div css={s.todoSubBox}>
            {
                selectedTodo === todo.todoId && // 앞 조건이 참이면 뒤에꺼 보여줌, false면 아예 안보여줌
                <>
                    <div css={s.contentBox}>
                        <h3>메모</h3>
                        <textarea value={modifyTodo.content} name="content" id="" onChange={handleModifyChange}></textarea>
                    </div>
                    <div>
                        <ReactSelect
                        onChange={handleImportantSelectOnChange}
                        styles={{
                            control: (style) => ({
                                ...style, 
                                marginBottom: "5px",
                                border: "none", 
                                outline: "none", 
                                boxShadow: "none",
                                backgroundColor: "#f5f5f5",
                                cursor: "pointer"
                            }),
                            menu: (style) => ({
                                ...style,
                                backgroundColor: "#f5f5f5"
                            }),
                            option: (style) => ({
                                ...style,
                                cursor: "pointer"
                            })
                        }}
                        options={importantOptions}
                        value={importantOptions.filter(option => option.value === modifyTodo.important)[0]}                        
                    />

                        <ReactSelect
                            onChange={handleBusySelectOnChange}
                            styles={{
                                control: (style) => ({
                                    ...style, 
                                    marginBottom: "10px",
                                    border: "none", 
                                    outline: "none", 
                                    boxShadow: "none",
                                    backgroundColor: "#f5f5f5",
                                    cursor: "pointer"
                                }),
                                menu: (style) => ({
                                    ...style,
                                    backgroundColor: "#f5f5f5"
                                }),
                                option: (style) => ({
                                    ...style,
                                    cursor: "pointer"
                                })
                            }}
                            options={busyOptions}
                            value={busyOptions.filter(option => option.value === modifyTodo.busy)[0]}
                        />
                        <div css={s.deleteButton}>
                            <FullRedButton onClick={() => handleDeleteClick(todo.todoId)}>삭제하기</FullRedButton>
                        </div>
                    </div>
                </>
            }
        </div>
    </div>
}

function TodoDateGroup({ date, todos }) {
    return <>
        <h2 css={s.dateTitle}>{date}</h2>
        <div>
            {
                todos.map(todo => <TodoBox key={todo.todoId} todo={todo} />)
            }
        </div>
    </>
}

function TodoMonthGroup({ month, dateOfCalendarData }) {
    const entriesOfDate = Object.entries(dateOfCalendarData);

    return <>
        <h2 css={s.monthTitle}>{month}월</h2>
        <div>
            {
                entriesOfDate.map(([date, todos]) => 
                <TodoDateGroup key={date} date={date} todos={todos} />)
            }
        </div>
    </>
}

function TodoYearGroup({ year, monthOfCalendarData }) {
    const entriesOfMonth = Object.entries(monthOfCalendarData); /*객체를 반복 돌리려고 entrie로 바꿔줌 ( 배열로 바꿔줌 )*/

    return <>
        <h2 css={s.yearTitle}>{year}년</h2>
        <div>
            {
                entriesOfMonth.map(([month, dateOfCalendarData]) => 
                <TodoMonthGroup key={year + month} month={month} dateOfCalendarData={dateOfCalendarData} />)
            }
        </div>
    </>
}

function TodoCalendar({ calendarData }) {
    const [ selectedTodo, setSelectedTodo ] = useRecoilState(selectedCalendarTodoAtom);
    const entriesOfCalendarData = Object.entries(calendarData);
    
    useEffect(() => {
        setSelectedTodo(0);
    }, []);

    /* useEffect 대신 이렇게 작성도 가능
    if(!!selectedTodo) { //0이 아닐때
        setSelectedTodo(0);
    }*/
    
    return (
        <div css={s.layout}>
            {
                entriesOfCalendarData.map(([year, monthOfCalendarData]) => 
                <TodoYearGroup key={year} year={year} monthOfCalendarData={monthOfCalendarData} />) /*TodoYearGroup가 return 값*/
            }
        </div>
    );
}

export default TodoCalendar;