DROP DATABASE IF EXISTS cue_db;
CREATE DATABASE cue_db;

USE cue_db;

CREATE TABLE artists
-- single person profile
(
    id INT NOT NULL AUTO_INCREMENT,
    artist_name VARCHAR(300) NOT NULL,
    location_city VARCHAR(300) NOT NULL,
    location_state VARCHAR(300) NOT NULL,
    contact_email VARCHAR(300) NOT NULL,
    contact_insta VARCHAR(300) NOT NULL,
    contact_twitter VARCHAR(300) NOT NULL,
    current_group VARCHAR(300) NOT NULL, 
    instruments VARCHAR(300) NOT NULL,
    past_groups VARCHAR(300) NOT NULL,
    genre VARCHAR(300) NOT NULL, 
    PRIMARY KEY (id)
);
CREATE TABLE venues
-- clubs, hotels, stadiums
(
    id INT NOT NULL AUTO_INCREMENT,
    venue_name VARCHAR(300) NOT NULL,
    location_city VARCHAR(300) NOT NULL,
    location_state VARCHAR(300) NOT NULL,
    contact_email VARCHAR(300) NOT NULL,
    contact_insta VARCHAR(300) NOT NULL,
    contact_twitter VARCHAR(300) NOT NULL,
    genres VARCHAR(300) NOT NULL, 
    PRIMARY KEY (id)
);
CREATE TABLE bands
-- bands, acts, etc.
(
	id INT NOT NULL AUTO_INCREMENT,
    group_name VARCHAR(300) NOT NULL,
    location_city VARCHAR(300) NOT NULL,
    location_state VARCHAR(300) NOT NULL,
    contact_email VARCHAR(300) NOT NULL,
    contact_insta VARCHAR(300) NOT NULL,
    contact_twitter VARCHAR(300) NOT NULL,
    current_group VARCHAR(300) NOT NULL, 
    artist_names VARCHAR(300) NOT NULL,
    genres VARCHAR(300) NOT NULL, 
    PRIMARY KEY (id)
);

CREATE TABLE backstage
-- AV, soundboard, roadies, etc.
(
    id INT NOT NULL AUTO_INCREMENT,
    backstage_name VARCHAR(300) NOT NULL,
    location_city VARCHAR(300) NOT NULL,
    location_state VARCHAR(300) NOT NULL,
    contact_email VARCHAR(300) NOT NULL,
    contact_insta VARCHAR(300) NOT NULL,
    contact_twitter VARCHAR(300) NOT NULL,
    equipment VARCHAR(300) NOT NULL,
    experience VARCHAR(300) NOT NULL,
    genre VARCHAR(300) NOT NULL, 
    PRIMARY KEY (id)
);

