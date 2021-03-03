import { caseConstant } from '../Actions/constants';

const intitialState = {
    cases: []
}

export default function casesReducer(state=intitialState, action) {
    switch(action.type) {
        case caseConstant.PATIENT_FETCH_CASES_REQUEST:
            return { ...state }
        case caseConstant.PATIENT_FETCH_CASES_SUCCESS:
            console.log('cases reducer',action.payload );
            return { cases: action.payload }
        case caseConstant.PATIENT_FETCH_CASES_FAILURE:
            return { ...state }
        default:
            return state;
    }
}
