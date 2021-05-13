const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
    try {
        console.log(reservations);
        console.log("in /api/reservations");
        response.send(reservations);
    } catch (error) {
        throw error;
    }
});

//to filter as per id
router.get("/:id", async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const selectedReservation = reservations.filter(reservation => reservation.id === id);
        response.send(selectedReservation);
    } catch (error) {
        throw error;
    }
});

module.exports = router;
