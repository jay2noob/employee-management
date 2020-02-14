CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT(10) AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT(10) AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT(10) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT(10) AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10),
    PRIMARY KEY(id)
);

INSERT INTO department (name)

VALUES ("Sales"),
	   ("Engineering"),
	   ("Accounting"),
	   ("Legal");

Select * FROM department;

INSERT INTO roles (title, salary, department_id)

VALUES ("Sales Lead", 150000, 1),
	   ("Salesperson", 90000, 1),
	   ("Lead Engineer", 175000, 2),
	   ("Software Engineer", 125000, 2),
	   ("Account Manager", 150000, 3),
	   ("Accountant", 100000, 3),
	   ("Legal Team Lead", 200000, 4),
	   ("Lawyer", 120000, 4);

Select * FROM roles;

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("John", "Deere", 1, 1),
	   ("Ronald", "McDonald", 2, null),
	   ("Barbara", "Walters", 3, 2),
       ("Tim", "Horton", 4, null),
       ("Hulk", "Hogan", 5, 3),
       ("Baker", "Mayfield", 6, null),
       ("Michael", "Jordan", 7, 4),
       ("Elizabeth", "Warren", 8, null);

Select * FROM employee;