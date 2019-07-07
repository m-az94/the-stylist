import axios from "axios";
import tops from "./tops.json";
import bottoms from "./bottoms.json";
import dresses from "./dresses.json";
import shoes from "./shoes.json";
import accessories from "./accessories.json";

export default {
  // Inventory - scrape model
    findTops: tops,
    findBottoms: bottoms,
    findDresses: dresses,
    findShoes: shoes,
    findAccessories: accessories,

    // Outfits - clientStylistRef model
    createOutfit: function(sendOutfit){
      axios.post("api/outfit/stylistClientRef", sendOutfit);
    },
    allOutfit: function(storeOutfit){
      axios.get("api/outfit/stylistClientRef");
    },
    findClientOutfit: function(id){
      axios.get("api/outfit/stylistClientRef/"+id);
    },
    updateClientOutfit: function(id){
      axios.post("api/outfit/stylistClientRef/"+id, )
    },
    
    // Kathy 
    getRandomDog: function() {
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