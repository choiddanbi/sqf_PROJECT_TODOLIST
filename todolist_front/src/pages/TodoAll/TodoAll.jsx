import React, { useEffect, useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';

function TodoAll(props) {
    const [ isShow, setShow ] = useState(true);
    const [ yearList, setYearList ] = useState([]);
    const [ monthList, setMonthList ] = useState([]);
    const [ todolistAll ] = useRecoilState(todolistAtom);

    useEffect(() => {
        const preYears = todolistAll.todolist.map(todo => todo.todoDateTime.slice(0, 4))
    }, [todolistAll]);


    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <BackButtonTop setShow={setShow} />
                <PageTitle title={MENUS.all.title} color={MENUS.all.color} />

            
            </MainContainer>
        </PageAnimationLayout>
    );
}

export default TodoAll;