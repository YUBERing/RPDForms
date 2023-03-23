const SET_RPDDIRECTION = 'SET_RPDDIRECTION';
const SET_RPDPROFILE = 'SET_RPDPROFILE';
const SET_RPDYEARS = 'SET_RPDYEARS';
const SET_RPDCURRICULUM = 'SET_RPDCURRICULUM';
const SET_RPDDISCIPLINE = 'SET_RPDDISCIPLINE';
const SET_RPDACTIVE = 'SET_RPDACTIVE';
const SET_RPDDEVELOPERS = 'SET_RPDDEVELOPERS';
const SET_RPDREVIEWER = 'SET_RPDREVIEWER';
const SET_RPDAFFIRMATIVE = 'SET_RPDAFFIRMATIVE';
const SET_RPDGOAL = 'SET_RPDGOAL';
const SET_RPDORDERS = 'SET_RPDORDERS';
const SET_RPDPLANNEDOUTCOMES = 'SET_RPDPLANNEDOUTCOMES';
const SET_RPDPLACEDISCIPLINE = 'SET_RPDPLACEDISCIPLINE';

const defaultState = {
    currentDirection: '',
    currentProfile: '',
    currentYears: '',
    currentCurriculum: '',
    currentDiscipline: [],
    currentActive: [],
    currentDevelopers: [''],
    currentReviewer: '',
    currentAffirmative: '',
    currentGoal: '',
    currentOrders: [''],
    currentPlannedOutcomes: {
        know: [''],
        be_able: [''],
        own: [''],
        master: [''],
    },
    currentPlaceDiscipline: {
        based: [''],
        basis: [''],
    },
}

export default function rpdReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_RPDDIRECTION:
            return {
                ...state,
                currentDirection: action.payload,
            }
        case SET_RPDPROFILE:
            return {
                ...state,
                currentProfile: action.payload,
            }
        case SET_RPDYEARS:
            return {
                ...state,
                currentYears: action.payload,
            }
        case SET_RPDCURRICULUM:
            return {
                ...state,
                currentCurriculum: action.payload,
            }
        case SET_RPDDISCIPLINE:
            return {
                ...state,
                currentDiscipline: action.payload,
            }
        case SET_RPDACTIVE:
            return {
                ...state,
                currentActive: action.payload,
            }
        case SET_RPDDEVELOPERS:
            return {
                ...state,
                currentDevelopers: action.payload,
            }
        case SET_RPDREVIEWER:
            return {
                ...state,
                currentReviewer: action.payload,
            }
        case SET_RPDAFFIRMATIVE:
            return {
                ...state,
                currentAffirmative: action.payload,
            }
        case SET_RPDGOAL:
            return {
                ...state,
                currentGoal: action.payload,
            }
        case SET_RPDORDERS:
            return {
                ...state,
                currentOrders: action.payload,
            }
        case SET_RPDPLANNEDOUTCOMES:
            return {
                ...state,
                currentPlannedOutcomes: action.payload,
            }
        case SET_RPDPLACEDISCIPLINE:
            return {
                ...state,
                currentPlaceDiscipline: action.payload,
            }
        default:
            return state
    }
}

export const setRPDDirection = direction => ({type: SET_RPDDIRECTION, payload: direction});
export const setRPDProfile = profile => ({type: SET_RPDPROFILE, payload: profile});
export const setRPDYears = years => ({type: SET_RPDYEARS, payload: years});
export const setRPDCurriculum = curriculum => ({type: SET_RPDCURRICULUM, payload: curriculum});
export const setRPDDiscipline = discipline => ({type: SET_RPDDISCIPLINE, payload: discipline});
export const setRPDActive = active => ({type: SET_RPDACTIVE, payload: active});
export const setRPDDevelopers = developers => ({type: SET_RPDDEVELOPERS, payload: developers});
export const setRPDReviewer = reviewer => ({type: SET_RPDREVIEWER, payload: reviewer});
export const setRPDAffirmative = affirmative => ({type: SET_RPDAFFIRMATIVE, payload: affirmative});
export const setRPDGoal = goal => ({type: SET_RPDGOAL, payload: goal});
export const setRPDOrders = orders => ({type: SET_RPDORDERS, payload: orders});
export const setRPDPlannedOutcomes = plannedOutcomes => ({type: SET_RPDPLANNEDOUTCOMES, payload: plannedOutcomes});
export const setRPDPlaceDiscipline = placeDiscipline => ({type: SET_RPDPLACEDISCIPLINE, payload: placeDiscipline});