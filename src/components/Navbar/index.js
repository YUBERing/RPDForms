import React, {useContext, useEffect} from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";
import {ContextBlocks} from "../../constant/contexts";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
    const listBlocks = useContext(ContextBlocks);

    return (
        <div className={'navbar'}>
            <div className={'navbar__leftside'}>
                <NavLink to={'/'} className={'navbar__link navbar_log-name'}>
                    RPDForms
                </NavLink>
                <div className={'navbar__link'}>
                    <DropDownMenu
                        label={'Содержание'}
                        list={listBlocks}
                    />
                </div>
                <a href={'https://sdo.ksu.edu.ru'} className={'navbar__link'}>
                    СДО
                </a>
            </div>
            <div className={'navbar__rightside'}>
                <NavLink to={'/login'} className={'navbar__login'}>
                    Войти
                </NavLink>
                <div className={'navbar__user'}>
                    что-то
                </div>
            </div>
        </div>
    );
};

export default Navbar;