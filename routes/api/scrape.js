const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../../models');
const axios = require("axios");
const cheerio = require("cheerio");

// GET: Scrape items from Forever21
router.route("/scrape", (req,res)=>{

    // will store scraped values
    let results = {
        tops: [],
        bottoms: [],
        dresses: [],
        shoes: [],
        bags: [],
        accessories: []
    };

    // Scrape tops from forever21
    axios.get("https://www.forever21.com/ca/shop/catalog/category/f21/top_blouses")
    .then(response => {
        
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.tops.push({image});
        });
    })
    // Scrape bottoms from forever21
    axios.get("https://www.forever21.com/ca/shop/catalog/category/f21/women-new-arrivals-clothing-bottoms")
    .then(response => {
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.bottoms.push({image});
        });
    })
    // Scrape dresses from forever21
    axios.get("https://www.forever21.com/ca/shop/catalog/category/f21/dress")
    .then(response => {
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.dresses.push({image});
        });
    })
    // Scrape shoes from forever21
    axios.get("https://www.forever21.com/ca/shop/Search/#brm-search?request_type=search&search_type=keyword&q=shoes&l=shoes")
    .then(response => {
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.shoes.push({image});
        });
    })
    // Scrape bags from forever21
    axios.get("https://www.forever21.com/ca/shop/search/#brm-search?request_type=search&search_type=keyword&q=BAGS&l=BAGS")
    .then(response => {
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.bags.push({image});
        });
    })
    // Scrape accessories from forever21
    axios.get("https://www.forever21.com/ca/shop/Search/#brm-search?request_type=search&search_type=keyword&q=accessories&l=accessories")
    .then(response => {
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.accessories.push({image});
        });
    })

    db.Clothing.create(results)
    .then(dbArticles => console.log(dbArticles))
    .catch(err => console.log(err));

    res.send("Scrape Complete!");
});

module.exports=router;