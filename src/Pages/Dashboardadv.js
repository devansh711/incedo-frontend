import React,{Component} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Navbarr } from '../Components/navbar';

    export class Dashboardadv extends Component {

        render()
        {
            return(
               <>
                {/* <Navbarr/> */}
                <div className='container'>
                    
                <h3>Advisor Dashboard</h3>
                <Button variant="primary" href="/ClientList">Client List</Button>{' '}
                <Button variant="outline-secondary">Investments</Button>{' '}
                <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>client Name</th>
                    <th>Proposed</th>
                    <th>Pending</th>
                    <th>Net Investment</th>
                    <th>Market value</th>
                    <th>Inception Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>2</td>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>3</td>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
              <Button variant="warning">Add New Client + </Button>{' '}
                </div>
               </>
               
                
            )
        }
}