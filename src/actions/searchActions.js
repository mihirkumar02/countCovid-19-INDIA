import {SEARCH_STATE, FETCH_STATE, FETCH_ALL, CHART_DATA} from './types';

import axios from 'axios';

export const searchState = text => dispatch => {
    dispatch({
        type: SEARCH_STATE,
        payload: text
    })
}


export const fetchState = text => dispatch => {
    axios.get("https://api.covid19india.org/data.json")
        .then(res => {
            res.data.statewise.forEach((term) => {
                if(term.state === text) dispatch({
                    type: FETCH_STATE,
                    payload: {
                        name: term.state,
                        active: term.active,
                        deaths: term.deaths,
                        recovered: term.recovered,
                        total: term.confirmed
                    }
                })
            })})
        .catch(err => console.log("Error is: " + err));
}

export const fetchAll = () => dispatch => {
    axios.get("https://api.covid19india.org/data.json")
        .then(res => dispatch({
            type: FETCH_ALL,
            payload: res.data.statewise
        }))
        .catch(err => console.log("Error is:" + err));
}

export const chartDataFetch = () => dispatch => {
    axios.get("https://api.covid19india.org/data.json")
        .then(res => {
            res.data.statewise.forEach((term) => {
            if(term.state === "Total") dispatch({
                type: CHART_DATA,
                payload: {
                    name: term.state,
                    active: term.active,
                    deaths: term.deaths,
                    recovered: term.recovered,
                    total: term.confirmed
                }
            })
        })})
        .catch(err => console.log('Error is: ' + err));
}