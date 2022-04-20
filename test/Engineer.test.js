const Engineer = require('../lib/Engineer');


test('creates an Engineer object', () => {
    const engineer = new Engineer('Tanya', 26, 'tanyaleepr@gmail', 'tanyaleepr');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// getting their github
test('gets engineer github value', () => {
    const engineer = new Engineer('Tanya', 26, 'tanyaleepr@gmail', 'tanyaleepr');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//role
test('gets role of employee', () => {
    const engineer = new Engineer('Tanya', 26, 'tanyaleepr@gmail', 'tanyaleepr');

    expect(engineer.getRole()).toEqual("Engineer");
});