import React, {createContext, useContext, useEffect, useRef} from 'react';
import './style.scss'
import Page from "../Page";
import TitleBlock from "../Page/TitleBlock";
import Select from "../Select";
import {useDispatch, useSelector} from "react-redux";
import {getDirection} from "../../action/getDirection";
import TableG from "../TableG";
import AffirmativeBlock from "../Page/AffirmativeBlock";
import ObjectivesBlock from "../Page/ObjectivesBlock";
import BackButton from "./BackButton";
import {ContextBlocks} from "../../constant/contexts";
import PlannedOutcomesBlock from "../Page/PlannedOutcomesBlock";
import PlaceDisciplineBlock from "../Page/PlaceDisciplineBlock";

const Main = () => {
    const activeList = useSelector(state => state.active.currentActive);
    const curriculumList = useSelector(state => state.curriculum.currentCurriculum);
    const directionList = useSelector(state => state.direction.currentDirection);
    const disciplineList = useSelector(state => state.discipline.currentDiscipline);
    const profileList = useSelector(state => state.profile.currentProfile);
    const yearsList = useSelector(state => state.years.currentYears);

    const dispatch = useDispatch();

    const listBlocks = useContext(ContextBlocks);

    useEffect(() => {
        async function getDataDirection() {
            await dispatch(
                await getDirection()
            );
        }

        getDataDirection();
    }, [])

    return (
        <ContextBlocks.Provider value={listBlocks}>
            <div className={'main'}>
                <div className={'main__curriculum'} ref={listBlocks[0].ref}>
                    <Select
                        label={'Направление'}
                        list={directionList}
                        type={'direction'}

                    />
                    <Select
                        label={'Направленность'}
                        list={profileList}
                        type={'profile'}

                    />
                    <Select
                        label={'Год начала подготовки'}
                        list={yearsList}
                        type={'years'}

                    />
                    <Select
                        label={'Учебный план'}
                        list={curriculumList}
                        type={'curriculum'}

                    />
                </div>
                <div className={'main__discipline'}>
                    <Select
                        label={'Дисциплина'}
                        list={disciplineList}
                        type={'discipline'}
                    />
                </div>
                <div className={'main__table'}>
                    <TableG
                        list={activeList}
                    />
                </div>
                <div className={'main__document'}>
                    <Page>
                        <TitleBlock ref={listBlocks[1].ref}/>
                        <AffirmativeBlock ref={listBlocks[2].ref}/>
                        <ObjectivesBlock ref={listBlocks[3].ref}/>
                        <PlannedOutcomesBlock ref={listBlocks[4].ref}/>
                        <PlaceDisciplineBlock ref={listBlocks[5].ref}/>
                    </Page>
                </div>
                <BackButton/>
            </div>
        </ContextBlocks.Provider>
    );
};

export default Main;