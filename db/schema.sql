CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (20),
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);

