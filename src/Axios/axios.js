import axios from "axios";
// const accessToken = "2cd33fa62e21100a961240f42827f16e"

// const apiUrl = "https://api.porndb.me/api";


const getMoviesApi = axios.create({
  baseURL: "http://localhost:5000"

});





export const loadMoviesData = async () => {
    const response = await getMoviesApi.get("/videos");
    return response.data
}


 