import React, { Component } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {chartDataFetch} from '../actions/searchActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Chart extends Component {

    componentDidMount(){
        this.props.chartDataFetch();
    }

    render() {

        const {dataChart} = this.props;

        return (
            <div className="About">
                <div className="container">
                    <div className="heading-center">
                        <h3 className="heading">Cases in INDIA</h3>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <Doughnut 
                                data={{
                                    labels: ['Active', 'Cured', 'Deaths'], 
                                    datasets:[{
                                        label: 'Cases',
                                        data:[
                                            parseInt(dataChart.active),
                                            parseInt(dataChart.recovered),
                                            parseInt(dataChart.deaths)
                                          ],
                                        backgroundColor:[
                                            'rgba(92,122,255,0.6)',
                                            'rgba(115,251,211,0.6)',
                                            'rgba(255,27,28,0.6)'
                                        ]
                                    }],
                                    }}
                                width={30}
                                height={20}
                            />
                        </div>
                        <div className="col-md-6">
                            <Bar 
                                data={{
                                    labels: ['Total', 'Active', 'Cured', 'Deaths'], 
                                    datasets:[{
                                        label: 'Cases',
                                        data:[
                                            parseInt(dataChart.total),
                                            parseInt(dataChart.active),
                                            parseInt(dataChart.recovered),
                                            parseInt(dataChart.deaths)
                                          ],
                                        backgroundColor:[
                                            'rgba(255,231,135,0.6)',
                                            'rgba(92,122,255,0.6)',
                                            'rgba(115,251,211,0.6)',
                                            'rgba(255,27,28,0.6)'
                                        ]
                                    }],
                                    }}
                                width={50}
                                height={30}
                            />
                        </div>
                    </div>
                    <div className="heading-center mt-5">
                        <h4><Link className="btn btn-success" to="/">Go to Home Page</Link></h4>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dataChart: state.states.chartData
})

export default  connect(mapStateToProps, {chartDataFetch})(Chart);
