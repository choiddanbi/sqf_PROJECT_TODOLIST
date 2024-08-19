/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';
import TodoCalendar from '../../components/TodoCalendar/TodoCalendar';
import RegisterTodoButton from '../../components/RegisterTodoButton/RegisterTodoButton';
import { modifyTodoAtom, selectedCalendarTodoAtom } from "../../atoms/calendarAtoms";
import ConfrimButtonTop from "../../components/ConfirmButtonTop/ConfirmButtonTop";
import { changeTodo } from "../../apis/todoApis/modifyTodoApi";

function TodoAll(props) {
    const [ todolistAll ] = useRecoilState(todolistAtom);
    const [ selectedTodo, setSelectedTodo ] = useRecoilState(selectedCalendarTodoAtom);
    const [ modifyTodo, setModifyTodo ] = useRecoilState(modifyTodoAtom);

    const [ isShow, setShow ] = useState(true);
    const [ calendarData, setCalendarData ] = useState({});
    const [ submitButtonDisabled, setSubmitButtonDisabled ] = useState(true);


    useEffect(() => {
        let preTodo = {
            ...(todolistAll.todolist.filter(todo => 
            todo.todoId === modifyTodo?.todoId)[0]) // 스프레드를 사용해야 깊은 복사....해야한대........ㅠㅠㅠ
        };

        preTodo = {
            ...preTodo,
            todoDateTime: preTodo?.todoDateTime?.replaceAll(" ", "T")
        }
        //const disabled = JSON.stringify(modifyTodo) === JSON.stringify(preTodo); // 객체 === 객체 는 주소비교 ( 무조건 다를거야 ) => 그래서 JSON문자열로 만들어서 비교해줘야함 (JSON.stringify), 결과는 true 아니면 false
        const disabled = JSON.stringify(modifyTodo) === JSON.stringify(preTodo) || !modifyTodo?.title?.trim(); 
        //console.log(JSON.stringify(modifyTodo.content));
        setSubmitButtonDisabled(disabled); // 값이 바뀐게 있으면 '완료버튼' 활성화
    }, [modifyTodo]);


    useEffect(() => {
        const tempCalendarData = {};

        for(let todo of todolistAll.todolist) { // Dashboard에서 recoil에 db에서 받아온 값 넣어놨음!
            const dateTime = todo.todoDateTime;
            const year = dateTime.slice(0, 4);
            const month = dateTime.slice(5, 7);
            const date = dateTime.slice(0, 10);

            if(!tempCalendarData[year]) {
                tempCalendarData[year] = {};
            }
            if(!tempCalendarData[year][month]) {
                tempCalendarData[year][month] = {};
            }
            if(!tempCalendarData[year][month][date]) {
                tempCalendarData[year][month][date] = [];
            }

            tempCalendarData[year][month][date].push(todo);
        }
        setCalendarData(tempCalendarData);
    }, [todolistAll]);


    const modifyCancel = () => {
        setSelectedTodo(0);
    }

    const modifySubmit = async() => {
        console.log(modifyTodo); // dto가 이 형태여야함
        await changeTodo(modifyTodo);
        setSelectedTodo(0);
    }


    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <div css={s.layout}>
                    {
                        selectedTodo === 0 
                        ? <BackButtonTop setShow={setShow} />
                        : <ConfrimButtonTop onCancel={modifyCancel} onSubmit={modifySubmit} disabled={submitButtonDisabled}/>
                    }
                    <PageTitle title={MENUS.all.title} color={MENUS.all.color} />
                    <TodoCalendar calendarData={calendarData} />
                    <RegisterTodoButton />
                </div>
            </MainContainer>
        </PageAnimationLayout>
    );
}

export default TodoAll;