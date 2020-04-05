import React, { Component } from 'react';
import {connect} from 'react-redux';
import StateCard from './StateCard';
import NoCase from './NoCase';

class StateContainer extends Component {
    render() {
        const {stateValue} = this.props;
        let content = '';

        content = stateValue.total !== "0" ? <StateCard stateValue={stateValue}/> : <NoCase />
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stateValue: state.states.all
});

export default connect(mapStateToProps)(StateContainer);
