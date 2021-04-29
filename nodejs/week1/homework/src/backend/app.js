const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

//meals with review
const mealWithReview = meals.map(meal => {
  meal.reviews = reviews.filter(review => meal.id === review.mealId)
  return meal;
});

//filter method to get cheap meals
const cheapMeals = mealWithReview.filter(meal => meal.price < 80);
//to find meals having large reservations
const largeMeals = mealWithReview.filter(meal => meal.maxNumberOfGuests > 5);
//choosing a random number
const randomNumber = Math.floor(Math.random() * 3) + 1;

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(mealWithReview);
});

app.get("/cheap-meals", async (request, response) => {
  response.send(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  response.send(largeMeals);
});

app.get("/meal", async (request, response) => {
  response.send(mealWithReview[randomNumber]);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(reservations[randomNumber]);
});

module.exports = app;
