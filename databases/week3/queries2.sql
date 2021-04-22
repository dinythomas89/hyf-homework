use meal_sharing;

-- MEAL
#Get all meals
SELECT * FROM meal;
#Add a new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES('Koldskål med kammerjunker', 'Made with buttermilk, eggs, sugar, cream, vanilla, and sometimes lemon.', 'copenhagen', '2021-03-28 18:00:00', 7, 128.50, '2021-03-25' );
#Get a meal with any id
SELECT * FROM meal 
WHERE id = 6;
#Update a meal with any id. Update any attribute or multiple attributes
UPDATE meal 
SET 
	location = 'vesterport',
	max_reservations = 12
WHERE id = 6;
#Delete a meal with any id, fx 1
DELETE FROM meal 
WHERE id = 6;

-- Reservation
#Get all reservations
SELECT * FROM reservation;
#Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 1, '2021-04-22', '6787767', 'Merick', 'merick@mail.com' );
#Get a reservation with any id
SELECT * FROM reservation 
WHERE id = 7;
#Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET	number_of_guests = 2
WHERE id = 7;
#Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE id = 7;

-- Review
#Get all reviews
SELECT * FROM review;
#Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Food is stunning', 'Love this place and will continue to visit.',1, 5, now());
#Get a review with any id, fx 1
SELECT * FROM review 
WHERE id = 6;
#Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review 
SET	stars = 4
WHERE id = 6;
#Delete a review with any id, fx 1
DELETE FROM review 
WHERE id = 6;