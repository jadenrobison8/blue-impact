//tests for the employee class
const Employee = require('../lib/Employee.js');

test('creates new employee object', () => {
    const employee = new Employee('Jaden', '35', 'jadenrobison8@gmail.com');
    
    expect(employee.name).toBe('Jaden');
    expect(employee.id).toBe('35');
    expect(employee.email).toBe('jadenrobison8@gmail.com')
})

//getName()

//getId()

//getEmail()

//getRole()

