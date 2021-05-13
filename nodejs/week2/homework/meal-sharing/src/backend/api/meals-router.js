const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
    let selectedMeals = meals;

    //to filter using maxPrice
    if ('maxPrice' in request.query) {
      const maxPrice = parseInt(request.query.maxPrice);
      if (isNaN(maxPrice)) {
        res.status(400).send({ error: "maxPrice must be an integer" });
        return;
      }
      selectedMeals = selectedMeals.filter(meal => meal.price < maxPrice);
    }

    //to filter using title
    if ('title' in request.query) {
      const title = request.query.title;
      selectedMeals = selectedMeals.filter(meal => meal.title.toLowerCase().includes(title));
    }
    
    //to filter using the date created
    if ('createdAfter' in request.query) {
      const createdAfter = new Date(request.query.createdAfter);
      if (!createdAfter.getDate()) {
        response.status(400).send('must be a valid date.');
        return;
      }
      selectedMeals = selectedMeals.filter(meal => new Date(meal.createdAt) > createdAfter);
    }

    //to filter using the limit of meals
    if ('limit' in request.query) {
      const limit = parseInt(request.query.limit);
      if (isNaN(limit)) {
        res.status(400).send({ error: "limit must be an integer" });
        return;
      }
      selectedMeals = selectedMeals.slice(0, limit);
    }
    response.send(selectedMeals);
  }
  catch (error) {
    throw error;
  }
});

//to filter meals by using the given id
router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
      response.status(400).send('User IDs must be integers.');
      return;
    }
    const selectedMeals = meals.filter(meal => meal.id === id);
    if (selectedMeals.length > 0)
      response.send(selectedMeals);
    else
      response.status(400).send('No meal with this id.');
  }
  catch (error) {
    throw error;
  }
});

module.exports = router;
