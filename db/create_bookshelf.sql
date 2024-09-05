-- MySQL Script generated by MySQL Workbench
-- Tue Aug 20 18:09:28 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categories` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(100) NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE INDEX `category_name_UNIQUE` (`category_name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`study_sessions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`study_sessions` (
  `session_id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT NULL,
  `session_duration_minutes` INT NULL,
  `session_date` TIMESTAMP NULL,
  PRIMARY KEY (`session_id`),
  INDEX `category_id_idx` (`category_id` ASC) INVISIBLE,
  CONSTRAINT `study_sessions_category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `mydb`.`categories` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`book_covers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`book_covers` (
  `cover_id` INT NOT NULL AUTO_INCREMENT,
  `cover_image` VARCHAR(100) NOT NULL,
  `cover_color` VARCHAR(7) NOT NULL,
  `cover_text_color` VARCHAR(7) NULL,
  PRIMARY KEY (`cover_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`category_cover`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`category_cover` (
  `category_id` INT NOT NULL,
  `cover_id` INT NOT NULL,
  PRIMARY KEY (`category_id`, `cover_id`),
  INDEX `cover_id_idx` (`cover_id` ASC) VISIBLE,
  CONSTRAINT `category_cover_category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `mydb`.`categories` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cover_id`
    FOREIGN KEY (`cover_id`)
    REFERENCES `mydb`.`book_covers` (`cover_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;








-- テストデータ群   ---------------------------------------------------------------------------------------------------
START TRANSACTION;

-- テストデータ カテゴリ
INSERT INTO categories (category_id, category_name) VALUES
(1, 'PHP'),
(2, 'JavaScript'),
(3, 'HTML/CSS'),
(4, 'Laravel'),
(5, 'MySQL');

INSERT INTO category_cover (category_id, cover_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO book_covers (cover_id, cover_image, cover_color, cover_text_color) VALUES
(1, 's', 'blue', '#000000'), 
(2, 'm', 'yellow', '#000000'), 
(3, 'l', 'white', '#000000'), 
(4, 's', 'red', '#000000'), 
(5, 'm', 'purple', '#000000'), 
(6, 'l', 'green', '#000000'), 
(7, 's', 'orange', '#000000'), 
(8, 'm', 'black', '#000000'), 
(9, 'l', 'pink', '#000000'), 
(10, 's', 'gray', '#000000');



-- テストデータ 勉強セッション
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 15, '2024-05-16 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 15, '2023-11-24 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 111, '2023-10-16 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 79, '2023-10-08 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 88, '2023-10-06 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 15, '2024-07-20 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 116, '2023-09-03 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 15, '2024-05-24 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 102, '2023-09-30 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 262, '2024-03-01 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 30, '2023-10-19 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 125, '2024-06-09 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 286, '2024-01-04 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 246, '2024-02-03 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 137, '2024-04-14 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 102, '2024-08-08 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 259, '2024-06-26 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 297, '2024-01-25 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 255, '2024-05-09 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 272, '2024-05-13 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 117, '2023-09-03 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 85, '2023-11-25 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 68, '2024-02-12 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 176, '2024-03-02 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 47, '2024-07-19 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 276, '2024-07-28 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 224, '2024-04-20 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 242, '2023-11-14 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 70, '2024-04-22 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 108, '2024-04-03 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 46, '2024-05-28 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 99, '2024-02-21 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 242, '2024-01-21 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 183, '2024-02-25 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 39, '2024-05-03 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 177, '2024-04-05 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 125, '2024-01-23 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 233, '2023-11-08 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 72, '2024-03-17 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 182, '2023-11-24 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 172, '2023-08-30 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 182, '2023-11-02 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 256, '2023-11-04 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 209, '2023-11-07 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 222, '2024-03-16 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 150, '2024-06-27 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 89, '2023-09-22 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 103, '2023-12-03 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 26, '2024-07-31 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 277, '2024-02-08 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 281, '2024-08-14 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 111, '2024-05-01 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 280, '2024-07-06 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 151, '2024-05-29 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 255, '2024-05-30 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 118, '2024-03-09 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 153, '2023-11-23 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 111, '2024-05-31 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 259, '2023-09-23 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 93, '2024-01-06 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 191, '2024-03-17 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 286, '2024-07-10 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 43, '2024-06-29 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 187, '2023-11-28 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 115, '2024-08-10 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 89, '2024-08-09 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 50, '2023-12-18 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 183, '2024-04-23 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 288, '2024-02-28 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 168, '2024-05-13 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 149, '2023-11-21 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 29, '2023-09-22 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 57, '2023-11-23 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 23, '2024-08-04 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 64, '2024-03-14 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 216, '2024-06-13 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 271, '2024-07-08 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 80, '2024-08-16 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 162, '2023-09-24 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 163, '2024-07-26 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 244, '2024-03-14 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 146, '2023-12-10 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 86, '2024-07-31 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 191, '2024-03-09 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 257, '2023-10-29 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 61, '2024-06-22 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 32, '2024-01-12 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 286, '2024-02-17 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 115, '2023-11-18 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 224, '2024-03-24 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 200, '2023-10-13 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 53, '2024-01-11 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 183, '2024-02-25 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 230, '2023-12-30 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (3, 290, '2023-11-09 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 137, '2024-03-01 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (4, 255, '2023-12-14 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 38, '2024-07-25 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (1, 37, '2024-08-16 05:53:47');
INSERT INTO study_sessions (category_id, session_duration_minutes, session_date) VALUES (2, 56, '2024-07-30 05:53:47');







COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
