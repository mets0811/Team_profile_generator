const Intern = require('../lib/Intern.js');


test('creates an Intern object', () => {
    const intern = new Intern('Tanya', 26, 'tanyaleepr@gmail', 'Vandy');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// getting their school info
test('gets employee school', () => {
    const intern = new Intern('Tanya', 26, 'tanyaleepr@gmail', 'Vandy');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// role
test('gets role of employee', () => {
    const intern = new Intern('Tanya', 26, 'tanyaleepr@gmail.com', 'Vandy');

    expect(intern.getRole()).toEqual("Intern");
}); 