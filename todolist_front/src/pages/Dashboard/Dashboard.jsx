/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import DateTitle from "../../components/Dashboard/DateTitle/DateTitle";
import MenuList from "../../components/Dashboard/MenuList/MenuList";
import Search from "../../components/Dashboard/Search/Search";
import MainContainer from "../../components/MainContainer/MainContainer";
import PageAnimationLayout from "../../components/PageAnimationLayout/PageAnimationLayout";
import RegisterTodoButton from "../../components/RegisterTodoButton/RegisterTodoButton";
import * as s from "./style";
import TodoAll from "../TodoAll/TodoAll";
import { useRecoilState, useSetRecoilState } from "recoil";
import { refreshTodolistAtom, todolistAtom } from "../../atoms/todolistAtoms";
import { getTodoAllApi, getTodoCountsApi } from "../../apis/todoApis/getTodoApi";
import { useEffect } from "react";
import NotFound from "../NotFound/NotFound";

function Dashboard(props) {
    const setTodolistAll = useSetRecoilState(todolistAtom);
    const [ refresh, setRefresh ] = useRecoilState(refreshTodolistAtom);

    const requestTodolist = async () => {
        const todolist = await getTodoAllApi();
        const counts = await getTodoCountsApi();
        setTodolistAll({
            todolist: todolist?.data,
            counts: counts?.data
        });
    }

    useEffect(() => {
        if(refresh) {
            requestTodolist();
        }
        setRefresh(false);
    }, [refresh]);

    return (
        <MainContainer>
            <div css={s.layout}>
                <header>
                    <Search />
                </header>
                <main>
                    <DateTitle />
                    <MenuList />
                </main>
                <footer>
                    <RegisterTodoButton />
                </footer>
            </div>
            <Routes>
                <Route path="/all" element={<TodoAll />} />
            </Routes>
        </MainContainer>
    );
}

export default Dashboard;