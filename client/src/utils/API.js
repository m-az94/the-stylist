import axios from "axios";
// import cheerio from "cheerio";

export default {
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
    }
}

