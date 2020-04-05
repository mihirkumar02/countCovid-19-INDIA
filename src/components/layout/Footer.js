import React from 'react';

const Footer = () => {
    return (  
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Made By: 
                        &nbsp;<span className="font-weight-normal">
                        <a className="text-warning" target="blank" rel="noopener noreferrer" href="https://github.com/mihirkumar02"> Mihir Kumar Singh</a>
                        </span>
                        , using <a className="text-success" target="blank" rel="noopener noreferrer" href="https://api.covid19india.org/">COVID19-India API</a> for project work. The data has been extracted from
                        <div>the Ministry of Health and Family Welfare, Govt. of India <a href="https://www.mohfw.gov.in/" className="text-primary" target="blank" rel="noopener noreferrer">website</a> and <a className="text-primary" target="blank" rel="noopener noreferrer" href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">WHO Official website</a>.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;