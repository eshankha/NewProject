import React, {Component} from "react";


import './App.css'
import Cardrow from "./components/Cardrow";
import {Container, Row, Col,} from 'react-bootstrap';

import Sidebar from "./components/Sidebar";
import Searchbox from "./components/Searchbox";


class App extends Component {

    render() {
        return (
            <div className="App">


                <div className='main-screenflex'>
                    <Sidebar/>

                    <div>
                        <Searchbox/>
                        <h1 className='text-styling'>Popular Books</h1>
                        <Cardrow/>
                        <h1 className='text-styling'>Free Book for You</h1>
                        <Cardrow/>
                    </div>

                </div>


            </div>


        );
    }


}

export default App;



