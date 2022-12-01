import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
}); 

export const getMovies = async () => {
    const response = await api.get("/videos")
    return response.data
 }