import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="container">
                    <div className="row row-margin">
                        <div className="col-sm-12 col-md-6">
                            <div className="card card-body bg-dark text-center card-height">
                                <h3 className="text-light card-title weight-bold">
                                    What is COVID-19?
                                </h3>
                                <div className="jumbotron bg-light">
                                    <h5 className="text-dark">
                                        COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card card-body bg-dark text-center h-100">
                                <h3 className="text-light card-title weight-bold">
                                    What are the symptoms of COVID-19?
                                </h3>
                                <div className="jumbotron bg-light">
                                    <h6 className="text-dark">
                                    The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-sm-12 col-md-6">
                            <div className="card card-body bg-dark text-center h-70">
                                <h3 className="text-light card-title weight-bold">
                                    How does COVID-19 spread?
                                </h3>
                                <div className="jumbotron bg-light">
                                    <h6 className="text-dark">
                                    People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card card-body bg-dark text-center h-100">
                                <h3 className="text-light card-title weight-bold">
                                    Who is at the risk of developing severe illness?
                                </h3>
                                <div className="jumbotron bg-light">
                                    <h5 className="text-dark">
                                        While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes)  appear to develop serious illness more often than others. 
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-sm-12 col-md-6">
                            <div className="card card-body bg-dark text-center h-70">
                                <h3 className="text-light card-title weight-bold">
                                    How long is the incubation period for COVID-19?
                                </h3>
                                <div className="jumbotron bg-light">
                                    <h6 className="text-dark">
                                        The “incubation period” means the time between catching the virus and beginning to have symptoms of the disease. Most estimates of the incubation period for COVID-19 range from 1-14 days, most commonly around five days. These estimates will be updated as more data become available.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="card card-body bg-dark text-center h-100">
                                <h3 className="text-light card-title weight-bold">
                                    Are antibiotics effective in preventing or treating the COVID-19?
                                </h3>
                                <div className="jumbotron bg-light">
                                    <h5 className="text-dark">
                                        No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat a bacterial infection. 
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heading-center">
                        <h4><Link className="btn btn-success" to="/">Go to Home Page</Link></h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
