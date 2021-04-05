const Manager = require('../lib/Manager.js');

test('manager class', () => {
    const manager = new Manager('jaden', '35', 'jadenrobison8@gmail.com', '4');

    expect(manager.name).toBe('jaden');
    expect(manager.id).toBe('35');
    expect(manager.email).toBe('jadenrobison8@gmail.com');
    expect(manager.officeNumber).toBe('4');

})

test('getRole', () => {
    const manager = new Manager('jaden', '35', 'jadenrobison8@gmail.com', '4');

    const id = manager.getRole();

    expect(id).toBe('Manager');
})