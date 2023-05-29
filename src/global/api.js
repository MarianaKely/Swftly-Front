


import axios from "axios"

const BASE_URL = process.env.REACT_APP_API_URL

function city (){

    const promise = axios.get(`${BASE_URL}/cityList`)
    return promise

}

function flights (){

    const promise = axios.get(`${BASE_URL}/flights`)
    return promise

}

function hotels(){

    const promise = axios.get(`${BASE_URL}/hotels`)
    return promise

}

function hotelId(id){

    const promise = axios.get(`${BASE_URL}/hotels/${id}`)
    return promise

}

function photos (id){
    const promise = axios.get(`${BASE_URL}/photos/${id}`)
    return promise

}


const api = { city,flights,hotelId,hotels,photos}

export default api