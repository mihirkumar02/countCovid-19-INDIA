import React, { Component } from 'react';
import {searchState, fetchState} from '../actions/searchActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import StateContainer from './StateContainer';

class Search extends Component {

    componentDidUpdate(){
        this.props.fetchState(this.props.text);
    }

    handleChange = e => {
        this.props.searchState(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="container Height">
                    <div className="jumbotron jumbotron-fluid mt-5 text-center">
                        <div className="container">
                            <h1 className="display-4 mb-3">
                                <i className="fa fa-search" /> Search for a State
                            </h1>
                            <form id="searchForm">
                                <select className="form-control" name="searchText" onChange={this.handleChange} placeholder="State name...">
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Ladakh">Ladakh</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telengana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <StateContainer />
                    <div className="heading-center mt-5">
                        <h4><Link className="btn btn-success" to="/">Go to Home Page</Link></h4>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.states.text
})

export default connect(mapStateToProps, {searchState, fetchState})(Search);
