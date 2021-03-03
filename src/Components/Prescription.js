import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PatientCases } from '../Actions/cases.actions';

function Prescription() {

    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(PatientCases());
    })
    const cases = useSelector(state=> state.cases.cases);
    const prescriptionRow= cases.map( (preData)=> {
        if(preData.prescDetail!=null) {
        return(
            <div className="Presc">
                <div className= "presc-header">
                    <div>{JSON.stringify(preData.dateOfPrescription)}</div>
                    <div>{JSON.stringify(preData.docID)}</div>
                </div>
                {JSON.stringify(preData.prescDetail)}
            </div>
        );}
    });

    return(
        <div>
            {prescriptionRow}
            <div className="Presc">
                <div className= "presc-header">
                    <div>02 Feb 2021</div>
                    <div>dr. Kinnari Parmar</div>
                </div>
                hey this is Prescription details!
                Water is a precious resource that nature has bestowed on Planet Earth. Water is vital for all life forms as also for all vegetation. Terrestrial life forms need water to drink. If they do not get water to drink they will perish. All aquatic creatures need water bodies to live in. Water bodies, whether they are rivers or seas or oceans, are their habitat. Vegetation needs water to survive. All vegetation will wither and die in the absence of water. Water is therefore an important resource that must be saved. We must not waste water. We must use water judiciously. way to save water Check your toilet for leaks.Stop using your toilet as an ashtray or wastebasket.Put a plastic bottle in your toilet tank.Take shorter showers.Install water-saving shower heads or flow restrictors.
            </div>

            <div className="Presc">
                <div className= "presc-header">
                    <div>12 Dec 2020</div>
                    <div>dr. Chandni Nayak</div>
                </div>
                Dengue
                Water is a precious resource that nature has bestowed on Planet Earth. Water is vital for all life forms as also for all vegetation. Terrestrial life forms need water to drink. If they do not get water to drink they will perish. All aquatic creatures need water bodies to live in. Water bodies, whether they are rivers or seas or oceans, are their habitat. Vegetation needs water to survive. All vegetation will wither and die in the absence of water. Water is therefore an important resource that must be saved. We must not waste water. We must use water judiciously. way to save water Check your toilet for leaks.Stop using your toilet as an ashtray or wastebasket.Put a plastic bottle in your toilet tank.Take shorter showers.Install water-saving shower heads or flow restrictors.
            </div>
        </div>
    ); 
}

export default Prescription;