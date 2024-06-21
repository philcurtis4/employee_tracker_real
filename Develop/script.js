// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  //This works outside of this but not in this code
  let employeesArray = [];

  let addEmployee = true;
  while (addEmployee) {
    let firstName = prompt("Please enter employee's first name.");
    if (!firstName) {
      alert("First name is required.");
      continue; // Restart loop if first name is not provided
    }

    let lastName = prompt("Please enter employee's last name.");
    if (!lastName) {
      alert("Last name is required.");
      continue; // Restart loop if last name is not provided
    }

    let salary = parseInt(prompt("Please enter employee's salary."));
    if (isNaN(salary)) {
      alert("Salary must be a valid number.");
      continue; // Restart loop if salary is not a valid number
    }

    const employee = { firstName, lastName, salary };
    employeesArray.push(employee);

    addEmployee = confirm("Would you like to add another Employee?");
  }

  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for(let i = 0; i < employeesArray.length; i++){
    let currentSalary = parseInt(employeesArray[i].salary);
    totalSalary += currentSalary;

  }
  let averageSalary =parseInt(totalSalary/employeesArray.length);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  let randomPerson = Math.floor(Math.random()*employeesArray.length);
  let answer1 = employeesArray[randomPerson].firstName;
  let answer2 = employeesArray[randomPerson].lastName;
  
  console.log(`Congratulations to ${answer1} ${answer2}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
