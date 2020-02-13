CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

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
	   ("Legal"),
	   ("Office");

Select * FROM department;

INSERT INTO roles (title, salary, department_id)

VALUES ("Sales Lead", 150000, 2),
	   ("Salesperson", 90000, 2),
	   ("Lead Engineer", 175000, 1),
	   ("Software Engineer", 125000, 1),
	   ("Account Manager", 150000, 3),
	   ("Accountant", 100000, 3000),
	   ("Legal Team Lead", 200000, 4),
	   ("Copy Machine Guy", 12000, 9);

Select * FROM roles;

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES ("Jack", "Torrance", 3, 3),
	   ("Leia", "Organa", 4, 3),
	   ("Tony", "Montana", 1, null),

Select * FROM employee;
