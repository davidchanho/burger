CREATE DATABASE burger_db;
USE burger_db

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY
    (id)
)
