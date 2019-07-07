import axios from "axios";
import cheerio from "cheerio";

// export default {
//     getTopsFromASOS: 
//     }
// }

export default {
    getRandomDog: function () {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getDogsOfBreed: function (breed) {
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    },
    getBaseBreedsList: function () {
        return axios.get("https://dog.ceo/api/breeds/list");
    },
    getClientInfo: function () {
        return axios.get("/api/userinfo");
    },
    postClientInfo: function (data) {

        console.log("test");
        console.log(data);
        return axios.post("/api/userinfo",data)
    }
};  
