#Part 2: School database

SET NAMES utf8mb4;

CREATE DATABASE school_database;
USE school_database;

CREATE TABLE `class` (
  `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `begins_date` DATETIME NOT NULL,
  `ends_date` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student` (
  `id` INT(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `class_id` INT(10) unsigned NOT NULL ,
  CONSTRAINT `fk_student` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX name_idx ON student (name);

ALTER TABLE class 
ADD COLUMN `status` ENUM('not-started', 'ongoing', 'finished') NOT NULL;


