import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// instance.get("/movie/550?api_key=ba6b135052d91470df20c5e9026a4dc3");

export default instance;