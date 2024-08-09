/** @jsxImportSource @emotion/react */
import DateTitle from "../../components/Dashboard/DateTitle/DateTitle";
import MenuList from "../../components/Dashboard/MenuList/MenuList";
import Search from "../../components/Dashboard/Search/Search";
import MainContainer from "../../components/MainContainer/MainContainer";
import PageAnimationLayout from "../../components/PageAnimationLayout/PageAnimationLayout";
import RegisterTodoButton from "../../components/RegisterTodoButton/RegisterTodoButton";
import * as s from "./style";

function Dashboard(props) {
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
        </MainContainer>
    );
}

export default Dashboard;