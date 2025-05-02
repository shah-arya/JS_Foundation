const employees = [
    {id: 1, name: 'ABC', age: 25, department: 'IT', salary: 43000, specialization: 'JavaScript'},
    {id: 2, name: 'DEF', age: 22, department: 'HR', salary: 45000, specialization: 'Microsoft Suite'},
    {id: 3, name: 'John Smith', age: 30, department: 'Finance', salary: 50000, specialization: 'QuickBooks'}
];

function displayEmployees(){
    const totalEmployees = employees.map((employee, index)=> `<p>${employee.id}: 
     ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');

    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee)=> acc + employee.salary, 0);
    alert(`Total Salaries: ${totalSalaries}`);
}

function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p> ${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeID){
    const foundEmployee = employees.find(employee => employee.id === employeeID);
    if(foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else{
        document.getElementById('employeesDetails').innerHTML = `<p> Employee with id: ${employeeID} does not exist in the system.</p>`;
    }
}

function findBySpecialization(){
    const input = prompt("Which specialization you are looking for? ");
    const findSpecialization = employees.find(employee => employee.specialization === input);
    if(findSpecialization){
        document.getElementById('employeesDetails').innerHTML = `<p>${findSpecialization.id}: ${findSpecialization.name} - ${findSpecialization.department} - ${findSpecialization.specialization}</p>`;
    } else{
        document.getElementById('employeesDetails').innerHTML = `<p> No Employee with Specialization: ${input} exist in the system.</p>`;
    }
}