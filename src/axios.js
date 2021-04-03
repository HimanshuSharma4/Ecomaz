import axios from "axios";

const instance = axios.create({
    baseURL :"http://localhost:5001/ecomaz-638c3/us-central1/api" //THE API (Cloud Function) URL
});

export default instance;