const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
    try {
        console.log(reviews);
        console.log("in /api/reviews");
        response.send(reviews);
    } catch (error) {
        throw error;
    }
});

//to filter as per the given id
router.get("/:id", async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const selectedReview = reviews.filter(review => review.id === id);
        response.send(selectedReview);
    } catch (error) {
        throw error;
    }
});

module.exports = router;
