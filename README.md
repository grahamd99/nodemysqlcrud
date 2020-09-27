# nodemysqlcrud

Based on this turorial
https://www.javaguides.net/2020/02/nodejs-express-and-mysql-restful-crud-api-tutorial.html

1) Set up MySQL:

a) create database demo;

or ...

mysqladmin -u root -p create demo;

b) create todos table in 'demo' database:

CREATE TABLE `todos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

c) create new user e.g. in MySQL Workbench and use standard authentication (not sha etc)

Put the following in .env file
HOST = <host>
USER = <user>
PASSWORD = <password>
