Create Database hazi
Default Character set utf8
Collate utf8_hungarian_ci;

use hazi;

Create Table users(
    id int Primary key AUTO_INCREMENT,
    username Varchar (255) Unique,
    email Varchar(255) Unique,
    password Varchar  (255) Unique,
    Address Varchar  (255) Unique,
    phonnumber Varchar (255) Unique
);
