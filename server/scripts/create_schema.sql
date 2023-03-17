CREATE DATABASE diary_system;

CREATE TABLE `diary_system`.`user` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) UNIQUE NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `id_admin` TINYINT(1) NOT NULL,
    PRIMARY KEY (`id`));

CREATE TABLE `diary_system`.`record` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `datetime` DATETIME NOT NULL,
    `content_title` TEXT(50) NOT NULL,
    `content_main` LONGTEXT NOT NULL,
    `content_image` LONGBLOB,
    PRIMARY KEY(`id`));

CREATE TABLE `diary_system`.`tag` (
    `id` INT NOT NULL AUTO_INCREMENT,
	`record_id` INT NOT NULL,
    `tag` TEXT(30) NOT NULL,
    PRIMARY KEY(`id`)
);