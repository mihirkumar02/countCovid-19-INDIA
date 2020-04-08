import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

//import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {searchState, fetchState} from '../actions/searchActions';
import {connect} from 'react-redux';
//import {compose} from 'redux';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoibWloaXJrdW1hcjAyIiwiYSI6ImNrOG0xaG8xZzBiZGQzb28yZG5hMmF2M2sifQ.a_c-YRkYlQNFGzfVWebUnQ'
});

class MapContainer extends Component {

    componentDidUpdate(){
        this.props.fetchState(this.props.text);
    }

    display = (string) => {
        this.props.searchState(string);
    }

    render(){

        return(
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    height: '60vh',
                    width: '80vw'
                }}
                center={[83.088860,23.146633]}
                zoom={[3.6]}
            >
                <Layer type="circle" id="marker" paint={{
                    'circle-color': "#ff0000",
                    'circle-stroke-width': 6,
                    'circle-stroke-color': '#ff0000',
                    'circle-stroke-opacity': 1
                }}>
                    <Feature coordinates={[79.7400, 15.9129]} onClick={() => {this.display('Andhra Pradesh'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[92.6586, 11.7401]} onClick={() => {this.display('Andaman and Nicobar Islands'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[94.7278, 28.2180]} onClick={() => {this.display('Arunachal Pradesh'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[92.9376, 26.2006]} onClick={() => {this.display('Assam'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[85.3131, 25.0961]} onClick={() => {this.display('Bihar'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[81.8661, 21.2787]} onClick={() => {this.display('Chhattisgarh'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[77.1025, 28.7041]} onClick={() => {this.display('Delhi'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[74.1240, 15.2993]} onClick={() => {this.display('Goa'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[71.1924, 22.2587]} onClick={() => {this.display('Gujarat'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[76.0856, 29.0588]} onClick={() => {this.display('Haryana'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[77.1734, 31.1048]} onClick={() => {this.display('Himachal Pradesh'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[76.5762, 33.7782]} onClick={() => {this.display('Jammu and Kashmir'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[85.2799, 23.6102]} onClick={() => {this.display('Jharkhand'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[75.7139, 15.3173]} onClick={() => {this.display('Karnataka'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[76.2711, 10.8505]} onClick={() => {this.display('Kerala'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[77.5770, 34.1525]} onClick={() => {this.display('Ladakh'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[78.6569, 22.9734]} onClick={() => {this.display('Madhya Pradesh'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[75.7139, 19.7515]} onClick={() => {this.display('Maharashtra'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[93.9063, 24.6637]} onClick={() => {this.display('Manipur'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[91.3662, 25.4670]} onClick={() => {this.display('Meghalaya'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[92.9376, 23.1645]} onClick={() => {this.display('Mizoram'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[94.5624, 26.1584]} onClick={() => {this.display('Nagaland'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[85.0985, 20.9517]} onClick={() => {this.display('Odisha'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[79.8083, 11.9416]} onClick={() => {this.display('Puducherry'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[75.3412, 31.1471]} onClick={() => {this.display('Punjab'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[74.2179, 27.0238]} onClick={() => {this.display('Rajasthan'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[88.5122, 27.5330]} onClick={() => {this.display('Sikkim'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[78.6569, 11.1271]} onClick={() => {this.display('Tamil Nadu'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[79.0193, 18.1124]} onClick={() => {this.display('Telangana'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[91.9882, 23.9408]} onClick={() => {this.display('Tripura'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[80.9462, 26.8467]} onClick={() => {this.display('Uttar Pradesh'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[79.0193, 30.0668]} onClick={() => {this.display('Uttarakhand'); window.scrollTo(0,500);}}/>
                    <Feature coordinates={[87.8550, 22.9868]} onClick={() => {this.display('West Bengal'); window.scrollTo(0,500);}}/>
                </Layer>
            </Map>   
        );
    }
}

const mapStateToProps = state => ({
    text: state.states.text
})

export default connect(mapStateToProps, {searchState ,fetchState})(MapContainer); 