use meal_sharing;

#Get meals that has a price smaller than a specific price fx 90
SELECT
    *
FROM
    meal
WHERE
    price < 90;

#Get meals that still has available reservations
SELECT
    meal.id AS meal_id,
    title,
    description,
    location,
    price,
    max_reservations,
    COALESCE(SUM(number_of_guests), 0) AS total_reservations
FROM
    meal
    LEFT JOIN reservation ON meal.id = meal_id
GROUP BY
    meal.id
HAVING
    max_reservations > total_reservations;

#Get meals that partially match a title.
SELECT
    *
FROM
    meal
WHERE
    title like "%Rød grød med%";

#Get meals that has been created between two dates
SELECT
    *
FROM
    meal
WHERE
    created_date BETWEEN '2021-03-25'
    AND '2021-03-27';

#Get only specific number of meals
SELECT
    *
FROM
    meal
LIMIT
    3;

#Get the meals that have good reviews
SELECT
    meal.id AS meal_id,
    meal.title,
    review.stars
FROM
    meal
    JOIN review ON meal.id = review.meal_id
WHERE
    stars > 3;

#Get reservations for a specific meal sorted by created_date
SELECT
    *
FROM
    reservation
WHERE
    meal_id = 2
ORDER BY
    created_date ASC;

#Sort all meals by average number of stars in the reviews
SELECT
    meal.id AS meal_id,
    meal.title,
    avg(stars) AS average_stars
FROM
    meal
    LEFT JOIN review ON meal.id = review.meal_id
GROUP BY
    meal_id
ORDER BY
    average_stars;