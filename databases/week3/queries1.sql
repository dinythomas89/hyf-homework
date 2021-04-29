SET NAMES utf8mb4;

CREATE DATABASE meal_sharing;
USE meal_sharing;

CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `when` datetime NOT NULL,
  `max_reservations` int(10) unsigned NOT NULL,
  `price` decimal(19,2) NOT NULL,
  `created_date` date NOT NULL,  
  PRIMARY KEY (`id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `number_of_guests` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` date NOT NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,  
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `stars` int(10) unsigned NOT NULL,
  `created_date` date NOT NULL,  
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meals` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

  
-- MEAL
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date) 
VALUES('Stegt flæsk med persillesovs', 'It is a simple and tasty combination of crispy pork, potatoes, and parsley sauce.', 'nordhavn', '2021-03-25 18:00:00', 5, 120.50, '2021-03-25' );
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date) 
VALUES('Smørrebrød', 'Buttered rye bread topped with any combination of meats, cheeses, and garnishes', 'norreport', '2021-03-26 18:00:00', 10, 60.30, '2021-03-26' );
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date) 
VALUES('Risalamande', 'Rice pudding with whipped cream, chopped almonds, and vanilla.', 'osterport', '2021-03-27 18:00:00', 15, 70.25, '2021-03-27' );
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date) 
VALUES('Rød grød med fløde', 'Classic, Danish red porridge with cream', 'vesterport', '2021-03-28 18:00:00', 15, 220.00, '2021-03-28' );
INSERT INTO meal (title, `description`, location, `when`, max_reservations, price, created_date) 
VALUES('Boller i karry', 'Meatballs cooked in a sauce and served with rice.', 'Copenhagen', '2021-03-28 18:00:00', 8, 129, '2021-03-28' );

-- Reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 1, NOW(), '256447', 'John', 'john@mail.com');
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (12, 3, NOW(), '324343', 'Adam', 'adama@mail.com' );
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (15, 4, NOW(), '4363545', 'Henry', 'henry@mail.com' );
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 3, NOW(), '4543366', 'Mary', 'marymary@mail.com' );
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 2, NOW(), '567767', 'Anna', 'annaanna@mail.com' );
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 2, '2021-03-25',  '662367', 'Chris','chris@mail.com');

-- Review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('best impressions', 'Hospitable hosts, delicious dishes, beautiful presentation',1, 5, now());
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('It’s a great experience', 'The ambiance is very welcoming and charming.',3, 4, now());
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Not cooked well', 'not cooked well and got sick', 2, 2,now());
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Excellent food', 'Menu is extensive and seasonal to a particularly high standard.',4, 4, now());
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Save your money','The atmosphere and staff are not good', 2, 3, now());
