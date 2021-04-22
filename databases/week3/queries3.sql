use meal_sharing;

#Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal 
WHERE price < 90;

#Get meals that still has available reservations
SELECT meal_id, title, SUM(number_of_guests) AS number_of_guests, max_reservations FROM meal
LEFT JOIN reservation ON meal.id= reservation.meal_id
group by meal.id
HAVING meal.max_reservations > number_of_guests OR number_of_guests IS NULL ;

#Get meals that partially match a title.
SELECT * FROM meal 
WHERE title like "%Rød grød med%";

#Get meals that has been created between two dates
SELECT * FROM meal
WHERE created_date 
BETWEEN '2021-03-25' AND '2021-03-27';

#Get only specific number of meals
SELECT * FROM meal 
LIMIT 3;

#Get the meals that have good reviews
SELECT review.meal_id, meal.title, review.stars FROM meal
JOIN review ON meal.id=review.meal_id
WHERE stars >3;

#Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation
WHERE meal_id = 2
ORDER BY created_date ASC;

#Sort all meals by average number of stars in the reviews
SELECT meal_id, meal.title, avg(stars) AS average_stars FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal_id
ORDER BY average_stars;

