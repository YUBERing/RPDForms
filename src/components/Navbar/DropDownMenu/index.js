import React, {useEffect, useRef, useState} from 'react';
import './style.scss';
import uniqid from "uniqid";

const DropDownMenu = (props) => {
    const {
        label,
        list,
    } = props;

    const [isOpen, setOpen] = useState(false);
    const refMenu = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            if (refMenu.current && !refMenu.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick)
        }
    },
        [refMenu])

    const onClickItem = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 80,
            behavior: 'smooth',
        })
        setOpen(!isOpen);
    }

    const onOpenMenu = () => {
        setOpen(!isOpen);
    }

    const getList = () => {
        return list.map((item) => {
            return (
                <div
                    className={'dropdown-menu__item'}
                    key={uniqid()}
                    onClick={() => onClickItem(item.ref)}
                >
                    {item.label}
                </div>
            )
        })
    }

    const hide = () => {
        console.log('exit')
    }

    return (
        <div
            className={'dropdown-menu'}
            ref={refMenu}
        >
            <div
                className={'dropdown-menu__label'}
                onClick={onOpenMenu}
            >
                {label}
            </div>
            {
                isOpen &&
                <div className={'dropdown-menu__list'}>
                    {
                        getList()
                    }
                </div>
            }
        </div>
    );
};

export default DropDownMenu;