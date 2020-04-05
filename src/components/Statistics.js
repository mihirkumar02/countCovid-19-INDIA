import React, { Component } from 'react';
import MapContainer from './MapContainer';
import StateContainer from './StateContainer';
import { Link } from 'react-router-dom';

class Statistics extends Component {

    render() {
        return (
            <div className="container Statistics">
                <div className="heading-center">
                    <h4 className="heading">Click on any marker to view the State-wise count</h4>
                </div>
                <hr />
                <div className="row">
                    <MapContainer />
                </div>
                <div className="text-center Height stateDiv">
                    <StateContainer />
                </div>
                <div className="heading-center">
                    <h4><Link className="btn btn-success" to="/">Go to Home Page</Link></h4>
                </div>
            </div>
        )
    }
    
}

export default Statistics;