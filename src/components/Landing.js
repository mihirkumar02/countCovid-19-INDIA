import React, { Component } from 'react';

import {fetchAll} from '../actions/searchActions';
import {connect} from 'react-redux';

import Table from './Table';

class Landing extends Component {

    componentDidMount(){
        this.props.fetchAll();
    }

    render() {
        const {all} = this.props;        
        return (
            <div className="Landing">
                <div className="container">
                    <div className="heading-center">
                        <h3 className="heading">Count in INDIA</h3>
                    </div>
                    <hr />
                        {all.map((one, index) => {
                            if(index === 0){
                                    return(
                                    <div>
                                        <div className="text-right mb-4">
                                            Last Updated At: {one.lastupdatedtime}
                                        </div>
                                        <div className="row centered-row">
                                            <div className="col-md-3 text-center">
                                                <h4 className="text-warning card-title weight-bold">
                                                    Active( Ac. ): <b>{one.confirmed}</b>
                                                </h4>
                                            </div>
                                            <div className="col-md-4">
                                                <h5 className="text-success card-title weight-bold">
                                                    Discharged/Migrated( Dis. ): <b>{one.recovered}</b>
                                                </h5>
                                            </div>
                                            <div className="col-md-3 text-center">
                                                <h5 className="text-danger card-title weight-bold">
                                                    Deaths( De. ): <b>{one.deaths}</b>
                                                </h5>
                                            </div>
                                            <div className="col-md-2 text-center">
                                                <h5 className="text-primary card-title weight-bold">
                                                    Total(Tot.): <b>{parseInt(one.confirmed) + parseInt(one.recovered) + parseInt(one.deaths)}</b>
                                                </h5> 
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    <Table />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    all: state.states.all
});

export default connect(mapStateToProps, {fetchAll})(Landing);

