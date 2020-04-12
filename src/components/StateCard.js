import React, { Component } from 'react';

class StateCard extends Component {
    render() {
        const {stateValue} = this.props;
        return (
            <div>
                <div className="card card-body bg-dark smallhead text-center h-100">
                    <h1 className="text-light card-title weight-bold">
                        {stateValue.name}
                    </h1>
                    <hr className="styledhr"/>
                    <h5 className="text-warning card-title">
                        Confirmed: {stateValue.active}
                    </h5>
                    <h5 className="text-success card-title">
                        Cured: {stateValue.recovered}
                    </h5>
                    <h5 className="text-danger card-title">
                        Deaths: {stateValue.deaths}
                    </h5>
                    <h3 className="text-light card-title">
                        Total: {parseInt(stateValue.active) + parseInt(stateValue.recovered) + parseInt(stateValue.deaths)}
                    </h3>
                </div>
            </div>
        )
    }
}

export default StateCard;
