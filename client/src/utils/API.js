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
  createOutfit: function (sendOutfit) {
    axios.post("api/outfit/stylistClientRef", sendOutfit);
  },
  allOutfit: function (storeOutfit) {
    axios.get("api/outfit/stylistClientRef");
  },
  findClientOutfit: function (id) {
    axios.get("api/outfit/stylistClientRef/" + id);
  },
  updateClientOutfit: function (id) {
    axios.post("api/outfit/stylistClientRef/" + id, )
  },

  // Kathy 
  getClientInfo: function () {
    return axios.get("/api/userinfo");
  },
  getCurrentClientInfo: function (url) {
    return axios.get(url);
  },
  postClientInfo: function (data) {
    console.log("test");
    console.log(data);
    return axios.post("/api/userinfo", data)
  },
  getOutfit: function (clientID) {
    return axios.get("/api/outfit/stylistClientRef/client/" + clientID)
  },
  isHot: function (id, data) {
    return axios.put("/api/outfit/stylistClientRef/" + id, data)
  },


  // Outfits - clientStylistRef model
  createOutfit: function (sendOutfit) {
    return axios.post("/api/outfit/stylistClientRef", sendOutfit);
  },
  allOutfit: function (storeOutfit) {
    return axios.get("/api/outfit/stylistClientRef");
  },
  findClientOutfit: function (id) {
    return axios.get("/api/outfit/stylistClientRef/" + id);
  },
  updateClientOutfit: function (id) {
    return axios.post("/api/outfit/stylistClientRef/" + id);
  },
  getCurrentClient: function (id) {
    return axios.get("/api/outfit/stylistClientRef/stylist/" + id)
  },

  // Kathy 
  // getRandomDog: function() {
  //   return axios.get("https://dog.ceo/api/breeds/image/random");
  // },
  // getDogsOfBreed: function (breed) {
  //     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  // getBaseBreedsList: function () {
  //     return axios.get("https://dog.ceo/api/breeds/list");
  // },
  getClientInfo: function () {
    return axios.get("/api/userinfo");
  },
  getCurrentClientInfo: function (url) {
    return axios.get(url);
  },
  postClientInfo: function (data) {
    console.log("test");
    console.log(data);
    return axios.post("/api/userinfo", data)
  },
  createMeeting: function (data) {
    // console.log("test");
    // console.log(data);
    return axios.post("/api/meetings/create", data)
  },
  getBookMeeting: function (data) {
    // console.log("test");
    // console.log(data);
    return axios.get("/api/meetings/book")
  },
  bookedMeeting: function (data) {
    // console.log("test");
    // console.log(data);
    return axios.post("/api/meetings/book", data)
  },
  getMeetingClient: function () {
    return axios.get("/api/meetings/getMeetingClient")
  },
  getMeetingStylist: function () {
    return axios.get("/api/meetings/getMeetingStylist")
  },
  meetingInfo: function (link) {
    return axios.get(link)
  }

};