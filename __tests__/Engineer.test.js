const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test('tests the engineer class', () => {
    const engineer = new Engineer('jaden', 'jadenrobison8', '35', 'engineer');

    expect(engineer.name).toBe('jaden');
    expect(engineer.github).toBe('jadenrobison8');
    
    const role = engineer.getRole();

    expect(role).toBe('Engineer');

    const github = engineer.getGitHub();

    expect(github).toBe('jadenrobison8');

})

