# COFFEE SHOP DATABASE

SET NAMES utf8mb4;

CREATE DATABASE coffee_shop;
USE coffee_shop;

CREATE TABLE `product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `details` text,
  `price` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `supplier` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `customer_id` int(10) unsigned NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `supplier_id` int(10) unsigned NOT NULL,
  `status_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_supplier` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `order_product` (
  `order_id` int(10) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`order_id`, `product_id`),
  CONSTRAINT `fk_order_product_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_order_product_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
