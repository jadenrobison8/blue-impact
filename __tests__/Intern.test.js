const Intern = require('../lib/Intern.js');


test('test intern', () => {
    const intern = new Intern('jaden', '35', 'jadenrobison8@gmail.com', 'UofU');

    expect(intern.name).toBe('jaden');
    expect(intern.id).toBe('35');
    expect(intern.email).toBe('jadenrobison8@gmail.com');
    expect(intern.school).toBe('UofU');

})

test('getRole', () => {
    const intern = new Intern('jaden', '35', 'jadenrobison8@gmail.com', 'UofU');

    const id = intern.getRole();

    expect(id).toBe('Intern');
})

test('getSchool', () => {
    const intern = new Intern('jaden', '35', 'jadenrobison8@gmail.com', 'UofU');

    const id = intern.getSchool();

    expect(id).toBe('UofU');
})
