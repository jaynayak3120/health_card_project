import React from 'react';
import { Table } from 'reactstrap';

function Report() {

    return(
        <Table striped hover>
            <thead className='tableHead'> 
                <tr>
                    <th>Report_id</th>
                    <th>Date</th>
                    <th>Reports</th>
                    <th>Laboratory</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">348539039</th>
                    <td>07/01/2017</td>
                    <td> 
                        <object data='D:\Certificates\Coursera Bootstrap4.pdf' type='aplication/pdf' width='100%' height='100%'>
                        <iframe src="D:\Certificates\Coursera Bootstrap4.pdf" width="100%" height="100%"></iframe>
                        </object>
                        {/*<Button onClick={openModal} color= "danger">Detail</Button>*/}
                    </td>
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
    );
}

export default Report;