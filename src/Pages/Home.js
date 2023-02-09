import React,{Component} from 'react'
import { Footer } from '../Components/footer'
import { Navbar } from '../Components/navbar'



    export class Home extends Component {

        render()
        {
            return(
                <div>
                      <Navbar/>
                    This is Home Page
                    <Footer/>
                </div>
            )
        }
}

