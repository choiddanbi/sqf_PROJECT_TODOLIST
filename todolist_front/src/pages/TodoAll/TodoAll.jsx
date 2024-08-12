import React, { useEffect, useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';
import YearGroup from '../../components/YearGroup/YearGroup';

function TodoAll(props) {
    const [ isShow, setShow ] = useState(true);
    const [ todolistAll ] = useRecoilState(todolistAtom);
    const [ calendar, setCalendar ] = useState([]);

    useEffect(() => {
        const obj = {
            "a": {
                "test1": 10,
                "test2": 20,
                "test3": 30,
                "test4": 40,
            },
            "b": {
                "test5": 50,
                "test6": 60,
                "test7": 70,
                "test8": 80,
            },
        }

        const objList = Object.entries(obj);
        for(let o of objList) {
            const key = o[0];
            const value = Object.entries(o[1]);

            console.log("key: " + key);
            console.log("value: " + value);

            for(let e of value) {
                const key2 = e[0];
                const value2 = e[1];
                console.log("key2: " + key2);
                console.log("value2: " + value2);
            }
        }


    }, []);

    useEffect(() => {
        const calendarData = {};
        for(let todo of todolistAll.todolist) {
            const dateTime = todo.todoDateTime;
            const year = dateTime.slice(0, 4);
            const month = dateTime.slice(5, 7);

            if(!calendarData[year]) {
                calendarData[year] = {};
            }
            if(!calendarData[year][month]) {
                calendarData[year][month] = [];
            }

            calendarData[year][month].push(todo);
        }
    
        setCalendar(<YearGroup calendarData={calendarData} />);

    }, [todolistAll]);


    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <BackButtonTop setShow={setShow} />
                <PageTitle title={MENUS.all.title} color={MENUS.all.color} />
                {calendar}
            
            </MainContainer>
        </PageAnimationLayout>
    );
}

export default TodoAll;