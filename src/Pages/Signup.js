import React,{Component} from 'react'
import { Footer } from '../Components/footer'
import { Navbar } from '../Components/navbar'



    export class Signup extends Component {

        render()
        {
            return(
                <div>
                    <Navbar/>
                    Signup page for Advisor
                    <Footer/>
                </div>
            )
        }
}