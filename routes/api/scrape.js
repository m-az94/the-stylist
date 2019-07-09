const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../../models');
const axios = require("axios");
const cheerio = require("cheerio");

// GET: Scrape tops from Forever21
router.get("/tops", (req,res)=>{
    axios.get("https://www.lechateau.com/style/jump/Tops/category/catwfr10025#q_docSort=date&q_docSortOrder=&q_pageNum=5&q_pageSize=60&q_question=&sort=&q_facetTrail=9004:catwfr10025&categoryId=catwfr10025&nsraction=handleProductsLoad")
    .then(response => {
        const results =[];
        const $ = cheerio.load(response.data);
        $("img.catProdImage").each(function(i, element) {
            var image = $(element).attr("src");
            console.log(image)
            results.push({image});
        });
        db.Clothing.updateOne({ type:"tops"},{$push:{image:results }})
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

// GET: Scrape bottoms from Forever21
router.get("/bottoms", (req, res)=>{
    axios.get("https://www.lechateau.com/style/jump/Pants/category/catwfr10028#q_docSort=date&q_docSortOrder=&q_pageNum=4&q_pageSize=60&q_question=&sort=&q_facetTrail=9004:catwfr10028&categoryId=catwfr10028&nsraction=handleProductsLoad")
    .then(response => {
        const results = [];
        const $ = cheerio.load(response.data);
        $("img.catProdImage").each(function(i, element) {
            var image = $(element).attr("src");
            results.push({image});
        });
        db.Clothing.updateOne({ type:"bottoms"},{$push:{image:results }})
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

// GET: Scrape dresses from Forever21
router.get("/dresses", (req, res)=>{
    axios.get("https://www.lechateau.com/style/jump/Dresses/category/cat37630709#q_docSort=date&q_docSortOrder=&q_pageNum=5&q_pageSize=60&q_question=&sort=&q_facetTrail=9004:cat37630709&categoryId=cat37630709&nsraction=handleProductsLoad")
    .then(response => {
        const results = [];
        const $ = cheerio.load(response.data);
        $("img.catProdImage").each(function(i, element) {
            var image = $(element).attr("src");
            results.push({image});
        });
        db.Clothing.updateOne({ type:"dresses"},{$push:{image:results }})
        // db.Clothing.create({ type:"dresses",image:results })
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

// GET: Scrape shoes from Forever21
router.get("/shoes", (req, res)=>{
    axios.get("https://www.lechateau.com/style/jump/Boots/category/cat45250704")
    .then(response => {
        const results = [];
        const $ = cheerio.load(response.data);
        $("img.catProdImage").each(function(i, element) {
            var image = $(element).attr("src");
            results.push({image});
        });
        // db.Clothing.create({ type:"shoes",image:results })
        db.Clothing.updateOne({ type:"shoes"},{$push:{image:results }})
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

// GET: Scrape accessories from Forever21
router.get("/accessories", (req, res)=>{
    axios.get("https://www.lechateau.com/style/jump/Hats+%26+Scarves+/category/cat43810710")
    .then(response => {
        const results = [];
        const $ = cheerio.load(response.data);
        $("img.catProdImage").each(function(i, element) {
            var image = $(element).attr("src");
            results.push({image});
        });
        // db.Clothing.create({ type:"accessories",image:results })
        db.Clothing.updateOne({ type:"accessories"},{$push:{image:results }})
        .then(dbArticles => console.log(dbArticles))
        .catch(err => console.log(err));
    });
    res.send("Scrape Complete!");
});

//------------------------------------------------- View Scraper Data by Document

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

router.get("/allScraped", (req, res)=>{
    db.Clothing.find().then(items=>res.json(items));
})

module.exports=router;