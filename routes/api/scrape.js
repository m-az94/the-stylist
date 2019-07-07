const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../../models');
const axios = require("axios");
const cheerio = require("cheerio");

// GET: Scrape tops from Forever21
router.get("/tops", (req,res)=>{
    axios.get("https://www.forever21.com/ca/shop/catalog/category/f21/top_blouses")
    .then(response => {
        const results =[];
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            console.log(image)
            results.push({image});
        });
        db.Clothing.create({ type:"tops",image:results })
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

// GET: Scrape bottoms from Forever21
router.get("/bottoms", (req, res)=>{
    axios.get("https://www.forever21.com/ca/shop/catalog/category/f21/women-new-arrivals-clothing-bottoms")
    .then(response => {
        const results = [];
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.push({image});
        });
        db.Clothing.create({ type:"bottoms",image:results })
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

// GET: Scrape dresses from Forever21
router.get("/dresses", (req, res)=>{
    axios.get("https://www.forever21.com/ca/shop/catalog/category/f21/dress")
    .then(response => {
        const results = [];
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.push({image});
        });
        db.Clothing.create({ type:"dresses",image:results })
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

// GET: Scrape shoes from Forever21
router.get("/shoes", (req, res)=>{
    axios.get("https://www.forever21.com/ca/shop/catalog/category/f21/shoes")
    .then(response => {
        const results = [];
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.push({image});
        });
        db.Clothing.create({ type:"shoes",image:results })
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

// GET: Scrape bags from Forever21
// router.get("/bags", (req, res)=>{
//     axios.get("https://www.forever21.com/ca/shop/search/#brm-search?request_type=search&search_type=keyword&q=BAGS&l=BAGS")
//     .then(response => {
//         const results = [];
//         const $ = cheerio.load(response.data);
//         $("img.product_image").each(function(i, element) {
//             var image = $(element).attr("src");
//             results.push({image});
//         });
//         db.Clothing.create({ type:"bags",image:results })
//         .then(dbArticles => console.log(dbArticles))
//         .catch(err => console.log(err));
//     });
//     res.send("Scrape Complete!");
// });

// GET: Scrape accessories from Forever21
router.get("/accessories", (req, res)=>{
    axios.get("https://www.forever21.com/ca/shop/catalog/category/f21/acc")
    .then(response => {
        const results = [];
        const $ = cheerio.load(response.data);
        $("img.product_image").each(function(i, element) {
            var image = $(element).attr("data-original");
            results.push({image});
        });
        db.Clothing.create({ type:"accessories",image:results })
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

// router.get("/scrapeditems", (req, res)=>{
//     db.Clothing
//     .find()
//     .then(items => res.json(items));

// })

router.get("/scrapedTops", (req, res) =>{
    db.Clothing
    .find({type: "tops"})
    .then(items => res.json(items));
});

router.get("/scrapedBottoms", (req, res) =>{
    db.Clothing
    .find({type: "bottoms"})
    .then(items => res.json(items));
});

router.get("/scrapedDresses", (req, res) =>{
    db.Clothing
    .find({type: "dresses"})
    .then(items => res.json(items));
});

router.get("/scrapedShoes", (req, res) =>{
    db.Clothing
    .find({type: "shoes"})
    .then(items => res.json(items));
});

router.get("/scrapedAccessories", (req, res) =>{
    db.Clothing
    .find({type: "accessories"})
    .then(items => res.json(items));
});

module.exports=router;