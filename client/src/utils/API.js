import axios from "axios";
// import cheerio from "cheerio";

export default {
  // Inventory - scrape model
    findTops: function(){
        return axios.get("api/scrape/scrapedTops");
    },
    findBottoms: function (){
        return axios.get("api/scrape/scrapedBottoms");
    },
    findDresses: function(){
        return axios.get("api/scrape/scrapedDresses");
    },
    findShoes: function(){
        return axios.get("api/scrape/scrapedShoes");
    },
    findAccessories: function(){
        return axios.get("api/scrape/scrapedAccessories");
    },

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
    },
    createMeeting: function (data) {
        // console.log("test");
        // console.log(data);
        return axios.post("/api/meetings/create",data)
    },
    getMeetingClient: function () {
      return axios.get("/api/meetings/getMeetingClient")
  },
  getMeetingStylist: function () {
    return axios.get("/api/meetings/getMeetingStylist")
}

  };