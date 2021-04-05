//tests for the employee class
const Employee = require('../lib/Employee.js');

test('creates new employee object', () => {
    const employee = new Employee('Jaden', '35', 'jadenrobison8@gmail.com');
    
    expect(employee.name).toBe('Jaden');
    expect(employee.id).toBe('35');
    expect(employee.email).toBe('jadenrobison8@gmail.com');
})

test('get name', () => {
    const employee = new Employee('jaden', '35', 'jadenrobison8');

    const name = employee.getName();

    expect(name).toBe('jaden');
})

test('getid', () => {
    const employee = new Employee('jaden', '35', 'jadenrobison8');

    const id = employee.getId();

    expect(id).toBe('35');
})

test('getemail', () => {
    const employee = new Employee('jaden', '35', 'jadenrobison8');

    const email = employee.getEmail();

    expect(email).toBe('jadenrobison8');
})

test('getrole', () => {
    const employee = new Employee('jaden', '35', 'jadenrobison8');

    const id = employee.getRole();

    expect(id).toBe('Employee');
})