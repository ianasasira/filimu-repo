import axios from "axios";

/*

base url to make requests to the database

*/
const instance = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3",
    }
);

// So basically when we call this instance with the axios create function it passes in the value of the address then adds the 
//movie name that we are looking for
// like instance.get("fast and furios") this appends the movie to the address  https://api.themoviedb.org/3/fast and furios

export default instance;