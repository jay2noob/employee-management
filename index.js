const inquirer = require('inquirer');
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employees_db'
});

connection.connect(err => {
    if (err) {
        throw err
    }
    console.log(`Connected as id: ${connection.threadId}`)
});


function manageSystem() {
inquirer.prompt ([
    {
        type: "list",
        name: "manageSystem",
        message: "What would you like to do?",
        choices: [
            "View all employees",
            "View all employees by department",
            "View all employees by manager",
            "Add an employee",
            "Remove an employee",
            "Update role",
            "Update manager",
            "View all roles",
            "Add a role",
            "Remove a role"
        ]
    },
]).then(userChoice => {
    switch(userChoice.manageSystem) {
        case "View all employees":
            viewAllEmployees();
            break;
        case "View all employees by department":
            viewByDepartment();
            break;
        case "View all employees by manager":
            viewByManager();
            break;
        case "Add an employee":
            addEmployee();
            break;
        case "Add a Department":
            addDepartment();
            break;
        case "Remove an employee":
            removeEmployee();
            break;
        case "Update employee role":
            updateEmployee();
            break;
        case "Update employee manager":
            updateManager();
            break;
        case "View all roles":
            viewAllRoles();
            break;
        case "Add a role":
            addRole();
            break;
        case "Remove a role":
            removeRole();
            break;
    }
});

function viewAllEmployees(){
    // Display all employees;
    connection.query('select * from employee', function (err, res) {
      console.log(res);
      manageSystem()
    })
};

function viewByDepartment() {
    connection.query('select * from department', function (err, res) {
      let departmentChoices = res.map(function (department) {
        return {name: department.name, value: department.id}
      })
      inquirer.prompt(
        {
          type: 'list',
          name: 'departmentChoice',
          message: 'Select a department.',
          choices: departmentChoices
        }
      ).then(function (userChoice) {
        console.log(userChoice.departmentChoice);
        connection.query(`select first_name, last_name from employee where role_id=${userChoice.departmentChoice}`,
          function (err, res) {
            console.log(res);
            manageSystem()
          }
        )

      })
    })
};

async function getManagers() {
  let managerList = []
  await connection.query('select * from employee where manager_id=null', function(err, res) {
    console.log(res);
    managerList = res
  })
  return managerList
}

function viewByManager() {
    // Display employees by manager;
    getManagers().then(list=>console.log(list))
    manageSystem()
};

function addEmployee() {
    inquirer.prompt ([
        {
            type: "input",
            name: "addEmployee",
            message: "Enter employee's first name.",
            answer: ""
        },
        {
            type: "input",
            name: "addEmployee",
            message: "Enter employee's last name.",
            answer: ""
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Select a role.",
            choices: [
                "Sales Lead",
                "Salesperson",
                "Lead Engineer",
                "Software Engineer",
                "Account Manager",
                "Accountant",
                "Legal Team Lead",
                "Copy Machine Guy"
            ]
        },
        {
            type: "input",
            name: "addEmployee",
            message: "Who is this employee's manager?",
            answer: ""
        }
    ])
};

function addDepartment() {
    inquirer.prompt (
        {
            type: "input",
            name: "addDepartment",
            message: "What would you like to call the new Department?",
            answer: ""
        },
    )
};

function removeEmployee() {
    inquirer.prompt ([
        {
            type: "list",
            name: "removeEmployee",
            message: "Which employee would you like to remove?",
            choices: [
                "Employee A",
                "Employee B",
                "Employee C",
                "Employee D",
                "Employee E",
                "Employee F"
            ]
        },
    ])
};

function updateEmployee() {
    inquirer.prompt ([
        {
            type: "list",
            name: "updateEmployee",
            message: "Which employee would you like to update?",
            choices: [
                "Employee A",
                "Employee B",
                "Employee C",
                "Employee D",
                "Employee E",
                "Employee F"
            ]
        },
    ])
};

function updateManager() {
    inquirer.prompt ([
        {
            type: "list",
            name: "updateManager",
            message: "Which manager would you like to update?",
            choices: [
                "Employee A",
                "Employee B",
                "Employee C",
                "Employee D",
                "Employee E",
                "Employee F"
            ]
        },
    ])
};

function viewAllRoles(){
    
    manageSystem()
};

function addRole() { 
    inquirer.prompt (
        {
            type: "input",
            name: "addRole",
            message: "Enter new role.",
            answer: ""
        },
    )
};

function removeRole() {
    inquirer.prompt ([
        {
            type: "list",
            name: "removeRole",
            message: "Which role would you like to remove?",
            choices: [
                "Sales Lead",
                "Salesperson",
                "Lead Engineer",
                "Software Engineer",
                "Account Manager",
                "Accountant",
                "Legal Team Lead",
                "Lawyer"
            ]
        },
    ])
};
};

manageSystem()