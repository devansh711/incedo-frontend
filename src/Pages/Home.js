import React,{Component} from 'react'
import { Footer } from '../Components/footer'
import {  Navbarr } from '../Components/navbar'




    export class Home extends Component {

        render()
        {
            return(
                <div>
                      <Navbarr/>
                      <br/>
                      <h3>Investment Portfolio Managment Platform</h3> 
                      <br/> <br/>
                  
                    This is Home Page
                    <br/> <br/>
                    <Footer/>
                </div>
            )
        }
}

