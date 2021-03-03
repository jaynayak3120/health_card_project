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

export const DoctorCases = () => {
    return async (dispatch) => {
        dispatch({ type: caseConstant.DOCTOR_FETCH_CASES_REQUEST })
        const user = JSON.parse(localStorage.getItem('user'))
        try{
            if(user.doctorID){
                const res = await axiosInstant.get(`doctor/${user.doctorID}/cases`);
                console.log(res.data)
                res.data.cases.forEach((data) => {
                    const d = new Date(data.dateOfReport)
                    console.log(d);
                })
            }
        } catch (e) {
            console.log(e);
        }

        console.log('doctor')
    }
}
