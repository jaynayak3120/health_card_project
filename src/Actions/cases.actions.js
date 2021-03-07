import axiosInstant from "../axios";
import { caseConstant } from "./constants";

export const PatientCases = () => {
    return async (dispatch) => {
        dispatch({ type: caseConstant.PATIENT_FETCH_CASES_REQUEST})

        const user = JSON.parse(localStorage.getItem('user'))
        console.log('user',user);
        try {
            if(user.patientID){
                const res = await axiosInstant.get(`user/${user.patientID}/cases`);
                console.log('cases action',res.data)
                const cases = res.data
                dispatch({ type: caseConstant.PATIENT_FETCH_CASES_SUCCESS, payload: cases })   
            }
        } catch (e) {
            dispatch({ type: caseConstant.PATIENT_FETCH_CASES_FAILURE, payload: e})
            console.log(e);
        }

        console.log('patient')
    }
}

export const FetchPatientCases = (userID) => {
    return async dispatch => {
        dispatch({ type: caseConstant.PATIENT_FETCH_CASES_REQUEST})

        const user = JSON.parse(localStorage.getItem('user'))

        try {
            const res = await axiosInstant.get(`user/${userID}`);
            localStorage.setItem('currentPatient', JSON.stringify(res.data.patient))
            console.log('patient',res.data.patient);
            const currentPatient = res.data.patient
                if(currentPatient.patientID){
                    const res1 = await axiosInstant.get(`doctor/${user.doctorID}/${currentPatient.patientID}/cases`);
                    console.log('fatch patient cases action',res1.data)
                    const cases = res1.data.cases
                    console.log('fetch patient cases action',cases);
                    dispatch({ type: caseConstant.PATIENT_FETCH_CASES_SUCCESS, payload: cases })   
                }
            console.log('fetch patient cases')
        } catch (e) {
            console.log(e);
        }
    }
}

export const DoctorCases = () => {
    return async dispatch => {
        dispatch({ type: caseConstant.DOCTOR_FETCH_CASES_REQUEST })
        const user = JSON.parse(localStorage.getItem('user'))
        try{
            if(user.doctorID){
                const res = await axiosInstant.get(`doctor/${user.doctorID}/cases`);
                console.log(res.data)
                // res.data.cases.forEach((data) => {
                //     const d = new Date(data.dateOfReport)
                //     console.log(d);
                // })
                const cases = res.data.cases
                dispatch({ type: caseConstant.DOCTOR_FETCH_CASES_SUCCESS, payload: cases })   
            }
        } catch (e) {
            console.log(e);
        }

        console.log('doctor')
    }
}


export const DoctorPostCase = (cases) => {
    return async (dispatch) => {
        dispatch({ type: caseConstant.DOCTOR_POST_CASES_REQUEST })
        const user = JSON.parse(localStorage.getItem('user'))
        try {
            const res = await axiosInstant.post(`doctor/${user.doctorID}/`+cases.userID+`/addCase`, {
                cases
            });
            if(res.status === 201){
                dispatch({ type: caseConstant.DOCTOR_POST_CASES_SUCCESS, payload: res.data.case})
            } else {
                dispatch({ type: caseConstant.DOCTOR_POST_CASES_FAILURE })
            }
        } catch(e) {
            dispatch({ type: caseConstant.DOCTOR_POST_CASES_FAILURE })
        }
    }
}