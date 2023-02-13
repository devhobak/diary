CREATE DATABASE diary_system;

CREATE TABLE `diary_system`.`user` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) UNIQUE NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `isAdmin` TINYINT(1) NOT NULL,
    PRIMARY KEY (`id`));