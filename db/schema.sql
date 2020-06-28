-- TODO:
-- Write SQL queries this file that do the following:

-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:


-- id: an auto incrementing int that serves as the primary key.

-- burger_name: a string.

-- devoured: a boolean.


DROP DATABASE IF EXISTS burger_log_DB;
CREATE DATABASE burger_log_DB;
USE burger_log_DB;


CREATE TABLE my_burgers (
    id INT(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(150) NOT NULL,
    eaten BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);