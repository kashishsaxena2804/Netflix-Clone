import axios from "axios";


const URL = "https://api.themoviedb.org/3/authentication";
const API_KEY =  "3bb94fd8ccb456d2aad05425b59b0d03";

const endpoints ={
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
}