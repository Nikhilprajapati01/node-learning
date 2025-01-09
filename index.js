// const axios = require("axios");
import axios from "axios";


async function fecth(){
    const responce = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=de758ea8");
    console.log(responce.data);
}

fecth();