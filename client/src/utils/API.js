import axios from "axios";
// import cheerio from "cheerio";

export default {
    findTops: function(){
        return axios.get("/scrape/tops");
    },
    findBottoms: function (){
        return axios.get("/scrape/bottoms");
    },
    findDresses: function(){
        return axios.get("/scrape/dresses");
    },
    findShoes: function(){
        return axios.get("/scrape/shoes");
    },
    findAccessories: function(){
        return axios.get("/scrape/accessories");
    }
}

