import React from 'react';
import { Table } from 'reactstrap';

function CaseDetails() {
    return (
        <div>
            <Table striped hover>
                <thead className='tableHead'> 
                    <tr>
                        <th>Case_id</th>
                        <th>Date</th>
                        <th>Case Detail</th>
                        <th>Consulted Doctor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">348539039</th>
                        <td>07/01/2017</td>
                        <td>Dengue, High favour and platelets level goes very low(51000)</td>
                        <td>dr. Chandni Nayak</td>
                    </tr>
                    <tr>
                        <th scope="row">348559052</th>
                        <td>21/03/2018</td>
                        <td>Food poisening, Vomiting and weakness in body.</td>
                        <td>dr. Kinnari Parmar</td>
                    </tr>
                    <tr>
                        <th scope="row">348539040</th>
                        <td>21/03/2019</td>
                        <td>Chikungunya, Symptoms shown in patient are fever ,joint pain ,headache, muscle pain, joint swelling and rash.</td>
                        <td>dr. Hitesh shah</td>
                    </tr>
                    <tr>
                        <th scope="row">348539041</th>
                        <td>01/06/2020</td>
                        <td>Covid-19 positive, High favour and weakness in body</td>
                        <td>dr. Jeetu patel</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ) 
}

export default CaseDetails;