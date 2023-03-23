import React, {useState} from 'react';
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {
    setRPDCurriculum,
    setRPDDirection,
    setRPDDiscipline,
    setRPDProfile,
    setRPDYears
} from "../../reducers/rpdReducer";
import {getProfile} from "../../action/getProfile";
import {getYears} from "../../action/getYears";
import {getCurriculum} from "../../action/getCurriculum";
import {getDiscipline} from "../../action/getDisipline";
import {getActive} from "../../action/getActive";

const Select = (props) => {
    const {
        label,
        list,
        type,
    } = props;

    const [value, setValue] = useState('');

    const profile = useSelector(state => state.rpd.currentProfile);

    const dispatch = useDispatch();

    const setOption = () => {
        if (type === 'discipline') {
            return list.map(
                (item, i) =>
                    <option className={'select__option'} value={item} key={i}>
                        {item[0]} {item[1]}
                    </option>
            )
        }

        return list.map(
            (item, i) =>
            <option className={'select__option'} key={i}>
            {item}
            </option>
        )
    }

    const setDis = async (value, type) => {
        setValue(value);
        switch(type) {
            case 'direction':
                dispatch(setRPDDirection(value));
                await dispatch(await getProfile(value));
                break;
            case 'profile':
                dispatch(setRPDProfile(value));
                await dispatch(await getYears(value));
                break;
            case 'years':
                dispatch(setRPDYears(value));
                await dispatch(await getCurriculum(profile, value));
                break;
            case 'curriculum':
                dispatch(setRPDCurriculum(value));
                await dispatch(await getDiscipline(value));
                break;
            case 'discipline':
                //const discList = value.split(' ');
                dispatch(setRPDDiscipline(value[1]));
                await dispatch(await getActive(value[0]));
                break;
            default:
                return null;
        }
    }

    return (
        <div className={'select'}>
            {
                label &&
                <div className={'select__label'}>
                    {label}
                </div>
            }
            <select
                className={'select__input'}
                value={value}
                onChange={(e) => setDis(e.target.value, type)}
            >
                <option className={'select__option'}></option>
                {setOption()}
            </select>
        </div>
    );
};

export default Select;