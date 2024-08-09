/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import DashboardListItem from "../DashboardListItem/DashboardListItem";
import Icon from "../Icon/Icon";
import * as s from "./style";
import { BsCalendar4Week, BsCalendarEvent, BsCalendarCheck  } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { todolistAtom } from "../../../atoms/todolistAtoms";
import { MENUS } from "../../../constants/menus";

function Menu({ path, icon, color, title, count }) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(path);
    }

    return (
        <div css={s.menuContainer} onClick={handleClick}>
            <div css={s.menuTop}>
                <Icon color={color}>{icon}</Icon>
                <p>{count}</p>
            </div>
            <h3 css={s.menuBottom}>
                {title}
            </h3>
        </div>
    )
}

function MenuList(props) {
    const [ todolist ] = useRecoilState(todolistAtom);

    return (
        <DashboardListItem title={"Menu"}>
            <div css={s.layout}>
                <Menu 
                    icon={<BsCalendarEvent />} 
                    path={MENUS.today.path}
                    color={MENUS.today.color} 
                    title={MENUS.today.title} 
                    count={todolist.counts.today} />
                <Menu 
                    icon={<BsCalendar4Week />} 
                    path={MENUS.all.path}
                    color={MENUS.all.color} 
                    title={MENUS.all.title} 
                    count={todolist.counts.all} />
                <Menu 
                    icon={<BsCalendar4Week />} 
                    path={MENUS.important.path}
                    color={MENUS.important.color} 
                    title={MENUS.important.title} 
                    count={todolist.counts.important} />
                <Menu 
                    icon={<BsCalendar4Week />} 
                    path={MENUS.busy.path}
                    color={MENUS.busy.color} 
                    title={MENUS.busy.title}
                    count={todolist.counts.busy} />
                <Menu 
                    icon={<BsCalendarCheck />} 
                    path={MENUS.complete.path}
                    color={MENUS.complete.color} 
                    title={MENUS.complete.title}
                    count={todolist.counts.complete} />
            </div>
        </DashboardListItem>
    );
}

export default MenuList;