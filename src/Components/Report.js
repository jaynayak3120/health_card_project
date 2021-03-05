import { Button } from 'reactstrap';
import React, { useState } from 'react';
import { Table } from 'reactstrap';
import axiosInstant from '../axios'

function Report() {
    const [pdfData, setPDFData] = useState(null);

    const getData = () => {
        const params = "D://NodeJS//healthcard-backend//src//reports//Heart_Report.pdf"
        console.log(params);
        const url = {
            reportID: 180108002,
            report: 1
        }
        axiosInstant.get(`lab/downloadfile/`+ '180108005/0', {
            responseType: 'arraybuffer',
            headers: {
                Accept: 'application/pdf',
            },
        }).then(resp => {
            setPDFData(resp.data)
            console.log(pdfData);
            const file = new Blob([pdfData],{ type: "application/pdf", filename: 'sample.pdf' , __filename: "sample.pdf" });
            const fileUrl = URL.createObjectURL(file);
            //window.open(fileUrl, '_blank')
            console.log(resp);
            console.log('Done')
        })
        .catch(e => {
            console.log('Done')
            console.log(e)
        })
    }

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
                <tr className='tableRow'>
                    <th scope="row" className=''>348539039</th>
                    <td className=''>07/01/2017</td>
                    <td> 
                        <Button color='primary' className='col-9' onClick={()=> getData()}>View Report</Button>
                        {/*<Button onClick={openModal} color= "danger">Detail</Button>*/}
                    </td>
                    <td>Biotech Laboratory</td>
                </tr>
                
            </tbody>
        </Table>
    );
}

export default Report;